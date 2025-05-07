import desktopBeginning from "@/assets/portfolio/asgh/desktop-beginning.png";
import mobileBeginning from "@/assets/portfolio/asgh/mobile-beginning.png";
import tabletBeginning from "@/assets/portfolio/asgh/tablet-beginning.png";
// import videoURL from "@/assets/portfolio/unionfaith/unionfaith-demo-video.mp4";
import videoURL from "@/assets/portfolio/asgh/asgh-demo-video.mp4";
import { featuresSections, projectTools } from "../data/asghData";
import { ProjectTemplate } from "./ProjectTemplate";

export const Asgh = () => {
  return (
    <ProjectTemplate
      // Hero props
      bgClass="bg-asgh"
      subtitle="Revamping Digital Insurance"
      title="Asia Summit on Global Health"
      desktopImgSrc={desktopBeginning}
      tabletImgSrc={tabletBeginning}
      mobileImgSrc={mobileBeginning}
      imgAlt="asgh hero poster"
      // Scroll indicator
      scrollIndicatorColor="#66eef5"
      // Overview props
      role="UI UX Designer, Frontend Developer"
      dateRange="Aug 2021 - Oct 2021"
      introduction="Asia Summit on Global Health is a conference that brings together experts from around the world to discuss the latest developments in global health. I redesigned the website to improve the user experience and increase conversion rates."
      // Demo video
      demoVideoSrc={videoURL}
      // Features - empty array since using featuresSections
      features={[]}
      // Multiple features sections
      featuresSections={featuresSections}
      // Toolkit
      tools={projectTools.map((tool) => ({
        name: tool.name,
        icon: tool.icon,
      }))}
    />
  );
};
