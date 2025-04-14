import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom"; // If using React Router

interface ProjectCardProps {
  order: number | string;
  title: string;
  description: string;
  src: string;
  alt: string;
  companyLogo: string;
  companyAlt: string;
  url: string; 
}

export const ProjectCard = ({ 
  order, 
  title, 
  description, 
  src, 
  alt, 
  companyLogo, 
  companyAlt,
  url 
}: ProjectCardProps) => {
  
  const navigate = useNavigate(); 
  
  const handleClick = () => {
    navigate(url);
  }
  
  return (
    <div onClick={handleClick} className="rounded-xl overflow-hidden shadow shadow-lg 
    hover:shadow-xl cursor-pointer">
      <div>
        <img src={src} alt={alt} className="w-full"/>
      </div>
      <div className="p-6">
        {/* <div>{order}</div> */}
        <div className="h-8">
          <img src={companyLogo} alt={companyAlt} className="h-full"/>
        </div>
        <div className="py-3">
          <h1 className="font-extrabold text-lg josefin">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};