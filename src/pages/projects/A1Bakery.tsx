import { ProjectTemplate } from "./ProjectTemplate";
import desktopBeginning from "@/assets/portfolio/unionfaith/desktop-beginning.png";
import mobileBeginning from "@/assets/portfolio/unionfaith/mobile-beginning.png";
import tabletBeginning from "@/assets/portfolio/unionfaith/tablet-beginning.png";
import videoURL from "@/assets/portfolio/unionfaith/unionfaith-demo-video.mp4";
import { featuresSections, projectTools } from "../data/a1BakeryData";

export const A1Bakery = () => {

  return (
    <ProjectTemplate
      // Hero props
      bgClass="bg-a1bakery"
      subtitle="Revamping Digital Insurance"
      title="A1 Bakery"
      desktopImgSrc={desktopBeginning}
      tabletImgSrc={tabletBeginning}
      mobileImgSrc={mobileBeginning}
      imgAlt="a1 bakery hero poster"
      
      // Scroll indicator
      scrollIndicatorColor="#F3D05B"
      
      // Overview props
      role="UI UX Designer, Frontend Developer"
      dateRange="Aug 2021 - Oct 2021"
      introduction="A1 Bakery is an international bakery chain. I redesigned the website to improve the user experience and increase conversion rates."
      
      // Demo video
      demoVideoSrc={videoURL}
      
      // Features - empty array since using featuresSections
      features={[]}
      
      // Multiple features sections
      featuresSections={featuresSections}
      
      // Toolkit
      tools={projectTools.map(tool => ({
        name: tool.name,
        icon: tool.icon
      }))}
    />
  );
};