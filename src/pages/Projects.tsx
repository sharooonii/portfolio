import { projects } from "@/components/Homepage/projects";
import { PageProjectCard } from "@/components/Projects/PageProjectCard";
import { images } from "@/components/Homepage/design";
import { useState, useEffect } from "react";
import { Button } from "@/components/ShadcnUI/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ShadcnUI/tabs";
import { useParams, useNavigate } from "react-router-dom";
import { CardContainer } from "@/components/ui/3d-card";

export const Projects = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  
  // Determine default tab based on URL param
  const defaultTab = category === "graphics" ? "graphics" : "website";

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

  // Handle tab change
  const handleTabChange = (value: string) => {
    navigate(`/portfolio/${value}`);
  };

  return (
    <>
    <div className="container mx-auto pt-26 pb-10">
      <h1 className="top-title text-center">Portfolio</h1>
    </div>
    <Tabs defaultValue={defaultTab} onValueChange={handleTabChange} className="animate__animated animate__fadeInUp">
      <TabsList className="projects-tabs-list">
        <TabsTrigger 
          value="website" 
          className="header-project-button projects-tabs-trigger">
            Website
        </TabsTrigger>
        <TabsTrigger 
          value="graphics" 
          className="header-project-button projects-tabs-trigger">
            Graphics
        </TabsTrigger>
      </TabsList>
      <TabsContent value="website" className="animate__animated animate__fadeIn">
        <div className="project-container">
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
      </TabsContent>
      <TabsContent value="graphics" className="animate__animated animate__fadeIn">
        <div className="project-container">
          {images.map((img, index) => (
            <CardContainer>
              <div 
                key={index} 
                className="w-full h-full rounded-xl overflow-hidden custom-shadow hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            </CardContainer>
          ))}
        </div>
      </TabsContent>
    </Tabs>

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