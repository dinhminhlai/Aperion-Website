"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  onLoad?: boolean;
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.7,
  y = 40,
  once = true,
  onLoad = false,
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const animationProps = onLoad
    ? {
        initial: { opacity: 0, y },
        animate: { opacity: 1, y: 0 },
      }
    : {
        initial: { opacity: 0, y },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once, margin: "-100px" },
      };

  return (
    <motion.div
      className={className}
      {...animationProps}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  onLoad?: boolean;
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.15,
  onLoad = false,
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const viewportProps = onLoad
    ? { initial: "hidden", animate: "visible" }
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
      };

  return (
    <motion.div className={className} variants={containerVariants} {...viewportProps}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 40,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
