import React from "react";
import { motion } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) => {
  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 32 };
      case "down":
        return { opacity: 0, y: -32 };
      case "left":
        return { opacity: 0, x: 32 };
      case "right":
        return { opacity: 0, x: -32 };
      case "none":
        return { opacity: 0, scale: 0.96 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
