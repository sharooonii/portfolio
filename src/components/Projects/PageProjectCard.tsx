import { CardContainer } from "@/components/AceternityUI/3d-card";
import { LockKeyhole } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  color: string;
  hover_color: string;
  year: string;
  title: string;
  description: string;
  src: string;
  color_src: string;
  alt: string;
  whiteCompanyLogo: string;
  companyAlt: string;
  url: string;
  isLock: boolean;
}

export const PageProjectCard = ({
  color,
  hover_color,
  year,
  title,
  description,
  src,
  color_src,
  alt,
  whiteCompanyLogo,
  companyAlt,
  url,
  isLock = false,
}: ProjectCardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (!isLock) {
      navigate(url);
    }
  };

  return (
    <CardContainer className="h-full">
      <div
        id="page-project-card"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`h-full group relative text-white flex flex-col rounded-xl overflow-hidden custom-shadow hover:-translate-y-1 transition-all duration-300 ${
          !isLock ? "cursor-pointer" : ""
        }`}
        style={{
          backgroundColor: isHovered ? hover_color : color,
        }}
      >
        {/* Overlay that appears on hover when isLock is true */}
        {isLock && (
          <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10">
            <div className="text-center p-6">
              <LockKeyhole className="mx-auto mb-4 h-12 w-12" />
              <p className="text-lg font-medium">
                This project is not yet publicly launched.
                <br />
                I'd be happy to showcase it during our interview.
              </p>
            </div>
          </div>
        )}

        <div className="px-10 pt-10 flex-grow space-y-4">
          <div className="h-10 flex justify-between items-center">
            <img
              src={whiteCompanyLogo}
              alt={companyAlt}
              className="max-w-full h-full transition-all duration-300"
            />
            <div className="text-white/80">{year}</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-4">
              <h1 className="project-card-title">{title}</h1>
              {isLock && <LockKeyhole className="h-5 w-5" />}
            </div>

            <p className="text-lg">{description}</p>
          </div>
        </div>
        <div>
          <img
            src={isHovered && color_src ? color_src : src}
            alt={alt}
            className="w-full transition-all duration-300"
          />
        </div>
      </div>
    </CardContainer>
  );
};
