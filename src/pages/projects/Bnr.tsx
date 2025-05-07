import desktopBeginning from "@/assets/portfolio/bnr/desktop-beginning.png";
import mobileBeginning from "@/assets/portfolio/bnr/mobile-beginning.png";
import tabletBeginning from "@/assets/portfolio/bnr/tablet-beginning.png";
// import videoURL from "@/assets/portfolio/unionfaith/unionfaith-demo-video.mp4";
import videoURL from "@/assets/portfolio/bnr/bnr-demo-video.mp4";
import { featuresSections, projectTools } from "../data/bnrData";
import { ProjectTemplate } from "./ProjectTemplate";

export const Bnr = () => {
  return (
    <ProjectTemplate
      // Hero props
      bgClass="bg-bnr"
      subtitle="Revamping Digital Insurance"
      title="Belt and Road Summit"
      desktopImgSrc={desktopBeginning}
      tabletImgSrc={tabletBeginning}
      mobileImgSrc={mobileBeginning}
      imgAlt="bnr hero poster"
      // Scroll indicator
      scrollIndicatorColor="#3b5aa6"
      // Overview props
      role="UI UX Designer, Frontend Developer"
      dateRange="Aug 2021 - Oct 2021"
      introduction="Belt and Road Summit is a conference that brings together experts from around the world to discuss the latest developments in global health. I redesigned the website to improve the user experience and increase conversion rates."
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
