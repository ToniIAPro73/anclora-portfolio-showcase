export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

interface ContactValidationMessages {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContactForm(
  values: ContactFormValues,
  messages: ContactValidationMessages,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = messages.name;
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = messages.email;
  }
  const digits = values.phone.replace(/[^\d]/g, "");
  if (digits.length < 7 || digits.length > 15) {
    errors.phone = messages.phone;
  }
  if (values.budget === "") {
    errors.budget = messages.budget;
  }
  if (values.message.trim().length < 10) {
    errors.message = messages.message;
  }

  return errors;
}
