"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { site } from "@/data/site";

const MAX_MESSAGE_LENGTH = 1000;

const labelClasses = "mb-1.5 block text-sm font-medium text-foreground";
const fieldClasses =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
const errorClasses = "mt-1.5 text-xs text-red-600";

type ContactFields = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

type ContactFormState = ReturnType<typeof useForm<ContactFields>>[0];

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm<ContactFields>(site.formId);

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface p-6 text-center sm:p-8">
        <p role="status" className="text-sm text-accent">
          Thanks — your message is on its way. I&apos;ll reply within a day
          or two.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" required errors={state.errors} />
        <Field label="Last name" name="lastName" required errors={state.errors} />
      </div>

      <Field
        label="Email address"
        name="email"
        type="email"
        required
        errors={state.errors}
      />

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={MAX_MESSAGE_LENGTH}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell me a bit about your project..."
          className={fieldClasses}
        />
        <div className="mt-1.5 flex items-start justify-between gap-3">
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className={errorClasses}
          />
          <span className="ml-auto shrink-0 text-xs text-muted">
            {message.length}/{MAX_MESSAGE_LENGTH}
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-ink-foreground transition-transform duration-200 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:hover:scale-100"
      >
        {state.submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  errors,
}: {
  label: string;
  name: keyof ContactFields;
  type?: string;
  required?: boolean;
  errors: ContactFormState["errors"];
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClasses}>
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={fieldClasses}
      />
      <ValidationError
        prefix={label}
        field={name}
        errors={errors}
        className={errorClasses}
      />
    </div>
  );
}
