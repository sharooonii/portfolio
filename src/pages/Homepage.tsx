import { AboutMe } from "@/components/Homepage/AboutMe";
import { DesignCarousel } from "@/components/Homepage/DesignCarousel";
import { Footer } from "@/components/Homepage/Footer";
import { Header } from "@/components/Homepage/Header";
import { HomeHero } from "@/components/Homepage/HomeHero";
import { MediaCarousel } from "@/components/Homepage/MediaCarousel";
import { ProjectCarousel } from "@/components/Homepage/ProjectCarousel";
import { Skill } from "@/components/Homepage/Skill";

export const Homepage = () => {
  return (
    <>
      <Header />
      <HomeHero />
      <ProjectCarousel />
      <Skill />
      <DesignCarousel />
      <AboutMe />
      <MediaCarousel />
      <Footer />
    </>
  );
};
