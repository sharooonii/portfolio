interface ImageTextBlockProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  index: number; // Used to determine layout (even/odd)
  className?: string;
}

export const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  index,
  className = ""
}) => {
  // Determine if image should be on the right (odd index) or left (even index)
  const isImageRight = index % 2 === 0;

  return (
    <div className={`container mx-auto py-16 px-4 ${className}`}>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        {/* Content Section */}
        <div className={`${isImageRight ? 'lg:order-1' : 'lg:order-2'} mb-8 lg:mb-0`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{title}</h2>
          <div className="text-lg opacity-90 leading-relaxed">{description}</div>
        </div>

        {/* Image Section */}
        <div className={`${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}>
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-auto rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </div>
  );
};