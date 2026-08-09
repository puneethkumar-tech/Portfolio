import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackground } from "@/components/portfolio/AmbientBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Statement } from "@/components/portfolio/Statement";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Profiles } from "@/components/portfolio/Profiles";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Thatavarthi Puneeth Kumar — Full Stack Developer";
const description =
  "Computer Science student and aspiring Full Stack AI Developer building practical web applications and exploring modern software technologies.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Thatavarthi Puneeth Kumar, Puneeth Kumar, Computer Science Student, Full Stack Developer, Full Stack AI Developer, AI Developer, Panimalar Engineering College, Andhra Pradesh, React, Next.js, FastAPI",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "Thatavarthi Puneeth Kumar" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:creator", content: "@puneethkumar-tech" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <AmbientBackground />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Statement />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Profiles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
