import { useState } from "react";
import { useNavigate } from "react-router-dom"; // If using React Router
import { LockKeyhole } from "lucide-react";

interface ProjectCardProps {
  color: string;
  hover_color: string;
  title: string;
  description: string;
  color_src: string;
  src: string;
  alt: string;
  companyLogo: string;
  companyAlt: string;
  url: string; 
  isLock: boolean;
}

export const ProjectCard = ({
  color,
  hover_color, 
  title, 
  description, 
  src, 
  color_src,
  alt, 
  companyLogo, 
  companyAlt,
  url, 
  isLock=false
}: ProjectCardProps) => {
  
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); 
  
  const handleClick = () => {
    if (!isLock) {
      navigate(url);
    }
  }
  
  return (
    <div 
      onClick={handleClick} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-xl overflow-hidden shadow shadow-lg custom-shadow hover:-translate-y-1 transition-all duration-300 ${!isLock ? "cursor-pointer" : ""}`}
    >
      {/* Overlay that appears on hover when isLock is true */}
      {isLock && (
        <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10">
          <div className="text-center p-6 text-white">
            <LockKeyhole className="mx-auto mb-4 h-12 w-12" />
            <p className="text-lg font-medium tracking-wide">
              This project is not yet publicly launched.
              <br />
              I'd be happy to showcase it during our interview.
            </p>
          </div>
        </div>
      )}
      
      <div style={{ backgroundColor: isHovered ? hover_color : color }}>
        <img src={isHovered && color_src ? color_src : src} alt={alt} className="w-full"/>
      </div>
      <div className="p-6 space-y-6">
        <div className="h-8 flex items-center justify-between">
          <img src={companyLogo} alt={companyAlt} className="h-full"/>
          {isLock && <LockKeyhole className="h-5 w-5" />}
        </div>
        <div className="space-y-1">
          <h1 className="font-extrabold text-xl uppercase josefin">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};