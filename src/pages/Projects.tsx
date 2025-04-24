import { projects } from "@/components/Homepage/projects";
import { PageProjectCard } from "@/components/Projects/PageProjectCard";
import { images } from "@/components/Homepage/design";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export const Projects = () => {
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  // Handle ESC key press for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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

  // Lightbox functions
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
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
    <>
    <div className="container mx-auto py-26 space-y-6">
      <h1 className="top-title text-center">Projects</h1>
      <div className="text-sbrown flex justify-center w-full text-lg">
        <div className="px-5 md:px-20 xl:px-48 2xl:px-96 *:inline space-x-1">
          <div>
            I'm a unicorn developer with expertise in 
            <span className="font-bold ml-1">UI/UX Design</span> and 
            <span className="font-bold ml-1">Frontend Development</span>. 
          </div>
          <div>
            With a passion for exceptional user experiences, I create 
            <span className="font-bold ml-1">stunning</span>, 
            <span className="font-bold ml-1">intuitive</span>, and 
            <span className="font-bold mx-1">functional</span>website.
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-8 lg:px-20 pb-26 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <PageProjectCard
          key={index}
          color={project.color}
          hover_color={project.hover_color}
          year={project.year}
          title={project.title}
          description={project.description}
          src={project.src}
          color_src={project.color_src}
          alt={project.alt}
          whiteCompanyLogo={project.whiteCompanyLogo}
          companyAlt={project.companyAlt}
          url={project.url}
          isLock={project.companyAlt === "Deloitte" && true}
        />
      ))}
    </div>
    <div id="design" className="container mx-auto py-26 space-y-6">
      <h1 className="top-title text-center">Design</h1>
      <div className="text-sbrown flex justify-center w-full text-lg">
        <div className="px-5 md:px-20 xl:px-48 2xl:px-96">
          With strong <span className="font-bold ml-1">graphic design</span> skills, I create compelling visual identities, 
          impactful marketing materials, and cohesive brand assets that effectively 
          communicate your message and engage your audience.
        </div>
      </div>
    </div>
    <div className="container mx-auto px-8 lg:px-20 pb-26 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {images.map((img, index) => (
        <div 
          key={index} 
          className="w-full h-full rounded-xl overflow-hidden custom-shadow hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          onClick={() => openLightbox(index)}
        >
          <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>

    {/* Lightbox */}
    {lightboxOpen && (
      <div 
        className="lightbox-container" 
        onClick={closeLightbox}
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
            onClick={closeLightbox}
          >
            <X className="size-6" />
          </Button>
          
          <div className="relative">
            <img 
              src={images[lightboxIndex].src} 
              alt={images[lightboxIndex].alt} 
              className="zoom-image"
            />
            <p className="text-center text-white mt-4 text-xl">{images[lightboxIndex].description}</p>
          </div>
          
          {/* arrow buttons */}
          <Button 
            variant="outline" 
            size="icon" 
            className={`-bottom-8 md:top-1/2 left-4 arrow-button ${lightboxIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            onClick={(e) => {
              e.stopPropagation();
              handleLightboxPrev();
            }}
            disabled={lightboxIndex === 0}
          >
            <ChevronLeft className="size-6" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className={`-bottom-8 md:top-1/2 right-4 arrow-button ${lightboxIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            onClick={(e) => {
              e.stopPropagation();
              handleLightboxNext();
            }}
            disabled={lightboxIndex === images.length - 1}
          >
            <ChevronRight className="size-6" />
          </Button>
        </div>
      </div>
    )}
    </>
  );
}