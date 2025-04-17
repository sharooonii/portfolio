import { AboutMe } from "@/components/Homepage/AboutMe";
import { DesignCarousel } from "@/components/Homepage/DesignCarousel";
import { HomeHero } from "@/components/Homepage/HomeHero";
import { MediaCarousel } from "@/components/Homepage/MediaCarousel";
import { ProjectCarousel } from "@/components/Homepage/ProjectCarousel";
import { Skill } from "@/components/Homepage/Skill";

export const LandingPage = () => {
  return (
    <>
      <HomeHero />
      <ProjectCarousel />
      <Skill />
      <DesignCarousel />
      <AboutMe />
      <MediaCarousel />
    </>
  );
};
