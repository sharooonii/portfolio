import { ProjectTemplate } from "./ProjectTemplate";
import desktopBeginning from "@/assets/portfolio/unionfaith/desktop-beginning.png";
import mobileBeginning from "@/assets/portfolio/unionfaith/mobile-beginning.png";
import tabletBeginning from "@/assets/portfolio/unionfaith/tablet-beginning.png";
import videoURL from "@/assets/portfolio/unionfaith/unionfaith-demo-video.mp4";
import { features, projectTools } from "./unionfaithData";

export const UnionFaith = () => {
  // Optional: results items if you want to show them
  const resultItems = [
    {
      id: '1',
      imgSrc: '/images/results/unionfaith-result-1.png',
      alt: 'Union Faith mobile app homepage'
    },
    // Add more results as needed
  ];

  const resultColors = [
    '#FFF5F5', // Light pink
    '#F8A278', // Coral/orange
    '#8B5032'  // Brown
  ];

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
      scrollIndicatorColor="#F3D05B"
      
      // Overview props
      role="UI UX Designer, Frontend Developer"
      dateRange="Aug 2023 - Oct 2024"
      introduction="Union Faith Corp, a Hong Kong insurance agent company operating under the brand 'Educare (教安心)', sought digital rebranding to sell family insurance online. Their target audience primarily consists of teachers and civil servants in Hong Kong, requiring a focused digital strategy to protect these professionals and their loved ones."
      
      // Demo video
      demoVideoSrc={videoURL}
      
      // Features
      features={features}
      
      // Results overview - uncomment to activate
      // showResults={true}
      // resultItems={resultItems}
      // resultColors={resultColors}
      
      // Toolkit
      tools={projectTools.map(tool => ({
        name: tool.toolName,
        icon: tool.imgSrc
      }))}

    />
  );
};