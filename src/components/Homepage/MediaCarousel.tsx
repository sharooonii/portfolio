import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ShadcnUI/carousel";
import { Button } from "@/components/ShadcnUI/button";
import { ChevronLeft, ChevronRight, InstagramIcon } from "lucide-react";
import { CardContainer } from "../ui/3d-card";

// Import your images locally
import design1 from "@/assets/ig/design1.jpg";
import design2 from "@/assets/ig/design2.jpg";
import design3 from "@/assets/ig/design3.jpg";
import design4 from "@/assets/ig/design4.jpg";
import design5 from "@/assets/ig/design5.jpg";
import design6 from "@/assets/ig/design6.jpg";

// Define the design item type
interface DesignItem {
  image: string;
  alt: string;
  link?: string; // Optional link to original post
}

// Create an array of your design items
const designItems: DesignItem[] = [
  {
    image: design1,
    alt: "Monalisa vaporwave",
    link: "https://www.instagram.com/p/C1GgqvIvPa_/"
  },
  {
    image: design2,
    alt: "Cute little cat working in front of a desktop",
    link: "https://www.instagram.com/p/C00mvTov-5o/" 
  },
  {
    image: design3,
    alt: "Hades, King of the underworld and the dead, oil painting",
    link: "https://www.instagram.com/p/Cuzh1o_vrbS/?img_index=1"
  },
  {
    image: design4,
    alt: "Ares, god of war, fierce and bloody, battlefield, oil painting",
    link: "https://www.instagram.com/p/CuzHbnsvhZE/?img_index=1" 
  },
  {
    image: design5,
    alt: "Zeus, King of the gods, oil painting",
    link: "https://www.instagram.com/p/CuzFpopPuOv/?img_index=1"
  },
  {
    image: design6,
    alt: "Poseidon, God of the sea, oil painting",
    link: "https://www.instagram.com/p/CuzE6VTvhTn/?img_index=1" 
  },
];

export const MediaCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  
  console.log("count", count);

  // Calculate how many slides are visible per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg
        setSlidesPerView(4);
      } else if (window.innerWidth >= 768) { // md
        setSlidesPerView(3);
      } else if (window.innerWidth >= 640) { // sm
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track carousel state
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    
    const onSelect = () => {
      // Get the real index (accounting for duplicate slides in loop mode)
      let selectedIndex = api.selectedScrollSnap();
      
      // In loop mode, Embla creates duplicate slides, so we need to ensure
      // our index stays within the bounds of our actual items
      selectedIndex = selectedIndex % designItems.length;
      
      setCurrent(selectedIndex);
    };
    
    api.on("select", onSelect);
    
    // Call once to set initial state
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Carousel navigation functions
  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  // Calculate if we're at the logical start or end
  // This ensures we only consider the original slides, not the duplicates
  const visibleItemsCount = Math.min(slidesPerView, designItems.length);
  const maxIndex = designItems.length - visibleItemsCount;
  
  // We're at the start if current is 0
  const isAtStart = current === 0;
  
  // We're at the end if the last visible item is the last item
  const isAtEnd = current >= maxIndex;

  return (
    <div id="media-carousel" className="container mx-auto space-y-8 my-24 px-4">
      <div className="flex justify-between items-center">
        <h1 className="home-title">MY DIGITAL ART WORKS</h1>
        <div className='2xl:hidden flex items-center gap-2'>
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

      {/* Large 2xl+ screens: Show all designs in a grid, no carousel */}
      <div className="hidden 2xl:grid 2xl:grid-cols-6 gap-3">
        {designItems.map((item, index) => (
          <DesignCard key={index} item={item} />
        ))}
      </div>
      
      {/* Screens below 2xl: Use carousel with responsive items */}
      <div className="2xl:hidden">
        <Carousel
          opts={{
            align: "start",
            loop: false, // Changed to false to prevent the extra slides issue
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {designItems.map((item, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <DesignCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Hidden carousel controls (we're using custom buttons) */}
          <div className="hidden">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

// Extracted design card component for reuse
const DesignCard = ({ item }: { item: DesignItem }) => {
  return (
    <CardContainer className="hover:-translate-y-1 py-1">
      <a 
        href={item.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="overflow-hidden border-0 rounded-lg">
          <div className="p-0 relative group">
            <div className="aspect-square w-full overflow-hidden">
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 transform transition-transform duration-300">
              <p className="text-white text-sm font-medium line-clamp-2">
                {item.alt}
              </p>
              
              <div className="flex items-center gap-1 text-pink-300 text-xs mt-2 group-hover:text-pink-400">
                <InstagramIcon size={14} />
                <span>View on Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </CardContainer>
  );
};