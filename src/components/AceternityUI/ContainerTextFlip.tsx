"use client";

import { useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import GraphemeSplitter from "grapheme-splitter";
import { motion } from "motion/react";

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 2000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const splitter = new GraphemeSplitter();

  // Pre-calculate the maximum width needed for all words
  useEffect(() => {
    const widths = textRefs.current
      .filter(Boolean)
      .map((ref) => ref?.scrollWidth || 0);
    const max = Math.max(...widths, 0);
    setMaxWidth(max + 30); // Add some padding
  }, [words]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.p
      layout
      layoutId={`words-here-${id}`}
      style={{ width: maxWidth }}
      className={cn("relative inline-block", className)}
    >
      {words.map((word, index) => (
        <motion.div
          key={word}
          ref={(el) => {
            textRefs.current[index] = el;
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: currentWordIndex === index ? 1 : 0,
            y: currentWordIndex === index ? 0 : 20,
          }}
          transition={{
            duration: animationDuration / 1000,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute left-0 right-0 top-0 bottom-0 flex items-center justify-start",
            textClassName
          )}
        >
          {splitter
            .splitGraphemes(word)
            .map((letter: string, letterIndex: number) => (
              <motion.span
                key={letterIndex}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{
                  opacity: currentWordIndex === index ? 1 : 0,
                  filter:
                    currentWordIndex === index ? "blur(0px)" : "blur(10px)",
                }}
                transition={{
                  delay: letterIndex * 0.02,
                  duration: animationDuration / 1000,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
        </motion.div>
      ))}
    </motion.p>
  );
}
