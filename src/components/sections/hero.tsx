"use client";

import * as React from "react";
import {
  ArrowRightIcon,
  DownloadIcon,
  GraduationCapIcon,
  MapPinIcon,
} from "lucide-react";
import { motion } from "motion/react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { withBasePath } from "@/lib/base-path";

/* Typewriter pacing — tune to taste. */
const TYPE_MS = 55;
const DELETE_MS = 28;
const HOLD_MS = 2200;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return React.useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

/**
 * Starts with the first word fully typed (so the static export renders real
 * content and nothing jumps on hydration), then loops: hold → delete → type
 * the next word. Reduced motion pins the first word.
 */
function useTypewriter(words: readonly string[]) {
  const [wordIndex, setWordIndex] = React.useState(0);
  const [length, setLength] = React.useState(words[0].length);
  const [deleting, setDeleting] = React.useState(false);
  const reducedMotion = usePrefersReducedMotion();

  React.useEffect(() => {
    if (reducedMotion) return;
    const word = words[wordIndex];
    const atFullWord = !deleting && length === word.length;
    const delay = atFullWord ? HOLD_MS : deleting ? DELETE_MS : TYPE_MS;

    const timer = setTimeout(() => {
      if (atFullWord) {
        setDeleting(true);
      } else if (deleting && length === 0) {
        setDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      } else {
        setLength(length + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [words, wordIndex, length, deleting, reducedMotion]);

  return words[wordIndex].slice(0, length);
}

export function Hero() {
  const typedRole = useTypewriter(profile.roles);

  return (
    <section id="top" className="relative overflow-hidden bg-grid">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,var(--glow),transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[7fr_5fr] lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge
            variant="outline"
            className="h-6 gap-1.5 border-primary/40 bg-primary/5 px-2.5 font-mono text-primary"
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {profile.availability}
          </Badge>

          <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          {/* The rotating text is decorative; readers get the full list. */}
          <p
            className="mt-3 h-7 font-mono text-lg text-primary sm:text-xl"
            aria-label={profile.roles.join(", ")}
          >
            <span aria-hidden="true">
              {typedRole}
              <span className="animate-caret-blink">▍</span>
            </span>
          </p>

          <p className="mt-5 max-w-xl text-lg text-pretty text-muted-foreground">
            {profile.headline}
          </p>

          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <dt className="sr-only">Location</dt>
              <MapPinIcon className="size-3.5 text-primary" aria-hidden="true" />
              <dd>{profile.location}</dd>
            </div>
            <div className="flex items-center gap-1.5">
              <dt className="sr-only">Degrees</dt>
              <GraduationCapIcon className="size-3.5 text-primary" aria-hidden="true" />
              <dd>{profile.credentials}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#contact">
                Get in touch
                <ArrowRightIcon data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={withBasePath(profile.resumePath)} download>
                <DownloadIcon data-icon="inline-start" />
                Download résumé
              </a>
            </Button>
            <div className="flex items-center gap-1">
              <Button asChild size="icon-lg" variant="ghost" className="text-muted-foreground">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitHubIcon />
                </a>
              </Button>
              <Button asChild size="icon-lg" variant="ghost" className="text-muted-foreground">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  );
}

/* Terminal-card syntax tokens, mapped to theme palette. */
function Key({ children }: { children: React.ReactNode }) {
  return <span className="text-chart-2">{children}</span>;
}

function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-primary">&quot;{children}&quot;</span>;
}

function Punct({ children }: { children: React.ReactNode }) {
  return <span className="text-muted-foreground">{children}</span>;
}

function TerminalCard() {
  return (
    <div className="overflow-hidden rounded-xl border bg-card shadow-xl shadow-[var(--glow)]">
      <div className="flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-destructive/80" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-primary/80" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-chart-2/60" aria-hidden="true" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          clyde@portfolio:~ · profile.ts
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
        <code>
          <span className="text-chart-4">const</span> engineer <Punct>= {"{"}</Punct>
          {"\n  "}
          <Key>name</Key>
          <Punct>: </Punct>
          <Str>{profile.name}</Str>
          <Punct>,</Punct>
          {"\n  "}
          <Key>credentials</Key>
          <Punct>: </Punct>
          <Str>{profile.credentials}</Str>
          <Punct>,</Punct>
          {"\n  "}
          <Key>roles</Key>
          <Punct>: [</Punct>
          {profile.roles.map((role) => (
            <React.Fragment key={role}>
              {"\n    "}
              <Str>{role}</Str>
              <Punct>,</Punct>
            </React.Fragment>
          ))}
          {"\n  "}
          <Punct>],</Punct>
          {"\n  "}
          <Key>location</Key>
          <Punct>: </Punct>
          <Str>{profile.location}</Str>
          <Punct>,</Punct>
          {"\n  "}
          <Key>status</Key>
          <Punct>: </Punct>
          <Str>{profile.availability}</Str>
          <Punct>,</Punct>
          {"\n"}
          <Punct>{"}"} </Punct>
          <span className="text-chart-4">as const</span>
          <Punct>;</Punct>
        </code>
      </pre>
    </div>
  );
}
