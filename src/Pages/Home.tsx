import ContactSection from "@/components/content";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/Project";
import SkillSection from "@/components/Skill";
import AboutSection from "@/components/About";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
};

export default Home;
