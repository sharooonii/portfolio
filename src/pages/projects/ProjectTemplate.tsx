import React from 'react';
import { ProjectHero } from "@/components/SinglePortfolio/ProjectHero";
import { ProjectOverview } from "@/components/SinglePortfolio/Overview";
import { DemoVideo } from "@/components/SinglePortfolio/DemoVideo";
import { ImageTextBlock } from "@/components/SinglePortfolio/ImageTextBlock";
import { Toolkit } from "@/components/SinglePortfolio/Toolkit";
import { ScrollIndicator } from "@/components/Utilities/ScrollIndicator";
import { ProjectScrollCarousel } from "@/components/SinglePortfolio/ProjectScrollCarousel";
import { ResultsOverview } from "@/components/SinglePortfolio/ResultsOverview";
import AnimatedSection from '@/components/Utilities/AnimatedSection';
import { Features, FeaturesDataProps } from '@/components/EldoraUI/Features';
import { PackageSearch, Settings, Eye } from 'lucide-react';

interface Feature {
  subtitle: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
}

interface ResultItem {
  id: string;
  imgSrc: string;
  alt?: string;
}

interface Tool {
  name: string;
  icon: string;
  url?: string;
}

interface ProjectTemplateProps {
  // Hero props
  bgClass: string;
  subtitle: string;
  title: string;
  desktopImgSrc: string;
  tabletImgSrc: string;
  mobileImgSrc: string;
  imgAlt: string;
  
  // Scroll indicator
  scrollIndicatorColor?: string;
  
  // Overview props
  role: string;
  dateRange: string;
  introduction: string;
  
  // Demo video
  demoVideoSrc?: string;
  
  // Features
  features: Feature[];
  
  // Results overview
  showResults?: boolean;
  resultItems?: ResultItem[];
  resultColors?: string[];
  
  // Toolkit
  toolkitSubtitle?: string;
  toolkitTitle?: string;
  tools: Tool[];
  
  // Additional classes
  className?: string;
  
  // Features component props
  featuresData?: FeaturesDataProps[];
  featuresProgressBarColor?: string;
  featuresSectionTitle?: string;
  featuresCollapseDelay?: number;
  featuresLtr?: boolean;
  
  // Multiple features sections
  featuresSections?: {
    [key: string]: {
      data: FeaturesDataProps[];
      title: string;
      progressBarColor: string;
    }
  };
}

export const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  // Hero props
  bgClass,
  subtitle,
  title,
  desktopImgSrc,
  tabletImgSrc,
  mobileImgSrc,
  imgAlt,
  
  // Scroll indicator
  scrollIndicatorColor = "#F3D05B",
  
  // Overview props
  role,
  dateRange,
  introduction,
  
  // Demo video
  demoVideoSrc,
  
  // Results overview
  showResults = false,
  resultItems = [],
  resultColors = ['#FFF5F5', '#F8A278', '#8B5032'],
  
  // Toolkit
  toolkitSubtitle = "TECHNOLOGIES USED",
  toolkitTitle = "Built with Modern Web Technologies",
  tools,
  
  // Additional classes
  className = "",
  
  // Multiple features sections
  featuresSections = {},
}) => {
  return (
    <div className={`mb-36 space-y-36 ${className}`}>
      <ProjectHero
        bgClass={bgClass}
        subtitle={subtitle}
        title={title}
        desktopImgSrc={desktopImgSrc}
        tabletImgSrc={tabletImgSrc}
        mobileImgSrc={mobileImgSrc}
        imgAlt={imgAlt}
      />
      <ScrollIndicator 
        color={scrollIndicatorColor}
      />

      <ProjectOverview
        title={title}
        role={role}
        dateRange={dateRange}
        introduction={introduction}
      />

      {demoVideoSrc && (
        <DemoVideo 
          videoSrc={demoVideoSrc}
        />
      )}
      
      {Object.keys(featuresSections).length > 0 && (
        <div className="space-y-36">
          {Object.entries(featuresSections).map(([key, section], index) => (
            <Features 
              key={key}
              data={section.data}
              progressBarColor={section.progressBarColor}
              sectionTitle={section.title}
            />
          ))}
        </div>
      )}

      {showResults && resultItems.length > 0 && (
        <AnimatedSection>
          <ResultsOverview 
            title="Results Overview"
            results={resultItems}
            colors={resultColors}
          />
        </AnimatedSection>
      )}
      
      <Toolkit
        subtitle={toolkitSubtitle}
        title={toolkitTitle}
        tools={tools.map(tool => ({
          imgSrc: tool.icon,
          toolName: tool.name,
          url: tool.url
        }))}
      />

      <ProjectScrollCarousel />

    </div>
  );
};