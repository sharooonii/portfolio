import { Header } from "@/components/Homepage/Header";
import { HomeHero } from "@/components/Homepage/HomeHero";
import { ProjectCarousel } from "@/components/Homepage/ProjectCarousel";
import { Skill } from "@/components/Homepage/Skill";

export const Homepage = () => {
  return (
    <>
      <Header />
      <HomeHero />
      <ProjectCarousel />
      <Skill />
    </>
  );
};
