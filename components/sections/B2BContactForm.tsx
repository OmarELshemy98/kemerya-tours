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

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(ui.partnershipInquirySubject);
    const body = encodeURIComponent(
      `${copy.fields.name}: ${formData.name}\n${copy.fields.email}: ${formData.email}\n${copy.fields.company}: ${formData.company}\n${copy.fields.role}: ${formData.role}\n${copy.fields.phone}: ${formData.phone}\n${copy.fields.destination}: ${formData.destination}\n${ui.messageField}: ${formData.message}`,
    );
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 className="split-lines">{copy.title}</h1>
          <p className="section-intro">{copy.subtitle}</p>
        </div>

        <div className="b2b-contact">
        <form className="b2b-contact__grid" onSubmit={handleSubmit}>
            <div className="b2b-contact__field-group">
              <label className="b2b-contact__label" htmlFor="name">
                {copy.fields.name}
              </label>
              <input
                id="name"
                type="text"
                className="b2b-contact__input"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>

            <div className="b2b-contact__field-group">
              <label className="b2b-contact__label" htmlFor="email">
                {copy.fields.email}
              </label>
              <input
                id="email"
                type="email"
                className="b2b-contact__input"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>

            <div className="b2b-contact__field-group">
              <label className="b2b-contact__label" htmlFor="company">
                {copy.fields.company}
              </label>
              <input
                id="company"
                type="text"
                className="b2b-contact__input"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                required
              />
            </div>

            <div className="b2b-contact__field-group">
              <label className="b2b-contact__label" htmlFor="role">
                {copy.fields.role}
              </label>
              <input
                id="role"
                type="text"
                className="b2b-contact__input"
                value={formData.role}
                onChange={(e) => handleChange("role", e.target.value)}
                required
              />
            </div>

            <div className="b2b-contact__field-group b2b-contact__full">
              <label className="b2b-contact__label" htmlFor="destination">
                {copy.fields.destination}
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
                className="b2b-contact__textarea"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                required
              />
            </div>

            <div className="b2b-contact__actions">
              <button
                type="submit"
                className="button button--gold"
                aria-label={copy.submit}
              >
                {copy.submit}
              </button>
            </div>

            <p className="b2b-contact__note">{copy.note}</p>
          </form>
        </div>
      </Container>
    </Section>
  );
}
