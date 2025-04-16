import { FC } from 'react';
import adidas from "@/assets/design/adidas.jpg"
import nike from "@/assets/design/nike.jpg"
import spiderman1 from "@/assets/design/spiderman-1.jpg"
import spiderman2 from "@/assets/design/spiderman-2.jpg"
import haagendazs from "@/assets/design/haagendazs.jpg"
import { Button } from "../ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"

interface ImageItem {
  src: string;
  alt: string;
  description: string;
}

interface PosterItemProps extends ImageItem {
  onClick: () => void;
}

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage: ImageItem;
  onNext: () => void;
  onPrev: () => void;
  isFirstImage: boolean;
  isLastImage: boolean;
}

const images: ImageItem[] = [
  {
    src: spiderman1,
    alt: "Spiderman poster",
    description: "Film Poster"
  },
  {
    src: spiderman2,
    alt: "Spiderman poster",
    description: "Film Poster"
  },
  {
    src: adidas,
    alt: "adidas poster",
    description: "Sneakers Poster"
  },
  {
    src: nike,
    alt: "nike poster",
    description: "Sneakers Poster"
  },
  {
    src: haagendazs,
    alt: "haagendazs poster",
    description: "Food Poster"
  },
]

// Poster Item Component
const PosterItem: FC<PosterItemProps> = ({ src, alt, description, onClick }) => (
  <div className="space-y-1 cursor-pointer" onClick={onClick}>
    <img src={src} alt={alt} className="w-full rounded-md h-auto hover:opacity-90 transition-opacity"/>
    <p className="text-center">{description}</p>
  </div>
);

// See More Button Component
const SeeMoreButton: FC = () => (
  <Button variant="ghost" className="see-more-button">
    <span>See More Design</span>
    <ArrowRight className="size-5"/>
  </Button>
);

// Lightbox Component
const ImageLightbox: FC<ImageLightboxProps> = ({ 
  isOpen, 
  onClose, 
  currentImage, 
  onNext, 
  onPrev, 
  isFirstImage, 
  isLastImage 
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="lightbox-container" 
      onClick={onClose}
    >
      <div 
        className="lightbox" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="close-button" 
          onClick={onClose}
        >
          <X className="size-6" />
        </Button>
        
        <div className="relative">
          <img 
            src={currentImage.src} 
            alt={currentImage.alt} 
            className="zoom-image"
          />
          <p className="text-center text-white mt-4 text-xl">{currentImage.description}</p>
        </div>
        
        {/* arrow buttons */}
        <Button 
          variant="outline" 
          size="icon" 
          className={`-bottom-8 md:top-1/2 left-4 arrow-button ${isFirstImage ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          disabled={isFirstImage}
        >
          <ChevronLeft className="size-6" />
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          className={`-bottom-8 md:top-1/2 right-4 arrow-button ${isLastImage ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          disabled={isLastImage}
        >
          <ChevronRight className="size-6" />
        </Button>
      </div>
    </div>
  );
};

export const DesignCarousel: FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  
  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1280); // xl breakpoint is 1280px
    };

    // Run on mount and on resize
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    // Call once to set initial state
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Handle ESC key press for lightbox
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowRight' && lightboxOpen) {
        handleLightboxNext();
      } else if (e.key === 'ArrowLeft' && lightboxOpen) {
        handleLightboxPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, lightboxIndex]);

  // Carousel navigation functions
  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  const isAtStart = current === 0;
  const isAtEnd = current === count - 1;

  // Lightbox functions
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    // Prevent scroll on body when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // Restore scroll on body
    document.body.style.overflow = '';
  };

  const handleLightboxNext = () => {
    if (lightboxIndex < images.length - 1) {
      setLightboxIndex(prev => prev + 1);
    }
  };

  const handleLightboxPrev = () => {
    if (lightboxIndex > 0) {
      setLightboxIndex(prev => prev - 1);
    }
  };

  return (
    <div id="design-carousel" className="container mx-auto space-y-4 my-20 px-4">
      {isLargeScreen ? (
        // Grid view for xl screens and above
        <>
          <h1 className="home-title">My Graphic Design</h1>
          <div className="grid grid-cols-6 gap-3">
            {images.map((img, index) => (
              <div key={index}>
                <PosterItem 
                  {...img} 
                  onClick={() => openLightbox(index)}
                />
              </div>
            ))}
            <div className="flex justify-center items-center">
              <SeeMoreButton />
            </div>
          </div>
        </>
      ) : (
        // Carousel for smaller screens
        <>
          <div className='flex justify-between items-center'>
            <h1 className="home-title">My Graphic Design</h1>
            <div className='flex items-center gap-2'>
              <Button 
                variant="outline" 
                size="icon" 
                className={`arrow-button ${isAtStart ? 'arrow-disabled-state' : 'arrow-active-state'}`} 
                onClick={scrollPrev}
                disabled={isAtStart}
              >
                <ChevronLeft className="size-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className={`arrow-button ${isAtEnd ? 'arrow-disabled-state' : 'arrow-active-state'}`}
                onClick={scrollNext}
                disabled={isAtEnd}
              >
                <ChevronRight className="size-5" />
              </Button>
            </div>
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="px-1">
              {images.map((img, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                  <PosterItem 
                    {...img} 
                    onClick={() => openLightbox(index)}
                  />
                </CarouselItem>
              ))}
              <CarouselItem className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3 flex justify-center items-center">
                <SeeMoreButton />
              </CarouselItem>
            </CarouselContent>
            <div className="hidden">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </>
      )}

      {/* Lightbox Component */}
      <ImageLightbox 
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        currentImage={images[lightboxIndex]}
        onNext={handleLightboxNext}
        onPrev={handleLightboxPrev}
        isFirstImage={lightboxIndex === 0}
        isLastImage={lightboxIndex === images.length - 1}
      />
    </div>
  );
}