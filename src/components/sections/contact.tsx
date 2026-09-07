"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { MailIcon, PhoneIcon, SendIcon } from "lucide-react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { LinkedInIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/content/profile";
import { mailtoHref, sendContactMessage } from "@/lib/contact";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.email("Please enter a valid email address"),
  message: z.string().min(10, "Tell me a bit more — at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface Feedback {
  severity: "success" | "info" | "error";
  text: string;
  /** Offered when the primary transport fails. */
  fallbackHref?: string;
}

const directContacts = [
  { label: "email", value: profile.email, href: `mailto:${profile.email}`, icon: MailIcon },
  { label: "phone", value: profile.phone, href: profile.phoneHref, icon: PhoneIcon },
  { label: "linkedin", value: "in/clyderemp", href: profile.linkedin, icon: LinkedInIcon },
];

export function Contact() {
  const [feedback, setFeedback] = React.useState<Feedback | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    const result = await sendContactMessage(values);
    if (result.ok && result.transport === "web3forms") {
      setFeedback({
        severity: "success",
        text: "Message sent — I'll get back to you soon.",
      });
      reset();
    } else if (result.ok) {
      setFeedback({
        severity: "info",
        text: "Opening your email app with the message prefilled…",
      });
    } else {
      setFeedback({
        severity: "error",
        text: `Couldn't send the message (${result.error}).`,
        fallbackHref: mailtoHref(values),
      });
    }
  }

  return (
    <section id="contact" className="scroll-mt-16 border-t bg-muted/30">
      <motion.div
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SectionHeading
          index="06"
          eyebrow="contact"
          title="Get in touch"
          description="Open to software engineering roles, research collaborations, and interesting problems. The form goes straight to my inbox."
        />
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
          <div className="space-y-3">
            {directContacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border bg-card px-4 py-3 transition hover:border-primary/40"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <contact.icon className="size-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-xs text-muted-foreground">
                    {contact.label}
                  </span>
                  <span className="block truncate text-sm group-hover:text-primary">
                    {contact.value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <Card>
            <CardContent>
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Name</Label>
                    <Input
                      id="contact-name"
                      autoComplete="name"
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p role="alert" className="text-xs text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p role="alert" className="text-xs text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    rows={5}
                    className="min-h-32"
                    placeholder="What would you like to build together?"
                    aria-invalid={!!errors.message}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p role="alert" className="text-xs text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  <SendIcon data-icon="inline-start" />
                  {isSubmitting ? "Sending…" : "Send message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <Snackbar
        open={feedback !== null}
        autoHideDuration={6000}
        onClose={(_, reason) => {
          if (reason !== "clickaway") setFeedback(null);
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={feedback?.severity ?? "success"}
          variant="filled"
          onClose={() => setFeedback(null)}
          action={
            feedback?.fallbackHref ? (
              <Button asChild variant="ghost" size="sm" className="text-inherit">
                <a href={feedback.fallbackHref ?? mailtoHref(getValues())}>
                  Email instead
                </a>
              </Button>
            ) : undefined
          }
        >
          {feedback?.text}
        </Alert>
      </Snackbar>
    </section>
  );
}
