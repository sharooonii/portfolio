import { AboutMe } from "@/components/Homepage/AboutMe";
import { DesignCarousel } from "@/components/Homepage/DesignCarousel";
import { HomeHero } from "@/components/Homepage/HomeHero";
import { MediaCarousel } from "@/components/Homepage/MediaCarousel";
import { ProjectCarousel } from "@/components/Homepage/ProjectCarousel";
import { Skill } from "@/components/Homepage/SkillHome";
import AnimatedSection from "@/components/Utilities/AnimatedSection";

export const LandingPage = () => {
  return (
    <>
      <HomeHero />
      <ProjectCarousel />
      <AnimatedSection>
        <Skill />
      </AnimatedSection>
      <AnimatedSection>
        <DesignCarousel />
      </AnimatedSection>
      <AnimatedSection>
        <AboutMe />
      </AnimatedSection>
      <AnimatedSection>
        <MediaCarousel />
      </AnimatedSection>
    </>
  );
};
