import logoWhite from "../../../public/logo-white.svg";
import { Button } from "../ShadcnUI/button";
import { X } from "lucide-react";

interface WorkHeroProps {
  primaryColor: string;
  secondaryColor: string;
  companyName: string;
  title: string;
  illustrationSrc: string;
  illustrationAlt: string;
  posterSrc: string;
  posterAlt: string;
}

export const WorkHero = ({
  primaryColor,
  secondaryColor,
  companyName,
  title,
  illustrationSrc,
  illustrationAlt,
  posterSrc,
  posterAlt
}: WorkHeroProps) => {
  return (
    <>
      <div className={`text-white bg-${primaryColor}`}>
        <div className="flex justify-between items-center">
          <img src={logoWhite} alt="website logo" className="w-8" />
          <div>{companyName}</div>
          <Button variant="ghost" size="icon">
            <X className="size-10"/>
          </Button>
        </div>

        <div>
          <h1>{title}</h1>
          <div className="max-w-48">
            <img src={illustrationSrc} alt={illustrationAlt} className="w-full"/>
          </div>
        </div>
      </div>

      <div className={`text-white bg-${secondaryColor}`}>
        <img src={posterSrc} alt={posterAlt} className="w-full"/>
      </div>
    </>
  );
};