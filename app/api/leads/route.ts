import { NextResponse } from "next/server";

import { localeOptions, type Locale } from "@/data/i18n";
import { PRODUCTS } from "@/data/products";
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
const rateLimitRetryAfterSeconds = Math.ceil(rateLimitWindowMs / 1000);
const rateLimitBuckets = new Map<string, RateLimitBucket>();
const defaultLeadEmailTo = "geral@piscinasrabreu.pt";
const defaultResendFrom = "Piscinas R Abreu <geral@piscinasrabreu.pt>";

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

function normalizeHeaderValue(value: string | undefined) {
  return value?.replace(/[\r\n]/g, "").trim().slice(0, 128);
}

function getClientKey(request: Request) {
  const forwardedFor = normalizeHeaderValue(
    request.headers.get("x-forwarded-for")?.split(",")[0],
  );
  const realIp = normalizeHeaderValue(request.headers.get("x-real-ip") ?? undefined);
  const cfIp = normalizeHeaderValue(request.headers.get("cf-connecting-ip") ?? undefined);

  return cfIp || forwardedFor || realIp || "unknown";
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  const siteUrl = getSiteUrl();
  const allowedOrigins = new Set([siteUrl.origin]);

  if (siteUrl.hostname.startsWith("www.")) {
    const apexUrl = new URL(siteUrl);
    apexUrl.hostname = siteUrl.hostname.replace(/^www\./, "");
    allowedOrigins.add(apexUrl.origin);
  } else {
    const wwwUrl = new URL(siteUrl);
    wwwUrl.hostname = `www.${siteUrl.hostname}`;
    allowedOrigins.add(wwwUrl.origin);
  }

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

function parseWebhookUrl(webhookUrl: string) {
  try {
    const url = new URL(webhookUrl);

    if (url.username || url.password) {
      return null;
    }

    return url;
  } catch {
    return null;
  }
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

function getPoolTypeLabel(poolType: string, locale: Locale) {
  return (
    PRODUCTS.find((product) => product.id === poolType)?.copy[locale].name ??
    poolType
  );
}

function isAllowedPoolType(poolType: string) {
  return PRODUCTS.some(
    (product) => product.category === "piscinas" && product.id === poolType,
  );
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatLeadText(leadRecord: LeadRecord) {
  const poolLabel = getPoolTypeLabel(leadRecord.poolType, leadRecord.locale);
  const lines = [
    "Novo pedido de orçamento - Piscinas R Abreu",
    "",
    `Nome: ${leadRecord.name}`,
    leadRecord.phone ? `Telefone: ${leadRecord.phone}` : "",
    leadRecord.email ? `Email: ${leadRecord.email}` : "",
    `Localidade: ${leadRecord.location}`,
    `Tipo de piscina: ${poolLabel}`,
    leadRecord.message ? `Mensagem: ${leadRecord.message}` : "",
    "",
    `Idioma: ${leadRecord.locale}`,
    `Origem: ${leadRecord.source}`,
    `Data: ${leadRecord.submittedAt}`,
  ];

  return lines.filter(Boolean).join("\n");
}

function formatLeadHtml(leadRecord: LeadRecord) {
  const poolLabel = getPoolTypeLabel(leadRecord.poolType, leadRecord.locale);
  const rows = [
    ["Nome", leadRecord.name],
    ["Telefone", leadRecord.phone],
    ["Email", leadRecord.email],
    ["Localidade", leadRecord.location],
    ["Tipo de piscina", poolLabel],
    ["Mensagem", leadRecord.message],
    ["Idioma", leadRecord.locale],
    ["Origem", leadRecord.source],
    ["Data", leadRecord.submittedAt],
  ].filter(([, value]) => Boolean(value));

  return `
    <div style="font-family:Arial,sans-serif;color:#061426;line-height:1.5">
      <h1 style="font-size:20px;margin:0 0 16px">Novo pedido de orçamento</h1>
      <table style="border-collapse:collapse;width:100%;max-width:680px">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="border:1px solid #dbe6ee;padding:10px;text-align:left;background:#f6fbfd;width:180px">${escapeHtml(label)}</th>
                  <td style="border:1px solid #dbe6ee;padding:10px;white-space:pre-line">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

async function deliverLeadWithResend(leadRecord: LeadRecord) {
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    return null;
  }

  const to = process.env.LEAD_EMAIL_TO?.trim() || defaultLeadEmailTo;
  const from = process.env.RESEND_FROM?.trim() || defaultResendFrom;
  const subject = `Novo pedido de orçamento - ${leadRecord.name}`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: leadRecord.email || undefined,
      subject,
      text: formatLeadText(leadRecord),
      html: formatLeadHtml(leadRecord),
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    console.error("lead_resend_failed", {
      status: response.status,
      body: body.slice(0, 500),
    });
  }

  return response.ok;
}

async function deliverLead(leadRecord: LeadRecord) {
  const resendDelivered = await deliverLeadWithResend(leadRecord);

  if (resendDelivered !== null) {
    return resendDelivered;
  }

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

  const url = parseWebhookUrl(webhookUrl);

  if (!url) {
    console.error("lead_delivery_invalid_webhook");
    return false;
  }

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
    return NextResponse.json(
      { code: "rate_limited" },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimitRetryAfterSeconds) },
      },
    );
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

  if (!isAllowedPoolType(lead.poolType)) {
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
