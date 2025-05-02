"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";
import React, { forwardRef, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type AccordionItemProps = {
  children: React.ReactNode;
  className?: string;
} & Accordion.AccordionItemProps;

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={cn(
        "mt-px overflow-hidden focus-within:relative focus-within:z-10",
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
  collapseDelay = 10000,
  data = [],
  progressBarColor = "bg-primary", // Default value
  sectionTitle = "Insurance Quotation", // Default value
}: FeaturesProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const carouselRef = useRef<HTMLUListElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

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

  const scrollToIndex = (index: number) => {
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
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex !== undefined ? (prevIndex + 1) % data.length : 0,
      );
    }, collapseDelay);

    return () => clearInterval(timer);
  }, [collapseDelay, currentIndex, data.length]);

  useEffect(() => {
    const handleAutoScroll = () => {
      const nextIndex =
        (currentIndex !== undefined ? currentIndex + 1 : 0) % data.length;
      scrollToIndex(nextIndex);
    };

    const autoScrollTimer = setInterval(handleAutoScroll, collapseDelay);

    return () => clearInterval(autoScrollTimer);
  }, [collapseDelay, currentIndex, data.length]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const handleScroll = () => {
        const scrollLeft = carousel.scrollLeft;
        const cardWidth = carousel.querySelector(".card")?.clientWidth || 0;
        const newIndex = Math.min(
          Math.floor(scrollLeft / cardWidth),
          data.length - 1,
        );
        setCurrentIndex(newIndex);
      };

      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, [data.length]);

  return (
    <section ref={ref} id="features">
      <div className="container mx-auto space-y-16">
        <h1 className="portfolio-title">{sectionTitle}</h1>
        <div className="grid h-full items-center gap-10 lg:grid-cols-3">
          <div className="h-full lg:flex justify-start">
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
                  <div className={`absolute inset-y-0 h-full left-0 right-auto rounded-lg bg-zinc-100 
                  ${currentIndex === index ? "w-1" : "w-0.5"} transition-all duration-300`}>
                    <div
                      className={`absolute left-0 top-0 w-full ${
                        currentIndex === index ? "h-full" : "h-0"
                      } origin-top ${progressBarColor} transition-all ease-in-out`}
                      style={{
                        transitionDuration:
                          currentIndex === index
                            ? `${collapseDelay}ms`
                            : "500ms",
                      }}
                    ></div>
                  </div>

                  <div className={`relative pl-6 py-2 flex gap-4 cursor-pointer ${ 
                    currentIndex === index ? "opacity-100" : "opacity-30 hover:opacity-50 items-center"} transition-opacity duration-300 ease-in-out`}>
                      <div className="feature-icon transition-transform duration-300 ease-in-out">{item.icon}</div>
                      <div className="space-y-2">
                        <AccordionTrigger className={`${ 
                          currentIndex === index ? "text-xl " : "text-lg" } font-medium text-left transition-all duration-300 ease-in-out`}>
                          {item.title}
                        </AccordionTrigger>
                        {currentIndex === index && 
                          <AccordionTrigger className="leading-6 text-left transition-all duration-300 ease-in-out">
                            {item.content}
                          </AccordionTrigger>
                        }
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion.Root>
          </div>
          <div className="h-[600px] min-h-[200px] w-auto lg:col-span-2">
            {data[currentIndex]?.image ? (
              <motion.img
                key={currentIndex}
                src={data[currentIndex].image}
                alt="feature"
                className="aspect-auto size-full rounded-xl border border-neutral-300/50 object-cover object-left-top p-1 shadow-lg"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            ) : data[currentIndex]?.video ? (
              <video
                preload="auto"
                src={data[currentIndex].video}
                className="aspect-auto size-full rounded-lg object-cover shadow-lg"
                autoPlay
                loop
                muted
              />
            ) : (
              <div className="aspect-auto size-full rounded-xl border border-neutral-300/50 bg-gray-200 p-1"></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}