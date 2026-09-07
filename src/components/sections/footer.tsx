import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/content/profile";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold">
            <span className="text-primary">~/</span>clyde-rempillo
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js —
            statically exported to GitHub Pages.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-1">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <GitHubIcon className="size-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedInIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
