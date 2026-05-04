import { NextResponse } from "next/server";

import { isPoolTypeValue, localeOptions, type Locale } from "@/data/i18n";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  location?: unknown;
  poolType?: unknown;
  message?: unknown;
  locale?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    const json = (await request.json()) as unknown;

    if (!isRecord(json)) {
      return NextResponse.json(
        { code: "invalid_request" },
        { status: 400 },
      );
    }

    payload = json;
  } catch {
    return NextResponse.json(
      { code: "invalid_request" },
      { status: 400 },
    );
  }

  const lead = {
    name: getString(payload.name),
    email: getString(payload.email),
    phone: getString(payload.phone),
    location: getString(payload.location),
    poolType: getString(payload.poolType),
    message: getString(payload.message),
  };

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

  const leadRecord = {
    ...lead,
    submittedAt: new Date().toISOString(),
    source: "piscinas-r-abreu-landing-page",
    locale: getLocale(payload.locale),
  };

  console.log("Nova lead Piscinas R Abreu", leadRecord);

  // TODO: Integrar com email, CRM, Google Sheets ou webhook.

  return NextResponse.json(
    { code: "lead_created" },
    { status: 201 },
  );
}
