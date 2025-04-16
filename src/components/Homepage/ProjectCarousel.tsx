import { ProjectCard } from "./ProjectCard";
import educare from "@/assets/home-projects/educare-home.png"
import unigel from "@/assets/home-projects/unigel-home.png"
import bnr from "@/assets/home-projects/bnr-home.png"
import asgh from "@/assets/home-projects/asgh-home.png"
import educareLogo from "@/assets/home-projects/educare-company-logo.png"
import unigelLogo from "@/assets/home-projects/unigel-company-logo.png"
import hktdc from "@/assets/home-projects/hktdc.png"
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const projects = [
  {
    title: "Eduare",
    description: "A rapidly expanding insurance provider in online sales",
    src: educare,
    alt: "educare",
    companyLogo: educareLogo,
    companyAlt: "Union Faith Corp.",
    url: ""
  },
  {
    title: "Unigel",
    description: "A China-based B2B company in Alibaba platform specializing in exports to the US market",
    src: unigel,
    alt: "unigel",
    companyLogo: unigelLogo,
    companyAlt: "Unigel Ltd.",
    url: ""
  },
  {
    title: "Belt and Road Summit",
    description: "A leading global network facilitating commercial partnerships across Belt and Road Initiative countries",
    src: bnr,
    alt: "Belt and Road Summit",
    companyLogo: hktdc,
    companyAlt: "Hong Kong Trade Development Council (HKTDC)",
    url: ""
  },
  {
    title: "Asia Summit on Global Health",
    description: "An annual thought-leadership forum that connects global healthcare innovators, investors, and policymakers",
    src: asgh,
    alt: "Asia Summit on Global Health",
    companyLogo: hktdc,
    companyAlt: "Hong Kong Trade Development Council (HKTDC)",
    url: ""
  },
];

export const ProjectCarousel = () => {
  return (
    <div className="container mx-auto space-y-4">
      <h1 className="home-title">Selected Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            order={`0${index + 1}`}
            title={project.title}
            description={project.description}
            src={project.src}
            alt={project.alt}
            companyLogo= {project.companyLogo}
            companyAlt= {project.companyAlt}
            url={project.url}
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