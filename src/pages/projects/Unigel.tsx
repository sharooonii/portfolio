import desktopBeginning from "@/assets/portfolio/unigel/desktop-beginning.png";
import mobileBeginning from "@/assets/portfolio/unigel/mobile-beginning.png";
import tabletBeginning from "@/assets/portfolio/unigel/tablet-beginning.png";
// import videoURL from "@/assets/portfolio/unionfaith/unionfaith-demo-video.mp4";
import videoURL from "@/assets/portfolio/unigel/unigel-demo-video.mp4";
import { featuresSections, projectTools } from "../data/unigelData";
import { ProjectTemplate } from "./ProjectTemplate";

export const Unigel = () => {
  return (
    <ProjectTemplate
      // Hero props
      bgClass="bg-unigel"
      subtitle="Revamping Digital Insurance"
      title="Unigel"
      desktopImgSrc={desktopBeginning}
      tabletImgSrc={tabletBeginning}
      mobileImgSrc={mobileBeginning}
      imgAlt="unigel hero poster"
      // Scroll indicator
      scrollIndicatorColor="#ff914d"
      // Overview props
      role="UI UX Designer, Frontend Developer"
      dateRange="Aug 2021 - Oct 2021"
      introduction="Unigel is a global professional services network. I redesigned the website to improve the user experience and increase conversion rates."
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
