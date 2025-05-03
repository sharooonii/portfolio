// components/Project/ProjectHero.tsx
import { ContainerScroll } from "@/components/AceternityUI/ContainerScrollAnimation";

interface ProjectHeroProps {
  bgClass: string;
  subtitle: string;
  title: string;
  desktopImgSrc: string;
  tabletImgSrc: string;
  mobileImgSrc: string;
  imgAlt: string;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({
  bgClass,
  subtitle,
  title,
  desktopImgSrc,
  tabletImgSrc,
  mobileImgSrc,
  imgAlt,
}) => {
  return (
    <div className={`overflow-hidden ${bgClass}`}>
      <div className="mx-auto container">
        <ContainerScroll
          titleComponent={
            <div className="text-lg sm:text-2xl lg:text-4xl font-semibold text-white">
              <div>{subtitle}</div>
              <div className="text-4xl sm:text-6xl lg:text-8xl font-bold mt-2 leading-none">
                {title}
              </div>
            </div>
          }
        >
          <img
            src={desktopImgSrc}
            alt={imgAlt}
            className="hidden lg:block w-full rounded-2xl object-cover"
            draggable={false}
          />
          <img
            src={tabletImgSrc}
            alt={imgAlt}
            className="hidden sm:block lg:hidden w-full rounded-2xl object-cover"
            draggable={false}
          />
          <img
            src={mobileImgSrc}
            alt={imgAlt}
            className="sm:hidden block w-full rounded-2xl object-cover"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
};
