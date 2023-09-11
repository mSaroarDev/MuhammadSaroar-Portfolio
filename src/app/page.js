import Hero from "@/components/Sections/Hero";
import About from "./about/page";
import Frameworks from "@/components/Sections/Frameworks";
import Skill from "@/app/skills/page";
import Services from "./services/page";
import ContactForm from "@/components/Sections/ContactForm";

export default function BasePath() {
  return (
    <>
      <Hero />
      <Frameworks />
      <About />
      <Skill />
      <Services />
      <ContactForm />
    </>
  );
}
