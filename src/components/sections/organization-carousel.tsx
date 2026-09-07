import Image from "next/image";

import {
  organizationCarouselHeading,
  organizationLogos,
} from "@/content/organizations";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/utils";

export function OrganizationCarousel() {
  return (
    <section
      aria-labelledby="organization-heading"
      className="border-t bg-background py-10 sm:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="organization-heading"
          className="mb-6 font-mono text-xs tracking-wider text-muted-foreground uppercase"
        >
          {organizationCarouselHeading}
        </h2>
        <div id="organization-logos" className="logo-carousel-window">
          <div className="logo-carousel-track">
            {[false, true].map((duplicate) => (
              <ul
                key={String(duplicate)}
                className="logo-carousel-group"
                aria-label={duplicate ? undefined : organizationCarouselHeading}
                aria-hidden={duplicate || undefined}
                data-duplicate={duplicate}
              >
                {organizationLogos.map((logo) => (
                  <li key={logo.name} className="w-44 shrink-0">
                    <div
                      className={cn(
                        "flex h-24 items-center justify-center rounded-xl border border-border/60 bg-white px-5",
                        logo.darkSurface && "bg-[#111827]",
                      )}
                    >
                      <Image
                        src={withBasePath(logo.image)}
                        alt={duplicate ? "" : logo.name}
                        width={logo.width}
                        height={logo.height}
                        className="h-16 w-full object-contain"
                        loading="eager"
                      />
                    </div>
                    <p className="mt-3 text-center text-[11px] text-muted-foreground">
                      {logo.relationship}
                    </p>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
