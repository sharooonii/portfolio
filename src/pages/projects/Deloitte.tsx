import desktopBeginning from "@/assets/portfolio/deloitte/desktop-beginning.png";
import mobileBeginning from "@/assets/portfolio/deloitte/mobile-beginning.png";
import tabletBeginning from "@/assets/portfolio/deloitte/tablet-beginning.png";
// import videoURL from "@/assets/portfolio/unionfaith/unionfaith-demo-video.mp4";
import videoURL from "@/assets/portfolio/deloitte/deloitte-demo-video.mp4";
import { featuresSections, projectTools } from "../data/deloitteData";
import { ProjectTemplate } from "./ProjectTemplate";

export const Deloitte = () => {
  return (
    <ProjectTemplate
      // Hero props
      bgClass="bg-deloitte"
      subtitle="Revamping Digital Insurance"
      title="Deloitte"
      desktopImgSrc={desktopBeginning}
      tabletImgSrc={tabletBeginning}
      mobileImgSrc={mobileBeginning}
      imgAlt="deloitte hero poster"
      // Scroll indicator
      scrollIndicatorColor="#09090c"
      // Overview props
      role="UI UX Designer, Frontend Developer"
      dateRange="Aug 2021 - Oct 2021"
      introduction="Deloitte is a global professional services network. I redesigned the website to improve the user experience and increase conversion rates."
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
