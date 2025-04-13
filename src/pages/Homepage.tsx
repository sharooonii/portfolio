import { Header } from "@/components/Homepage/Header";
import { HomeHero } from "@/components/Homepage/HomeHero";
import { ProjectCarousel } from "@/components/Homepage/ProjectCarousel";

export const Homepage = () => {
  return (
    <>
      <Header />
      <HomeHero />
      <ProjectCarousel />
    </>
  );
};
