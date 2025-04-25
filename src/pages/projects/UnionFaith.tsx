import { ProjectHero } from "@/components/SinglePortfolio/ProjectHero";
import desktopBeginning from "@/assets/portfolio/unionfaith/desktop-beginning.png"
import mobileBeginning from "@/assets/portfolio/unionfaith/mobile-beginning.png"
import tabletBeginning from "@/assets/portfolio/unionfaith/tablet-beginning.png"

import { ProjectOverview } from "@/components/SinglePortfolio/Overview";

import { DemoVideo } from "@/components/SinglePortfolio/DemoVideo";
import demoVideoUrl from "@/assets/demo-video.mp4"

import { ImageTextBlock } from "@/components/SinglePortfolio/ImageTextBlock";
import { Toolkit } from "@/components/SinglePortfolio/Toolkit";
import { features, projectTools } from "./unionfaithData";


export const UnionFaith = () => {
  return (
    <div className="mb-36 space-y-26">
      <ProjectHero
        bgClass="bg-unionfaith"
        subtitle="Revamping Digital Insurance"
        title="Union Faith Corp."
        desktopImgSrc={desktopBeginning}
        tabletImgSrc={tabletBeginning}
        mobileImgSrc={mobileBeginning}
        imgAlt="union faith hero poster"
      />
      <ProjectOverview
        title="Union Faith Corp."
        role="UI UX Designer, Frontend Developer"
        dateRange="Aug 2023 - Oct 2024"
        introduction="Union Faith Corp, a Hong Kong insurance agent company operating under the brand 'Educare (教安心)', sought digital rebranding to sell family insurance online. Their target audience primarily consists of teachers and civil servants in Hong Kong, requiring a focused digital strategy to protect these professionals and their loved ones."
      />
      <DemoVideo 
        videoSrc={demoVideoUrl}
      />
      <div>
      {features.map((feature, index) => (
        <ImageTextBlock
          key={index}
          index={index}
          title={feature.title}
          description={feature.description}
          imageSrc={feature.imageSrc}
          imageAlt={feature.imageAlt}
        />
      ))}
    </div>
    <Toolkit
      subtitle="TECHNOLOGIES USED"
      title="Built with Modern Web Technologies"
      tools={projectTools}
    />

    </div>
  );
}