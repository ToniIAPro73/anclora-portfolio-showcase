import { useState, type FormEvent } from "react";
import { useDemo } from "../lib/demo-context";
import {
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "../lib/validation";

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  budget: "",
  message: "",
};

type SubmitState = "idle" | "submitting" | "success";

export function ContactForm() {
  const { t, events, track } = useDemo();
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const update = (field: keyof ContactFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    track("form_attempt", "contact:submit-attempt");

    const validationErrors = validateContactForm(values, t.contact.errors);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      track("form_error", "contact:validation-failed");
      return;
    }

    setSubmitState("submitting");
    // Simulated submission: local state only, no network request.
    window.setTimeout(() => {
      setSubmitState("success");
      track("form_success", "contact:simulated-success");
    }, 900);
  };

  const reset = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setSubmitState("idle");
  };

  return (
    <section className="section section--light contact" id="contacto" aria-labelledby="contact-title">
      <div className="contact__layout">
        <div className="contact__intro">
          <p className="eyebrow">{t.contact.badge}</p>
          <h2 id="contact-title" className="section__title">
            {t.contact.title} <em>{t.contact.titleAccent}</em>
          </h2>
          <p className="section__subtitle">{t.contact.subtitle}</p>

          <div className="event-log" aria-live="polite">
            <h3 className="event-log__title">{t.contact.eventsTitle}</h3>
            {events.length === 0 ? (
              <p className="event-log__empty">{t.contact.eventsEmpty}</p>
            ) : (
              <ol className="event-log__list">
                {events.map((event) => (
                  <li key={`${event.at}-${event.type}-${event.label}`}>
                    <span className={`event-log__type event-log__type--${event.type}`}>
                      {event.type}
                    </span>
                    <span className="event-log__label">{event.label}</span>
                  </li>
                ))}
              </ol>
            )}
            <p className="event-log__note">{t.contact.eventsNote}</p>
          </div>

          <figure className="contact__media">
            <img
              src="/images/lifestyle/marina.jpg"
              alt={t.contact.imageAlt}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="contact__media-tagline">{t.contact.imageTagline}</figcaption>
          </figure>
        </div>

        <div className="contact__panel">
          {submitState === "success" ? (
            <div className="contact__success" role="status">
              <p className="contact__success-title">{t.contact.successTitle}</p>
              <p className="contact__success-body">{t.contact.successBody}</p>
              <button type="button" className="button button--ghost" onClick={reset}>
                {t.contact.successAgain}
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="contact-name">{t.contact.fields.name}</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder={t.contact.fields.namePlaceholder}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={errors.name ? "field__control--error" : ""}
                />
                {errors.name && (
                  <p className="field__error" id="contact-name-error" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="contact-email">{t.contact.fields.email}</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder={t.contact.fields.emailPlaceholder}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={errors.email ? "field__control--error" : ""}
                  />
                  {errors.email && (
                    <p className="field__error" id="contact-email-error" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="contact-phone">{t.contact.fields.phone}</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder={t.contact.fields.phonePlaceholder}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                    className={errors.phone ? "field__control--error" : ""}
                  />
                  {errors.phone && (
                    <p className="field__error" id="contact-phone-error" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="field">
                <label htmlFor="contact-budget">{t.contact.fields.budget}</label>
                <select
                  id="contact-budget"
                  name="budget"
                  value={values.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  aria-invalid={Boolean(errors.budget)}
                  aria-describedby={errors.budget ? "contact-budget-error" : undefined}
                  className={errors.budget ? "field__control--error" : ""}
                >
                  <option value="">{t.contact.fields.budgetPlaceholder}</option>
                  {t.contact.fields.budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className="field__error" id="contact-budget-error" role="alert">
                    {errors.budget}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="contact-message">{t.contact.fields.message}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder={t.contact.fields.messagePlaceholder}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className={errors.message ? "field__control--error" : ""}
                />
                {errors.message && (
                  <p className="field__error" id="contact-message-error" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="button button--primary contact__submit"
                disabled={submitState === "submitting"}
              >
                {submitState === "submitting" ? t.contact.submitting : t.contact.submit}
              </button>
              <p className="contact__simulation-note">{t.contact.simulationNote}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
