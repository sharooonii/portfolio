"use client"

import { motion, useScroll } from "motion/react"
import { CSSProperties } from "react"

// Props interface for the scroll indicator
interface ScrollIndicatorProps {
  position?: "top" | "bottom"
  height?: number
  color?: string
  zIndex?: number
  className?: string
  style?: CSSProperties
}

export function ScrollIndicator({
  position = "top",
  height = 8,
  color = "#ff0088",
  zIndex = 100,
  className = "",
  style = {},
}: ScrollIndicatorProps) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className={className}
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        [position]: 0,
        left: 0,
        right: 0,
        height,
        originX: 0,
        backgroundColor: color,
        zIndex,
        transformOrigin: "0%",
        ...style,
      }}
    />
  )
}