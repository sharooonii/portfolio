import desktopBeginning from "@/assets/portfolio/unionfaith/desktop-beginning.png";
import mobileBeginning from "@/assets/portfolio/unionfaith/mobile-beginning.png";
import tabletBeginning from "@/assets/portfolio/unionfaith/tablet-beginning.png";
import videoURL from "@/assets/portfolio/unionfaith/unionfaith-demo-video.mp4";
import { featuresSections, projectTools } from "../data/unionfaithData";
import { ProjectTemplate } from "./ProjectTemplate";

export const UnionFaith = () => {
  return (
    <ProjectTemplate
      // Hero props
      bgClass="bg-unionfaith"
      subtitle="Revamping Digital Insurance"
      title="Union Faith Corp."
      desktopImgSrc={desktopBeginning}
      tabletImgSrc={tabletBeginning}
      mobileImgSrc={mobileBeginning}
      imgAlt="union faith hero poster"
      // Scroll indicator
      scrollIndicatorColor="#295254"
      // Overview props
      role="UI UX Designer, Frontend Developer"
      dateRange="Aug 2023 - Oct 2024"
      introduction="Union Faith Corp, a Hong Kong insurance agent company operating under the brand 'Educare (教安心)', sought digital rebranding to sell family insurance online. Their target audience primarily consists of teachers and civil servants in Hong Kong, requiring a focused digital strategy to protect these professionals and their loved ones."
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
