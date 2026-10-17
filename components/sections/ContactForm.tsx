"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { contact, site } from "@/content/home";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Field, Select, TextArea, TextInput } from "../ui/Field";

type FormValues = {
  name: string;
  phone: string;
  industry: string;
  region: string;
  message: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof FormValues, string>>;

const emptyValues: FormValues = {
  name: "",
  phone: "",
  industry: "",
  region: "",
  message: "",
  consent: false,
};

function validate(values: FormValues): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = contact.validation.name;
  if (!/^[0-9+\-\s()]{9,20}$/.test(values.phone.trim())) errors.phone = contact.validation.phone;
  if (!values.industry) errors.industry = contact.validation.industry;
  if (!values.region) errors.region = contact.validation.region;
  if (!values.consent) errors.consent = contact.validation.consent;
  return errors;
}

export function ContactForm() {
  const baseId = useId();
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const fieldId = (name: keyof FormValues) => `${baseId}-${name}`;

  function update<K extends keyof FormValues>(name: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [name]: value }) as FormValues);
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus("success");
      setValues(emptyValues);
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" tone="muted" eyebrow={contact.eyebrow} title={contact.title} description={contact.description}>
      <div className="grid gap-6 lg:grid-cols-[1fr_20rem] lg:gap-8">
        <div className="rounded-2xl border border-ink-200 bg-white p-6 sm:p-8">
          {status === "success" ? (
            <div role="status" className="py-10 text-center">
              <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-7">
                  <path
                    fillRule="evenodd"
                    d="M20.7 6.3a1 1 0 0 1 0 1.4l-9.5 9.5a1 1 0 0 1-1.4 0l-4.5-4.5a1 1 0 1 1 1.4-1.4l3.8 3.8 8.8-8.8a1 1 0 0 1 1.4 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink-900">{contact.successTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{contact.successMessage}</p>
              <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
                다시 작성하기
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <Field
                id={fieldId("name")}
                label={contact.fields.name.label}
                required={contact.fields.name.required}
                error={errors.name}
              >
                <TextInput
                  id={fieldId("name")}
                  name="name"
                  autoComplete="name"
                  placeholder={contact.fields.name.placeholder}
                  value={values.name}
                  hasError={Boolean(errors.name)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${fieldId("name")}-error` : undefined}
                  onChange={(e) => update("name", e.target.value)}
                />
              </Field>

              <Field
                id={fieldId("phone")}
                label={contact.fields.phone.label}
                required={contact.fields.phone.required}
                error={errors.phone}
              >
                <TextInput
                  id={fieldId("phone")}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder={contact.fields.phone.placeholder}
                  value={values.phone}
                  hasError={Boolean(errors.phone)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? `${fieldId("phone")}-error` : undefined}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </Field>

              <Field
                id={fieldId("industry")}
                label={contact.fields.industry.label}
                required={contact.fields.industry.required}
                error={errors.industry}
              >
                <Select
                  id={fieldId("industry")}
                  name="industry"
                  value={values.industry}
                  hasError={Boolean(errors.industry)}
                  aria-invalid={Boolean(errors.industry)}
                  aria-describedby={errors.industry ? `${fieldId("industry")}-error` : undefined}
                  onChange={(e) => update("industry", e.target.value)}
                >
                  <option value="">{contact.fields.industry.placeholder}</option>
                  {contact.industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field
                id={fieldId("region")}
                label={contact.fields.region.label}
                required={contact.fields.region.required}
                error={errors.region}
              >
                <Select
                  id={fieldId("region")}
                  name="region"
                  value={values.region}
                  hasError={Boolean(errors.region)}
                  aria-invalid={Boolean(errors.region)}
                  aria-describedby={errors.region ? `${fieldId("region")}-error` : undefined}
                  onChange={(e) => update("region", e.target.value)}
                >
                  <option value="">{contact.fields.region.placeholder}</option>
                  {contact.regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field
                id={fieldId("message")}
                label={contact.fields.message.label}
                className="sm:col-span-2"
              >
                <TextArea
                  id={fieldId("message")}
                  name="message"
                  rows={5}
                  placeholder={contact.fields.message.placeholder}
                  value={values.message}
                  onChange={(e) => update("message", e.target.value)}
                />
              </Field>

              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 rounded-xl bg-ink-50 p-4">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={values.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                    aria-invalid={Boolean(errors.consent)}
                    className="mt-0.5 size-4 shrink-0 rounded border-ink-300 text-brand-600 focus:ring-brand-600"
                  />
                  <span className="text-xs leading-relaxed text-ink-600">
                    <span className="block font-semibold text-ink-800">{contact.consent.label}</span>
                    <span className="mt-1 block">{contact.consent.detail}</span>
                    <Link
                      href={contact.consent.linkHref}
                      className="mt-1 inline-block font-semibold text-brand-600 underline underline-offset-2"
                    >
                      {contact.consent.linkLabel}
                    </Link>
                  </span>
                </label>
                {errors.consent && (
                  <p role="alert" className="mt-1.5 text-xs font-medium text-brand-600">
                    {errors.consent}
                  </p>
                )}
              </div>

              {status === "error" && (
                <p role="alert" className="sm:col-span-2 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-700">
                  {contact.errorMessage}
                </p>
              )}

              <div className="sm:col-span-2">
                <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
                  {status === "loading" ? contact.submit.loading : contact.submit.idle}
                </Button>
              </div>
            </form>
          )}
        </div>

        <aside className="flex flex-col justify-between gap-6 rounded-2xl bg-ink-950 p-6 text-white sm:p-8">
          <div>
            <h3 className="text-lg font-bold">{contact.sideNote.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">{contact.sideNote.description}</p>
          </div>

          <div>
            <a
              href={site.phoneHref}
              className="block text-2xl font-extrabold tracking-tight hover:text-brand-200 sm:text-3xl"
            >
              {site.phone}
            </a>
            <p className="mt-3 text-xs leading-relaxed text-ink-400">{site.hours}</p>
            <Button href={site.kakaoHref} variant="ghost" className="mt-5 w-full">
              {site.kakaoLabel}
            </Button>
          </div>
        </aside>
      </div>
    </Section>
  );
}
