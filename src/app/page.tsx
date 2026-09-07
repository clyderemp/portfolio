import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { EducationAwards } from "@/components/sections/education-awards";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <EducationAwards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
