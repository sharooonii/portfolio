import { projects } from "@/components/Homepage/projects";
import { PageProjectCard } from "@/components/Projects/PageProjectCard";

export const Projects = () => {
  return (
    <>
    <div className="container mx-auto py-26 space-y-6">
      <h1 className="top-title text-center">Projects</h1>
      <div className="text-sbrown flex justify-center w-full text-lg">
        <div className="px-20 xl:px-48 2xl:px-96">
          <div>
            I’m a unicorn developer with expertise in 
            <span className="font-bold ml-1">UI/UX Design</span> and 
            <span className="font-bold ml-1">Full-Stack Development</span>. 
          </div>
          <div>
            With a passion for exceptional user experiences, I create 
            <span className="font-bold ml-1">stunning</span>, 
            <span className="font-bold ml-1">intuitive</span>, and 
            <span className="font-bold mx-1">functional</span>website.
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-8 lg:px-20 pb-26 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <PageProjectCard
          key={index}
          color={project.color}
          year={project.year}
          title={project.title}
          description={project.description}
          src={project.src}
          alt={project.alt}
          companyLogo= {project.whiteCompanyLogo}
          companyAlt= {project.companyAlt}
          url={project.url}
          isLock={project.companyAlt === "Deloitte" && true}
        />
      ))}
    </div>
    </>
  );
}