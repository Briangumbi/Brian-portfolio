"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { site } from "@/data/site";

const MAX_MESSAGE_LENGTH = 1000;

const labelClasses = "mb-1.5 block text-sm font-medium text-foreground";
const fieldClasses =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" required />
      </div>

      <Field label="Email address" name="email" type="email" required />

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
        <div className="mt-1 text-right text-xs text-muted">
          {message.length}/{MAX_MESSAGE_LENGTH}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-ink-foreground transition-transform duration-200 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <p role="status" className="text-sm text-accent">
          Thanks — your message is on its way. I&apos;ll reply within a day
          or two.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong. Please try again, or email me directly at{" "}
          {site.email}.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
    </div>
  );
}
