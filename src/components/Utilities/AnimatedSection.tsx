import { motion, Variants } from "framer-motion";
import React, { ReactNode, useEffect, useRef, useState } from "react";

// Define animation and direction types
type AnimationType = "fade" | "slide" | "scale" | "custom";
type DirectionType = "up" | "down" | "left" | "right";

// Props interface
interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  direction?: DirectionType;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  customVariants?: Variants;
  respondToScroll?: boolean;
  repeatAnimation?: boolean;
  downwardOnly?: boolean; // New prop to only animate when scrolling downward
}

// Reusable AnimatedSection component with customizable props
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = "fade",
  direction = "up",
  delay = 0,
  duration = 0.6,
  // once = true,
  className = "",
  customVariants = null,
  respondToScroll = false,
  repeatAnimation = true,
  downwardOnly = true, // Default is false for backward compatibility
}) => {
  // Track scroll position and direction
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const lastScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true); // Whether to animate or not
  const elementRef = useRef<HTMLDivElement>(null);

  // Set up scroll listener to determine scroll direction
  useEffect(() => {
    if (!respondToScroll && !repeatAnimation) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      // Update scroll direction
      if (respondToScroll) {
        setScrollDirection(isScrollingDown ? "down" : "up");
      }

      // Handle repeated animations
      if (repeatAnimation && elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight - 50 && rect.bottom > 50;

        // For downwardOnly mode, only animate when scrolling down
        if (downwardOnly) {
          if (isInView && !isVisible && isScrollingDown) {
            // Element coming into view while scrolling down
            setIsVisible(true);
            setShouldAnimate(true);
          } else if (isInView && !isVisible && !isScrollingDown) {
            // Element coming into view while scrolling up - don't animate
            setIsVisible(true);
            setShouldAnimate(false);
          } else if (!isInView && isVisible) {
            // Element leaving view
            setIsVisible(false);
          }
        } else {
          // Standard behavior - always animate when entering viewport
          if (isInView && !isVisible) {
            setIsVisible(true);
            setShouldAnimate(true);
          } else if (!isInView && isVisible) {
            setIsVisible(false);
          }
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [respondToScroll, repeatAnimation, isVisible, downwardOnly]);

  // Predefined animation variants
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slide: {
      hidden: {
        opacity: 0,
        x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
        y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      },
      visible: { opacity: 1, x: 0, y: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    // Add a "none" variant for when we don't want animation
    none: {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    },
  } as const;

  // Create fade effects based on animation type and scroll direction
  let effectiveVariant;
  if (!shouldAnimate && downwardOnly) {
    // Use "none" variant when we shouldn't animate (scrolling up in downwardOnly mode)
    effectiveVariant = variants.none;
  } else if (animation === "fade") {
    if (respondToScroll) {
      effectiveVariant = {
        hidden: {
          opacity: 0,
          y: scrollDirection === "down" ? 100 : -100,
        },
        visible: { opacity: 1, y: 0 },
      };
    } else if (direction === "up") {
      effectiveVariant = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      };
    } else if (direction === "down") {
      effectiveVariant = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
      };
    } else {
      effectiveVariant = variants.fade;
    }
  } else if (animation !== "custom") {
    effectiveVariant = variants[animation as keyof typeof variants];
  }

  // Select the appropriate variant
  const selectedVariant = customVariants || effectiveVariant;

  // Determine if we should use a longer duration for stronger fade effects
  const effectiveDuration =
    animation === "fade" &&
    (direction === "up" || direction === "down" || respondToScroll)
      ? 0.8
      : duration;

  // Force a unique animation key when we want to repeat animations
  const animationKey = repeatAnimation
    ? `animation-${isVisible}-${shouldAnimate}`
    : undefined;

  return (
    <motion.div
      ref={elementRef}
      key={animationKey}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeatAnimation, margin: "-50px" }}
      variants={selectedVariant}
      transition={{ duration: effectiveDuration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
