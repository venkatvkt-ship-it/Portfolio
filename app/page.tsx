import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ColorPicker } from "@/components/color-picker";

export default function Page() {
  return (
    <>
      <Navbar />
      <ColorPicker />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
