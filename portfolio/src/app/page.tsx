import { Navbar } from "@/components/Navbar";
import { Home } from "@/components/Home";
import { AboutMe } from "@/components/AboutMe";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Home />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
