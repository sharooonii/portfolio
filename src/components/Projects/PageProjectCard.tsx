import { useNavigate } from "react-router-dom";
import { LockKeyhole } from "lucide-react";

interface ProjectCardProps {
  color: string;
  year: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  companyLogo: string;
  companyAlt: string;
  url: string;
  isLock: boolean; 
}

export const PageProjectCard = ({ 
  color,
  year,
  title, 
  description, 
  src, 
  alt, 
  companyLogo, 
  companyAlt,
  url,
  isLock=false 
}: ProjectCardProps) => {
  
  const navigate = useNavigate(); 
  
  const handleClick = () => {
    if (!isLock) {
      navigate(url);
    }
  }
  
  return (
    <div 
      id="page-project-card"
      onClick={handleClick} 
      className={`group relative text-white flex flex-col rounded-xl overflow-hidden shadow shadow-lg custom-shadow ${!isLock ? "cursor-pointer" : ""}`}
      style={{ backgroundColor: color }}
    >
      {/* Overlay that appears on hover when isLock is true */}
      {isLock && (
        <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10">
          <div className="text-center p-6">
            <LockKeyhole className="mx-auto mb-4 h-12 w-12" />
            <p className="text-lg font-medium tracking-wide">
              This project is not yet publicly launched.
              <br />
              I'd be happy to showcase it during our interview.
            </p>
          </div>
        </div>
      )}
      
      <div className="px-10 pt-10 flex-grow space-y-4">
        <div className="h-10 flex justify-between items-center">
          <img src={companyLogo} alt={companyAlt} className="max-w-full h-full"/>
          <div className="text-white/80">{year}</div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <h1 className="project-card-title">{title}</h1>
            {isLock && <LockKeyhole className="h-5 w-5" />}
          </div>
          
          <p className="text-lg tracking-wide">{description}</p>
        </div>
      </div>
      <div>
        <img src={src} alt={alt} className="w-full"/>
      </div>
    </div>
  );
};