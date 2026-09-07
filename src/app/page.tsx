import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
      </main>
    </>
  );
}
