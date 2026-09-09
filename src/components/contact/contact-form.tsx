"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema } from "@/lib/validations/contact";
import { cn } from "@/lib/utils";
import type { ContactFormValues } from "@/types/contact";

type FormStatus = "idle" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "", website: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to send your message right now.");
      }

      setStatus("success");
      setStatusMessage("Thanks — your message has been sent.");
      reset({ name: "", email: "", message: "", website: "" });
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : "Unable to send your message right now.",
      );
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="relative">
      <div className="grid gap-component-gap sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="font-mono text-label uppercase tracking-label text-muted-foreground">
            Name
          </label>
          <Input
            id="contact-name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className="mt-control-y"
            {...register("name")}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-control-y text-small text-foreground">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="font-mono text-label uppercase tracking-label text-muted-foreground">
            Email
          </label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className="mt-control-y"
            {...register("email")}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-control-y text-small text-foreground">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="mt-component-gap">
        <label htmlFor="contact-message" className="font-mono text-label uppercase tracking-label text-muted-foreground">
          Message
        </label>
        <Textarea
          id="contact-message"
          autoComplete="off"
          placeholder="Tell me a little about what you’re working on."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className="mt-control-y"
          {...register("message")}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-control-y text-small text-foreground">
            {errors.message.message}
          </p>
        )}
      </div>
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>
      <div className="mt-layout flex flex-wrap items-center gap-component-gap">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-theme-sm bg-primary px-component-gap py-control-y font-label text-label uppercase tracking-label text-primary-foreground transition-opacity duration-motion-fast ease-editorial hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Sending…" : "Send message"}
        </button>
        {status !== "idle" && (
          <p
            role={status === "error" ? "alert" : "status"}
            aria-live="polite"
            className={cn("text-small", status === "error" ? "text-foreground" : "text-muted-foreground")}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </form>
  );
}
