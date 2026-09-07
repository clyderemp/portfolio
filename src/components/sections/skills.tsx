"use client";

import { motion } from "motion/react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillGroups, skillStats } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-t bg-muted/30">
      <motion.div
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SectionHeading
          index="04"
          eyebrow="skills"
          title="Capabilities"
        />

        <dl className="mb-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {skillStats.map((stat) => (
            <div key={stat.label} className="rounded-xl border bg-card px-5 py-4">
              <dd className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                {stat.value}
              </dd>
              <dt className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.code}>
              <CardHeader>
                <p className="font-mono text-xs text-primary">
                  {"// "}
                  {group.code}
                </p>
                <CardTitle>{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge variant="outline" className="font-mono text-[11px]">
                        {item}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
