import { NextResponse } from "next/server";

import { isPoolTypeValue, localeOptions, type Locale } from "@/data/i18n";
import { getSiteUrl } from "@/data/site";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  location?: unknown;
  poolType?: unknown;
  message?: unknown;
  locale?: unknown;
  company?: unknown;
};

type LeadRecord = {
  name: string;
  email: string;
  phone: string;
  location: string;
  poolType: string;
  message: string;
  submittedAt: string;
  source: string;
  locale: Locale;
};

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxBodyBytes = 16 * 1024;
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMaxRequests = 6;
const rateLimitBuckets = new Map<string, RateLimitBucket>();

const fieldLimits = {
  name: 120,
  email: 254,
  phone: 32,
  location: 160,
  poolType: 32,
  message: 2000,
} as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getLocale(value: unknown): Locale {
  const locale = getString(value).toLowerCase();
  const matchedLocale = localeOptions.find((option) => option.id === locale);

  return matchedLocale?.id ?? "pt";
}

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  const cfIp = request.headers.get("cf-connecting-ip")?.trim();

  return cfIp || forwardedFor || realIp || "unknown";
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  const allowedOrigins = new Set([getSiteUrl().origin]);

  if (process.env.NODE_ENV !== "production") {
    allowedOrigins.add("http://localhost:3000");
    allowedOrigins.add("http://127.0.0.1:3000");
  }

  return allowedOrigins.has(origin);
}

function cleanupRateLimitBuckets(now: number) {
  for (const [key, bucket] of rateLimitBuckets) {
    if (bucket.resetAt <= now) {
      rateLimitBuckets.delete(key);
    }
  }
}

function checkRateLimit(key: string) {
  const now = Date.now();

  if (rateLimitBuckets.size > 500) {
    cleanupRateLimitBuckets(now);
  }

  const bucket = rateLimitBuckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    rateLimitBuckets.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
    return true;
  }

  if (bucket.count >= rateLimitMaxRequests) {
    return false;
  }

  bucket.count += 1;
  return true;
}

async function readLimitedJson(request: Request) {
  const contentLength = request.headers.get("content-length");

  if (contentLength && Number(contentLength) > maxBodyBytes) {
    return { error: "payload_too_large" as const };
  }

  if (!request.body) {
    return { error: "invalid_request" as const };
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    totalBytes += value.byteLength;

    if (totalBytes > maxBodyBytes) {
      return { error: "payload_too_large" as const };
    }

    chunks.push(value);
  }

  const body = new TextDecoder().decode(Buffer.concat(chunks));

  try {
    const json = JSON.parse(body) as unknown;

    if (!isRecord(json)) {
      return { error: "invalid_request" as const };
    }

    return { payload: json as LeadPayload };
  } catch {
    return { error: "invalid_request" as const };
  }
}

function hasOversizedField(lead: Record<keyof typeof fieldLimits, string>) {
  return Object.entries(fieldLimits).some(([field, limit]) => {
    const value = lead[field as keyof typeof fieldLimits];
    return value.length > limit;
  });
}

async function deliverLead(leadRecord: LeadRecord) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    if (process.env.NODE_ENV === "production") {
      console.error("lead_delivery_not_configured", {
        source: leadRecord.source,
        locale: leadRecord.locale,
      });
      return false;
    }

    console.info("lead_dev_capture", {
      source: leadRecord.source,
      locale: leadRecord.locale,
      submittedAt: leadRecord.submittedAt,
      hasEmail: Boolean(leadRecord.email),
      hasPhone: Boolean(leadRecord.phone),
      messageLength: leadRecord.message.length,
    });
    return true;
  }

  const url = new URL(webhookUrl);

  if (url.protocol !== "https:" && process.env.NODE_ENV === "production") {
    console.error("lead_delivery_insecure_webhook", { host: url.host });
    return false;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.LEAD_WEBHOOK_SECRET
          ? { Authorization: `Bearer ${process.env.LEAD_WEBHOOK_SECRET}` }
          : {}),
      },
      body: JSON.stringify(leadRecord),
      signal: controller.signal,
    });

    return response.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ code: "forbidden" }, { status: 403 });
  }

  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return NextResponse.json({ code: "unsupported_media_type" }, { status: 415 });
  }

  if (!checkRateLimit(getClientKey(request))) {
    return NextResponse.json({ code: "rate_limited" }, { status: 429 });
  }

  const parsedBody = await readLimitedJson(request);

  if ("error" in parsedBody) {
    return NextResponse.json(
      { code: parsedBody.error },
      { status: parsedBody.error === "payload_too_large" ? 413 : 400 },
    );
  }

  const payload = parsedBody.payload;

  if (getString(payload.company)) {
    return NextResponse.json({ code: "lead_created" }, { status: 201 });
  }

  const lead = {
    name: getString(payload.name),
    email: getString(payload.email),
    phone: getString(payload.phone),
    location: getString(payload.location),
    poolType: getString(payload.poolType),
    message: getString(payload.message),
  };

  if (hasOversizedField(lead)) {
    return NextResponse.json(
      { code: "field_too_large" },
      { status: 400 },
    );
  }

  if (!lead.name) {
    return NextResponse.json(
      { code: "name_required" },
      { status: 400 },
    );
  }

  if (!lead.email && !lead.phone) {
    return NextResponse.json(
      { code: "contact_required" },
      { status: 400 },
    );
  }

  if (lead.email && !emailPattern.test(lead.email)) {
    return NextResponse.json(
      { code: "email_invalid" },
      { status: 400 },
    );
  }

  if (lead.phone && lead.phone.replace(/\D/g, "").length < 9) {
    return NextResponse.json(
      { code: "phone_invalid" },
      { status: 400 },
    );
  }

  if (!lead.location) {
    return NextResponse.json(
      { code: "location_required" },
      { status: 400 },
    );
  }

  if (!lead.poolType) {
    return NextResponse.json(
      { code: "pool_type_required" },
      { status: 400 },
    );
  }

  if (!isPoolTypeValue(lead.poolType)) {
    return NextResponse.json(
      { code: "pool_type_invalid" },
      { status: 400 },
    );
  }

  const leadRecord: LeadRecord = {
    ...lead,
    submittedAt: new Date().toISOString(),
    source: "piscinas-r-abreu-landing-page",
    locale: getLocale(payload.locale),
  };

  const delivered = await deliverLead(leadRecord);

  if (!delivered) {
    return NextResponse.json(
      { code: "lead_delivery_failed" },
      { status: 503 },
    );
  }

  return NextResponse.json(
    { code: "lead_created" },
    { status: 201 },
  );
}
