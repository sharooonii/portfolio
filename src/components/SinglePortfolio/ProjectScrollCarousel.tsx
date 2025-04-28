// components/ProjectScrollCarousel.tsx
import React from 'react';

// Import your projects data directly
import { projects as projectsData } from "@/components/Homepage/projects"
import { PageProjectCard } from "@/components/Projects/PageProjectCard";

interface ProjectScrollCarouselProps {
  title?: string;
  className?: string;
  scrollSpeed?: number; // seconds for one full cycle (lower = faster)
}

export const ProjectScrollCarousel: React.FC<ProjectScrollCarouselProps> = ({
  title = "See More Projects",
  className = "",
  scrollSpeed = 50, // seconds for one full cycle
}) => {
  // Use the imported projects data
  const projects = projectsData;

  // Create duplicated items for infinite scrolling effect
  const renderProjects = () => {
    // Duplicate projects to ensure enough content for scrolling
    const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];
    
    return duplicatedProjects.map((project, index) => (
      <div 
        key={`project-${index}`} 
        className="mx-2 flex-shrink-0 max-w-[400px] w-full items-stretch" 
      >
        <PageProjectCard
          color={project.color || "#333"}
          hover_color={project.hover_color || project.color || "#333"}
          year={project.year || ""}
          title={project.title}
          description={project.description || ""}
          src={project.src}
          color_src={project.color_src || project.src}
          alt={project.alt}
          whiteCompanyLogo={project.whiteCompanyLogo}
          companyAlt={project.companyAlt || `${project.title} logo`}
          url={project.url}
          isLock={project.companyAlt === "Deloitte" ? true : false}
        />
      </div>
    ));
  };

  // CSS for the animation
  const scrollAnimation = `
    @keyframes scroll-left {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `;

  return (
    <div className={`py-16 overflow-x-hidden ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="project-section-title text-center">{title}</h2>
        )}
        
        <div className="relative overflow-x-hidden py-10">
          <style>{scrollAnimation}</style>
          <div 
            className="flex w-fit items-stretch"
            style={{
              animation: `scroll-left ${scrollSpeed}s linear infinite`,
            }}
          >
            {renderProjects()}
          </div>
        </div>
      </div>
    </div>
  );
};