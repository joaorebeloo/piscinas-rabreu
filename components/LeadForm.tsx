"use client";

import { type FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { buildWhatsAppHref } from "@/data/i18n";
import { PRODUCTS } from "@/data/products";

type LeadFormValues = {
  name: string;
  email: string;
  phone: string;
  location: string;
  poolType: string;
  message: string;
};

type LeadFormErrors = Partial<Record<keyof LeadFormValues, string>>;

const initialValues: LeadFormValues = {
  name: "",
  email: "",
  phone: "",
  location: "",
  poolType: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldIds: Record<keyof LeadFormValues, string> = {
  name: "lead-name",
  email: "lead-email",
  phone: "lead-phone",
  location: "lead-location",
  poolType: "lead-pool-type",
  message: "lead-message",
};

const fieldOrder: Array<keyof LeadFormValues> = [
  "name",
  "phone",
  "email",
  "location",
  "poolType",
  "message",
];

function inputClass(hasError?: boolean) {
  return [
    "mt-2 w-full rounded-2xl border bg-white/90 px-4 py-3 text-sm text-[var(--color-navy)] shadow-[inset_0_1px_0_rgba(7,27,53,0.04)] transition duration-500 ease-[var(--ease-premium)] placeholder:text-slate-400 focus:border-[var(--color-pool)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-100 disabled:cursor-not-allowed disabled:opacity-60",
    hasError ? "border-rose-300 ring-4 ring-rose-50" : "border-slate-200",
  ].join(" ");
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} role="alert" className="mt-2 text-xs font-medium text-rose-600">
      {message}
    </p>
  );
}

export function LeadForm({ className = "" }: { className?: string }) {
  const { locale, t } = useLanguage();
  const [values, setValues] = useState<LeadFormValues>(initialValues);
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const poolOptions = useMemo(
    () =>
      PRODUCTS.filter((product) => product.category === "piscinas").map(
        (product) => ({
          value: product.id,
          label: product.copy[locale].name,
        }),
      ),
    [locale],
  );

  function validateLeadForm(currentValues: LeadFormValues): LeadFormErrors {
    const nextErrors: LeadFormErrors = {};
    const name = currentValues.name.trim();
    const email = currentValues.email.trim();
    const phone = currentValues.phone.trim();

    if (!name) {
      nextErrors.name = t.leadForm.errors.name;
    }

    if (!email && !phone) {
      nextErrors.email = t.leadForm.errors.contactEmail;
      nextErrors.phone = t.leadForm.errors.contactPhone;
    }

    if (email && !emailPattern.test(email)) {
      nextErrors.email = t.leadForm.errors.email;
    }

    if (phone && phone.replace(/\D/g, "").length < 9) {
      nextErrors.phone = t.leadForm.errors.phone;
    }

    if (!currentValues.location.trim()) {
      nextErrors.location = t.leadForm.errors.location;
    }

    if (
      !currentValues.poolType.trim() ||
      !poolOptions.some((option) => option.value === currentValues.poolType)
    ) {
      nextErrors.poolType = t.leadForm.errors.poolType;
    }

    return nextErrors;
  }

  function focusFirstError(nextErrors: LeadFormErrors) {
    const firstField = fieldOrder.find((field) => Boolean(nextErrors[field]));

    if (!firstField) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById(fieldIds[firstField])?.focus();
    });
  }

  function updateField(field: keyof LeadFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const nextErrors = { ...current, [field]: undefined };

      if (
        (field === "email" || field === "phone") &&
        current.email === t.leadForm.errors.contactEmail &&
        current.phone === t.leadForm.errors.contactPhone
      ) {
        nextErrors.email = undefined;
        nextErrors.phone = undefined;
      }

      return nextErrors;
    });
    setStatus("idle");
    setStatusMessage("");
  }

  function getSelectedPoolLabel(poolType: string) {
    return poolOptions.find((option) => option.value === poolType)?.label ?? poolType;
  }

  function buildLeadMessage(currentValues: LeadFormValues) {
    const email = currentValues.email.trim();
    const phone = currentValues.phone.trim();
    const message = currentValues.message.trim();
    const lines = [
      `${t.header.quote} - Piscinas R Abreu`,
      "",
      `${t.leadForm.labels.name}: ${currentValues.name.trim()}`,
      phone ? `${t.leadForm.labels.phone}: ${phone}` : "",
      email ? `${t.leadForm.labels.email}: ${email}` : "",
      `${t.leadForm.labels.location}: ${currentValues.location.trim()}`,
      `${t.leadForm.labels.poolType}: ${getSelectedPoolLabel(
        currentValues.poolType,
      )}`,
      message ? `${t.leadForm.labels.message}: ${message}` : "",
    ];

    return lines.filter(Boolean).join("\n");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateLeadForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setStatusMessage(t.leadForm.reviewFields);
      focusFirstError(nextErrors);
      return;
    }

    setStatus("idle");
    setStatusMessage("");

    if (company.trim()) {
      setValues(initialValues);
      setCompany("");
      return;
    }

    window.open(buildWhatsAppHref(buildLeadMessage(values)), "_blank", "noopener");
    setErrors({});
    setStatus("success");
    setStatusMessage(t.leadForm.success);
  }

  return (
    <section
      id="contactos"
      className={`relative overflow-hidden bg-[var(--color-navy)] py-24 text-white sm:py-28 lg:py-36 ${className}`}
    >
      <div className="absolute inset-0 bg-[url('/images/hero-piscina.jpg')] bg-cover bg-center opacity-18" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(7,27,53,0.98),rgba(7,27,53,0.78)_48%,rgba(24,167,201,0.44))]" />

      <div className="section-shell relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="pt-2"
        >
          <SectionEyebrow icon={Send} variant="dark" className="mb-5">
            {t.leadForm.sectionEyebrow}
          </SectionEyebrow>
          <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.leadForm.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-cyan-50/82 sm:text-lg">
            {t.leadForm.intro}
          </p>

          <div className="mt-9 grid max-w-xl gap-4 sm:grid-cols-2">
            {t.leadForm.trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-cyan-50"
              >
                <CheckCircle2 aria-hidden className="h-4 w-4 text-[var(--color-pool)]" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="rounded-[2rem] border border-white/12 bg-white/10 p-2 shadow-[0_32px_100px_-64px_rgba(0,0,0,0.8)]"
        >
          <form
            noValidate
            onSubmit={handleSubmit}
            aria-label={t.leadForm.formAria}
            className="rounded-[1.55rem] bg-white p-5 text-[var(--color-navy)] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] sm:p-7 lg:p-8"
          >
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-pool-dark)]">
                {t.leadForm.formEyebrow}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.leadForm.formTitle}
              </h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                name="company"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div>
                <label htmlFor="lead-name" className="text-sm font-semibold">
                  {t.leadForm.labels.name}
                </label>
                <input
                  id="lead-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder={t.leadForm.placeholders.name}
                  className={inputClass(Boolean(errors.name))}
                  value={values.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "lead-name-error" : undefined}
                  required
                />
                <FieldError id="lead-name-error" message={errors.name} />
              </div>

              <div>
                <label htmlFor="lead-phone" className="text-sm font-semibold">
                  {t.leadForm.labels.phone}
                </label>
                <input
                  id="lead-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder={t.leadForm.placeholders.phone}
                  className={inputClass(Boolean(errors.phone))}
                  value={values.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "lead-phone-error" : undefined}
                />
                <FieldError id="lead-phone-error" message={errors.phone} />
              </div>

              <div>
                <label htmlFor="lead-email" className="text-sm font-semibold">
                  {t.leadForm.labels.email}
                </label>
                <input
                  id="lead-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={t.leadForm.placeholders.email}
                  className={inputClass(Boolean(errors.email))}
                  value={values.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "lead-email-error" : undefined}
                />
                <FieldError id="lead-email-error" message={errors.email} />
              </div>

              <div>
                <label htmlFor="lead-location" className="text-sm font-semibold">
                  {t.leadForm.labels.location}
                </label>
                <input
                  id="lead-location"
                  name="location"
                  type="text"
                  autoComplete="address-level2"
                  placeholder={t.leadForm.placeholders.location}
                  className={inputClass(Boolean(errors.location))}
                  value={values.location}
                  onChange={(event) => updateField("location", event.target.value)}
                  aria-invalid={Boolean(errors.location)}
                  aria-describedby={
                    errors.location ? "lead-location-error" : undefined
                  }
                  required
                />
                <FieldError id="lead-location-error" message={errors.location} />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="lead-pool-type" className="text-sm font-semibold">
                  {t.leadForm.labels.poolType}
                </label>
                <select
                  id="lead-pool-type"
                  name="poolType"
                  className={inputClass(Boolean(errors.poolType))}
                  value={values.poolType}
                  onChange={(event) => updateField("poolType", event.target.value)}
                  aria-invalid={Boolean(errors.poolType)}
                  aria-describedby={
                    errors.poolType ? "lead-pool-type-error" : undefined
                  }
                  required
                >
                  <option value="">{t.leadForm.placeholders.poolType}</option>
                  {poolOptions.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <FieldError id="lead-pool-type-error" message={errors.poolType} />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="lead-message" className="text-sm font-semibold">
                  {t.leadForm.labels.message}
                </label>
                <textarea
                  id="lead-message"
                  name="message"
                  rows={5}
                  placeholder={t.leadForm.placeholders.message}
                  className={`${inputClass(Boolean(errors.message))} resize-none`}
                  value={values.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "lead-message-error" : "lead-message-helper"
                  }
                />
                <p id="lead-message-helper" className="mt-2 text-xs text-slate-500">
                  {t.leadForm.helper}
                </p>
                <FieldError id="lead-message-error" message={errors.message} />
              </div>
            </div>

            <button
              type="submit"
              className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-navy)] px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_56px_-36px_rgba(7,27,53,0.9)] transition duration-500 ease-[var(--ease-premium)] hover:-translate-y-1 hover:bg-[var(--color-navy-soft)] focus-visible:ring-4 focus-visible:ring-cyan-100 active:scale-[0.98] disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Send
                aria-hidden
                className="h-5 w-5 transition duration-500 ease-[var(--ease-premium)] group-hover:translate-x-1"
              />
              {t.leadForm.submit}
            </button>

            {statusMessage ? (
              <p
                role={status === "error" ? "alert" : "status"}
                aria-live={status === "error" ? "assertive" : "polite"}
                data-status={status}
                className={`mt-5 rounded-2xl px-4 py-3 text-sm font-medium ${
                  status === "success"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-rose-50 text-rose-700"
                }`}
              >
                {statusMessage}
              </p>
            ) : null}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default LeadForm;
