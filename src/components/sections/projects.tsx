"use client";

import Image from "next/image";
import { ExternalLinkIcon } from "lucide-react";
import { motion } from "motion/react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects, type Project } from "@/content/projects";
import { withBasePath } from "@/lib/base-path";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 border-t">
      <motion.div
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SectionHeading
          index="03"
          eyebrow="projects"
          title="Things I've built"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col transition hover:-translate-y-1 hover:ring-primary/40">
      <CardHeader>
        {/* Deliberately theme-invariant surface: the logos are mixed-format
            assets from the old site and only guaranteed legible on white. */}
        <div className="flex h-16 items-center rounded-lg bg-white px-4 ring-1 ring-border">
          <div className="relative w-full" style={{ height: project.logoHeight }}>
            {/* unoptimized images bypass the loader, so basePath is NOT
                applied automatically — route through withBasePath. */}
            <Image
              src={withBasePath(project.logo)}
              alt={`${project.name} logo`}
              fill
              sizes="240px"
              className="object-contain object-left"
            />
          </div>
        </div>
        <CardTitle className="mt-2">{project.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-pretty text-sm text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-mono text-[11px]">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {project.href && (
        <CardFooter>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
          >
            visit project
            <ExternalLinkIcon className="size-3" aria-hidden="true" />
          </a>
        </CardFooter>
      )}
    </Card>
  );
}
