"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { business } from "@/data/business";
import type { UiTranslations } from "@/lib/i18n";

type B2BContactFormProps = {
  ui: UiTranslations;
  copy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    fields: {
      name: string;
      email: string;
      company: string;
      role: string;
      phone: string;
      destination: string;
      message: string;
    };
    submit: string;
    note: string;
  };
};

type FormErrors = Partial<Record<keyof B2BContactFormProps["copy"]["fields"] | "general", string>>;
const EMAIL_REGEX = /[^@]+@[^@]+\.[^@]+/;

export function B2BContactForm({ copy, ui }: B2BContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    destination: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const ne: FormErrors = {};
    if (!formData.name.trim()) ne.name = "Please enter your name.";
    if (!formData.email.trim()) ne.email = "Please enter your business email.";
    else if (!EMAIL_REGEX.test(formData.email)) ne.email = "Please enter a valid email address.";
    if (!formData.company.trim()) ne.company = "Please enter your company name.";
    if (!formData.role.trim()) ne.role = "Please tell us your type of business.";
    if (!formData.message.trim()) ne.message = "Please describe what you have in mind.";
    setErrors(ne);
    return Object.keys(ne).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitted) return;
    if (!validate()) { setStatus("error"); return; }
    setStatus("submitting");
    const subject = encodeURIComponent(ui.partnershipInquirySubject);
    const body = encodeURIComponent(
      `${copy.fields.name}: ${formData.name}\n${copy.fields.email}: ${formData.email}\n${copy.fields.company}: ${formData.company}\n${copy.fields.role}: ${formData.role}\n${copy.fields.phone}: ${formData.phone}\n${copy.fields.destination}: ${formData.destination}\n${ui.messageField}: ${formData.message}`,
    );
    setSubmitted(true);
    setStatus("success");
    setTimeout(() => {
      window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
    }, 800);
  };

  if (status === "success") {
    return (
      <Section id="contact">
        <Container>
          <div className="section__heading">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1 className="split-lines">{copy.title}</h1>
          </div>
          <div className="b2b-contact__success" role="status" aria-live="polite">
            <p className="b2b-contact__success-text">
              Your inquiry has been prepared. Your email client should open next —
              please review and send the message.
            </p>
            <p className="b2b-contact__success-note">{copy.note}</p>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="contact">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 className="split-lines">{copy.title}</h1>
          <p className="section-intro">{copy.subtitle}</p>
        </div>

        <div className="b2b-contact">
        <form className="b2b-contact__grid" onSubmit={handleSubmit} noValidate>
            <div className="b2b-contact__field-group">
              <label className="b2b-contact__label" htmlFor="name">
                {copy.fields.name}
              </label>
              <input
                id="name"
                type="text"
                className={`b2b-contact__input ${errors.name ? "b2b-contact__input--error" : ""}`}
                value={formData.name}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            {errors.name && (
              <span id="name-error" className="b2b-contact__error" role="alert">{errors.name}</span>
            )}
            </div>

            <div className="b2b-contact__field-group">
              <label className="b2b-contact__label" htmlFor="email">
                {copy.fields.email}
              </label>
              <input
                id="email"
                type="email"
                className={`b2b-contact__input ${errors.email ? "b2b-contact__input--error" : ""}`}
                value={formData.email}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            {errors.email && (
              <span id="email-error" className="b2b-contact__error" role="alert">{errors.email}</span>
            )}
            </div>

            <div className="b2b-contact__field-group">
              <label className="b2b-contact__label" htmlFor="company">
                {copy.fields.company}
              </label>
              <input
                id="company"
                type="text"
                className={`b2b-contact__input ${errors.company ? "b2b-contact__input--error" : ""}`}
                value={formData.company}
                aria-invalid={errors.company ? "true" : "false"}
                aria-describedby={errors.company ? "company-error" : undefined}
                onChange={(e) => handleChange("company", e.target.value)}
                required
              />
            {errors.company && (
              <span id="company-error" className="b2b-contact__error" role="alert">{errors.company}</span>
            )}
            </div>

            <div className="b2b-contact__field-group">
              <label className="b2b-contact__label" htmlFor="role">
                {copy.fields.role}
              </label>
              <input
                id="role"
                type="text"
                className={`b2b-contact__input ${errors.role ? "b2b-contact__input--error" : ""}`}
                value={formData.role}
                aria-invalid={errors.role ? "true" : "false"}
                aria-describedby={errors.role ? "role-error" : undefined}
                onChange={(e) => handleChange("role", e.target.value)}
                required
              />
            {errors.role && (
              <span id="role-error" className="b2b-contact__error" role="alert">{errors.role}</span>
            )}
            </div>

            <div className="b2b-contact__field-group b2b-contact__full">
              <label className="b2b-contact__label" htmlFor="destination">
                {copy.fields.destination} <span className="b2b-contact__optional">(optional)</span>
              </label>
              <input
                id="destination"
                type="text"
                className="b2b-contact__input"
                value={formData.destination}
                onChange={(e) => handleChange("destination", e.target.value)}
              />
            </div>

            <div className="b2b-contact__field-group b2b-contact__full">
              <label className="b2b-contact__label" htmlFor="phone">
                {copy.fields.phone}
              </label>
              <input
                id="phone"
                type="tel"
                className="b2b-contact__input"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>

            <div className="b2b-contact__field-group b2b-contact__full">
              <label className="b2b-contact__label" htmlFor="message">
                {copy.fields.message}
              </label>
              <textarea
                id="message"
                className={`b2b-contact__textarea ${errors.message ? "b2b-contact__textarea--error" : ""}`}
                value={formData.message}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
                rows={5}
                onChange={(e) => handleChange("message", e.target.value)}
                required
              />
            {errors.message && (
              <span id="message-error" className="b2b-contact__error" role="alert">{errors.message}</span>
            )}
            </div>

            <div className="b2b-contact__actions">
              <button
                type="submit"
                className="button button--gold"
                disabled={status === "submitting"}
                aria-label={copy.submit}
              >
                {status === "submitting" ? (
                  <span className="b2b-contact__submitting" aria-label="Processing">
                    <span className="b2b-contact__spinner" aria-hidden="true"></span> Sending…
                  </span>
                ) : copy.submit}
              </button>
            </div>

            <p className="b2b-contact__note">{copy.note}</p>
          </form>
        </div>
      </Container>
    </Section>
  );
}
