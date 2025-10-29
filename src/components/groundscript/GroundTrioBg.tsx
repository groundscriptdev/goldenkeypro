"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// Define las imágenes para cada columna
const leftImages = ["/images/Isquierda.jpg", "/images/4.jpg", "/images/10.jpg"];
const centerImages = ["/images/Centro.jpg", "/images/5.jpg", "/images/11.jpg"];
const rightImages = ["/images/Derecha.jpg", "/images/9.jpg", "/images/12.jpg"];

// Variables configurables para efectos
const transitionConfig = {
  duration: 0.8,
  ease: "easeInOut",
};

// Intervalos de cambio para cada columna (en milisegundos)
const intervals = {
  left: 9000,
  center: 8500,
  right: 7000,
};

// Direcciones de transición para cada columna
const directions = {
  left: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  },
  center: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  },
  right: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  },
};

// Delays para cada columna (en segundos)
const delays = {
  left: 0,
  center: 0.2,
  right: 0.4,
};

export function GroundTrioBg() {
  const [leftIndex, setLeftIndex] = useState(0);
  const [centerIndex, setCenterIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % leftImages.length);
    }, intervals.left);

    const centerInterval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % centerImages.length);
    }, intervals.center);

    const rightInterval = setInterval(() => {
      setRightIndex((prev) => (prev + 1) % rightImages.length);
    }, intervals.right);

    return () => {
      clearInterval(leftInterval);
      clearInterval(centerInterval);
      clearInterval(rightInterval);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 groundgrid">
      <div className="box-master bg-jade-green-500 relative overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={leftImages[leftIndex]}
            initial={directions.left.initial}
            animate={directions.left.animate}
            exit={directions.left.exit}
            transition={{ ...transitionConfig, delay: delays.left }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${leftImages[leftIndex]}), linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>
      </div>

      <div className="box-master bg-jade-green-700 relative overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={centerImages[centerIndex]}
            initial={directions.center.initial}
            animate={directions.center.animate}
            exit={directions.center.exit}
            transition={{ ...transitionConfig, delay: delays.center }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${centerImages[centerIndex]}), linear-gradient(135deg, #f8fafc 0%, #668A7D 100%)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>
      </div>

      <div className="box-master bg-jade-green-900 relative overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={rightImages[rightIndex]}
            initial={directions.right.initial}
            animate={directions.right.animate}
            exit={directions.right.exit}
            transition={{ ...transitionConfig, delay: delays.right }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${rightImages[rightIndex]}), linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
