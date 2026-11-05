import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const containerVariants = (shouldReduceMotion) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: shouldReduceMotion ? 0 : 0.08,
      delayChildren: 0.05,
    },
  },
});

export const itemVariants = (shouldReduceMotion) => ({
  hidden: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

export default function Reveal({
  children,
  className = '',
  delay = 0,
  stagger = false,
  viewport = { once: true, margin: '-100px' },
}) {
  const shouldReduceMotion = useReducedMotion();

  if (stagger) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={containerVariants(shouldReduceMotion)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={viewport}
      transition={{
        duration: 0.35,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={itemVariants(shouldReduceMotion)}
    >
      {children}
    </motion.div>
  );
}
