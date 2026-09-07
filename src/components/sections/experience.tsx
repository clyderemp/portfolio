"use client";

import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ExternalLinkIcon } from "lucide-react";
import { motion } from "motion/react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { experience, type Role } from "@/content/experience";

export function Experience() {
  // Static HTML is the mobile layout; desktop upgrades to alternating sides
  // after hydration (media queries can't be evaluated at build time).
  const desktop = useMediaQuery("(min-width: 768px)");

  return (
    <section id="experience" className="scroll-mt-16 border-t bg-muted/30">
      <motion.div
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SectionHeading
          index="02"
          eyebrow="experience"
          title="Where I've worked"
        />
        <Timeline position={desktop ? "alternate" : "right"} sx={{ p: 0 }}>
          {experience.map((role, index) => (
            // before:hidden removes the flex spacer MUI adds when there is no
            // opposite content (the mobile layout); utilities layer > mui layer.
            <TimelineItem
              key={`${role.org}-${role.period}`}
              className="before:hidden"
            >
              {desktop && (
                <TimelineOppositeContent className="pt-5 font-mono text-sm text-muted-foreground">
                  {role.period}
                </TimelineOppositeContent>
              )}
              <TimelineSeparator>
                <TimelineConnector
                  className={index === 0 ? "opacity-0" : "bg-border"}
                />
                <TimelineDot
                  variant="outlined"
                  color="primary"
                  className="border-primary bg-background"
                />
                <TimelineConnector
                  className={
                    index === experience.length - 1 ? "opacity-0" : "bg-border"
                  }
                />
              </TimelineSeparator>
              <TimelineContent className="py-3 pr-0 pl-4 md:px-4">
                <RoleCard role={role} showPeriod={!desktop} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>
    </section>
  );
}

function RoleCard({ role, showPeriod }: { role: Role; showPeriod: boolean }) {
  return (
    <Card className="text-left">
      <CardHeader>
        {showPeriod && (
          <p className="font-mono text-xs text-primary">{role.period}</p>
        )}
        <CardTitle>{role.title}</CardTitle>
        <div>
          <Badge variant="secondary">{role.org}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {role.summary.map((point) => (
            <li key={point.slice(0, 32)} className="flex gap-2">
              <span aria-hidden="true" className="mt-px text-primary">
                ▸
              </span>
              <span className="text-pretty">{point}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {role.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-mono text-[11px]">
              {tag}
            </Badge>
          ))}
        </div>
        {role.link && (
          <a
            href={role.link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            {role.link.label}
            <ExternalLinkIcon className="size-3.5" aria-hidden="true" />
          </a>
        )}
      </CardContent>
    </Card>
  );
}
