"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";
import React, { forwardRef, useEffect, useRef, useState, useCallback } from "react";

import { cn } from "@/lib/utils";

type AccordionItemProps = {
  children: React.ReactNode;
  className?: string;
} & Accordion.AccordionItemProps;

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={cn(
        "focus-within:relative focus-within:z-10",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  ),
);
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          "group flex flex-1 items-center leading-none outline-none",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  ),
);
AccordionTrigger.displayName = "AccordionTrigger";
type AccordionContentProps = {
  children: ReactNode;
  className?: string;
} & Accordion.AccordionContentProps;

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn(
        "data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down font-medium",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="px-5 py-2">{children}</div>
    </Accordion.Content>
  ),
);
AccordionContent.displayName = "AccordionContent";

export interface FeaturesDataProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  video?: string;
  icon?: React.ReactNode;
}

export interface FeaturesProps {
  collapseDelay?: number;
  data: FeaturesDataProps[];
  progressBarColor?: string; // New prop for progress bar color
  sectionTitle?: string; // New prop for section title
}

export function Features({
  collapseDelay = 8000,
  data = [],
  progressBarColor = "bg-primary", // Default value
  sectionTitle = "Insurance Quotation", // Default value
}: FeaturesProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const carouselRef = useRef<HTMLUListElement>(null);
  const ref = useRef(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  // Add ref for video element
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Add Intersection Observer for video
  useEffect(() => {
    if (!videoRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(error => {
              console.error("Error playing video:", error);
            });
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.2 } // Trigger when at least 20% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [currentIndex]);
  
  // Initialize first item when component comes into view
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isInView) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(-1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isInView]);

  // Scroll to selected item
  const scrollToIndex = useCallback((index: number) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelectorAll(".card")[index];
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const carouselRect = carouselRef.current.getBoundingClientRect();
        const offset =
          cardRect.left -
          carouselRect.left -
          (carouselRect.width - cardRect.width) / 2;

        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft + offset,
          behavior: "smooth",
        });
      }
    }
  }, []);

  // Auto-advance timer
  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    // Only start timer if we have items
    if (data.length <= 0 || !isInView) return;
    
    timerRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % data.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, collapseDelay);
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [collapseDelay, currentIndex, data.length, scrollToIndex, isInView]);

  // Handle scroll events
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const handleScroll = () => {
        // Use requestAnimationFrame to avoid performance issues
        requestAnimationFrame(() => {
          const scrollLeft = carousel.scrollLeft;
          const cardWidth = carousel.querySelector(".card")?.clientWidth || 0;
          const newIndex = Math.min(
            Math.floor(scrollLeft / cardWidth),
            data.length - 1,
          );
          setCurrentIndex(newIndex);
        });
      };

      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, [data.length]);

  return (
    <section ref={ref} id="features">
      <div className="container mx-auto space-y-16">
        <h1 className="portfolio-title">{sectionTitle}</h1>
        <div className="grid h-full items-center gap-10 xl:grid-cols-3">
          <div className="h-full xl:flex justify-start">
            <Accordion.Root
              className=""
              type="single"
              defaultValue={`item-${currentIndex}`}
              value={`item-${currentIndex}`}
              onValueChange={(value) =>
                setCurrentIndex(Number(value.split("-")[1]))
              }
            >
              {data.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  className="relative"
                  value={`item-${index}`}
                >
                  {/* progress bar */}
                  <div className={`absolute inset-y-0 h-full left-0 right-auto bg-zinc-100 
                  ${currentIndex === index ? "w-1.5 -translate-x-0.5" : "w-0.5"} transition-width duration-300`}>
                    <div
                      className={`absolute left-0 top-0 w-full h-full origin-top ${progressBarColor}`}
                      style={{
                        transform: currentIndex === index ? 'scaleY(1)' : 'scaleY(0)',
                        transformOrigin: 'top',
                        transition: currentIndex === index 
                          ? `transform ${collapseDelay}ms linear` 
                          : 'none'
                      }}
                    ></div>
                  </div>

                  <div className={`relative pl-6 py-2 flex gap-4 cursor-pointer ${ 
                    currentIndex === index ? "opacity-100" : "opacity-30 hover:opacity-50 items-center"} transition-opacity duration-300 linear`}>
                      <div className="feature-icon transition-transform duration-300 linear">{item.icon}</div>
                      <div className="space-y-2">
                        <AccordionTrigger className={`${ 
                          currentIndex === index ? "text-xl " : "text-lg" } font-medium text-left transition-[font-size] duration-300 linear`}>
                          {item.title}
                        </AccordionTrigger>
                        {currentIndex === index && 
                          <AccordionTrigger className="leading-6 text-left">
                            {item.content}
                          </AccordionTrigger>}
                      </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion.Root>
          </div>
          <div className="min-h-[calc(100vh-150px)] w-auto xl:col-span-2 rounded-xl bg-zinc-900 border border-neutral-300/50 shadow-lg overflow-hidden">
            {data[currentIndex]?.image ? (
              <motion.img
                key={currentIndex}
                src={data[currentIndex].image}
                alt="feature"
                className="aspect-auto size-full object-cover object-left-top"
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -150 }}
                transition={{ 
                  duration: 1.2, 
                  type: "spring",
                  stiffness: 70,
                  damping: 25,
                  mass: 1.5
                }}
                loading="lazy"
              />
            ) : data[currentIndex]?.video ? (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -150 }}
                transition={{ 
                  duration: 1.2, 
                  type: "spring",
                  stiffness: 70,
                  damping: 25,
                  mass: 1.5
                }}
              >
                <video
                  ref={videoRef}
                  preload="metadata"
                  src={data[currentIndex].video}
                  className="aspect-auto size-full rounded-lg object-cover shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </motion.div>
            ) : (
              <motion.div
                key={currentIndex}
                className="aspect-auto size-full rounded-xl border border-neutral-300/50 bg-gray-200 p-1"
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -150 }}
                transition={{ 
                  duration: 1.2, 
                  type: "spring",
                  stiffness: 70,
                  damping: 25,
                  mass: 1.5
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}