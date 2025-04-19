import { ProjectCard } from "./ProjectCard";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { projects } from "./projects"
import { useNavigate } from "react-router-dom";

export const ProjectCarousel = () => {

  const navigate = useNavigate();

  const navigateToProjects = () => {
    navigate("/projects");
  };

  return (
    <div className="container mx-auto space-y-4">
      <h1 className="home-title">Selected Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard 
            key={index}
            color={project.color}
            hover_color={project.hover_color}
            title={project.title}
            description={project.description}
            src={project.src}
            color_src={project.color_src}
            alt={project.alt}
            companyLogo= {project.companyLogo}
            companyAlt= {project.companyAlt}
            url={project.url}
            isLock={project.companyAlt === "Deloitte" && true}
          />
        ))}
      </div>
      <div className="flex justify-end mt-10">
        <Button variant="ghost" className="see-more-button" onClick={navigateToProjects}>
          <span>See More Projects</span>
          <ArrowRight className="size-5"/>
        </Button>
      </div>
    </div>
  );
};