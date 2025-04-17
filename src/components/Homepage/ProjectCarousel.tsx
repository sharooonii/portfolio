import { ProjectCard } from "./ProjectCard";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { projects } from "./projects"

export const ProjectCarousel = () => {
  return (
    <div className="container mx-auto space-y-4">
      <h1 className="home-title">Selected Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            src={project.src}
            alt={project.alt}
            companyLogo= {project.companyLogo}
            companyAlt= {project.companyAlt}
            url={project.url}
            isLock={project.companyAlt === "Deloitte" && true}
          />
        ))}
      </div>
      <div className="flex justify-end mt-10">
        <Button variant="ghost" className="see-more-button">
          <span>See More Projects</span>
          <ArrowRight className="size-5"/>
        </Button>
      </div>
    </div>
  );
};