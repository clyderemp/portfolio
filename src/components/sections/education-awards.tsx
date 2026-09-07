"use client";

import { AwardIcon, ExternalLinkIcon, GraduationCapIcon } from "lucide-react";
import { motion } from "motion/react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { awards } from "@/content/awards";
import { education } from "@/content/education";

export function EducationAwards() {
  return (
    <section id="education" className="scroll-mt-16 border-t">
      <motion.div
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SectionHeading
          index="05"
          eyebrow="education & awards"
          title="Credentials"
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <GraduationCapIcon className="size-4 text-primary" aria-hidden="true" />
              education
            </h3>
            <ol className="relative space-y-8 border-l pl-6">
              {education.map((degree) => (
                <li key={degree.degree} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute top-1.5 -left-[1.845rem] size-2.5 rounded-full border-2 border-primary bg-background"
                  />
                  <p className="font-mono text-xs text-primary">
                    {degree.period}
                  </p>
                  <p className="mt-1 font-heading text-base font-medium">
                    {degree.degree}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {degree.school}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {degree.notes.map((note) => (
                      <li key={note} className="flex gap-2">
                        <span aria-hidden="true" className="mt-px text-primary">
                          ▸
                        </span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <AwardIcon className="size-4 text-primary" aria-hidden="true" />
              awards &amp; publications
            </h3>
            <div className="space-y-4">
              {awards.map((award) => (
                <Card key={award.title} size="sm">
                  <CardHeader>
                    <p className="font-mono text-xs text-primary">
                      {award.period}
                    </p>
                    <CardTitle>{award.title}</CardTitle>
                    <div>
                      <Badge variant="secondary">{award.org}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-pretty text-sm text-muted-foreground">
                      {award.description}
                    </p>
                    {award.href && (
                      <a
                        href={award.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        View publication
                        <ExternalLinkIcon className="size-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
