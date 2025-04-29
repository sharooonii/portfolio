import { CardContainer } from "../ui/3d-card";

interface ImageTextBlockProps {
  subtitle: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  index: number; // Used to determine layout (even/odd)
  bgColor: string;
  className?: string;
}

export const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  subtitle,
  title,
  description,
  imageSrc,
  imageAlt,
  index,
  bgColor,
  className = ""
}) => {
  // Determine if image should be on the right (odd index) or left (even index)
  const isImageRight = index % 2 === 0;

  return (
    <div className={`container mx-auto py-10 lg:py-16 lg:px-4 h-4/5 ${className}`}>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        {/* Content Section */}
        <div className={`${isImageRight ? 'lg:order-1' : 'lg:order-2'} mb-8 lg:mb-0`}>
          <p className="project-section-subtitle">{subtitle}</p>
          <h2 className="project-section-title mb-4">{title}</h2>
          <div className="text-lg opacity-90 leading-relaxed">{description}</div>
        </div>

        {/* Image Section */}
        <div className={`${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}>
          <CardContainer>
            <div className={`${bgColor} cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl`}>
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className="w-full h-auto bg-transparent" 
              />
            </div>
          </CardContainer>
        </div>
      </div>
    </div>
  );
};