"use client";

import { MailIcon } from "lucide-react";
import { motion } from "motion/react";

import { LinkedInIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/content/profile";

const contactFacts = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: MailIcon,
  },
  {
    label: "LinkedIn",
    value: "in/clyderemp",
    href: profile.linkedin,
    icon: LinkedInIcon,
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t">
      <motion.div
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SectionHeading
          index="01"
          eyebrow="about"
          title="Engineer, researcher, builder"
        />
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-pretty text-muted-foreground first:*:text-foreground">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <dl className="h-fit divide-y overflow-hidden rounded-xl border bg-card">
            {profile.facts.map((fact) => (
              <div
                key={fact.label}
                className="grid gap-1 px-4 py-3 sm:grid-cols-[7rem_1fr]"
              >
                <dt className="pt-0.5 font-mono text-xs tracking-wider text-primary uppercase">
                  {fact.label}
                </dt>
                <dd className="text-sm">{fact.value}</dd>
              </div>
            ))}
            {contactFacts.map((fact) => (
              <div
                key={fact.label}
                className="grid gap-1 px-4 py-3 sm:grid-cols-[7rem_1fr]"
              >
                <dt className="pt-0.5 font-mono text-xs tracking-wider text-primary uppercase">
                  {fact.label}
                </dt>
                <dd className="text-sm">
                  <a
                    href={fact.href}
                    target={fact.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-primary hover:underline"
                  >
                    <fact.icon className="size-3.5 text-muted-foreground" aria-hidden="true" />
                    {fact.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  );
}
