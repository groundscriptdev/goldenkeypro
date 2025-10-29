"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Easing } from "motion/react";

const images = ["/assets/Arcos.svg", "/assets/Arcos.svg", "/assets/Arcos.svg"];

const transitionConfig = {
  duration: 0.8,
  ease: "easeInOut" as Easing,
};

const directions = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const scales = [0.95, 0.7, 0.5];
const rotations = ["right", "left", "right"];

export function GroundFooterBg() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize(); // correr al montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      9000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="groundmask absolute inset-0 flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {scales.map((scale, i) => {
          const direction = rotations[i];
          const rotateAnim = {
            animate: {
              rotate: direction === "right" ? [0, 720] : [0, -360],
              scale: [1, 0.95, 1],
            },
            transition: {
              duration: 100 - i * 10,
              repeat: Infinity,
              ease: "linear" as Easing,
            },
          };

          // 🔄 Estilos dinámicos inline
          const containerStyle = isMobile
            ? {
                width: "500%",
                height: `${scale * 100}%`,
                transition: "all 0.5s ease-in-out",
              }
            : {
                width: `${scale * 90}%`,
                height: "auto",
                transition: "all 0.5s ease-in-out",
              };

          const imageStyle = isMobile
            ? {
                width: `auto`,
                height: `${scale * 90}%`,
              }
            : {
                width: "auto",
                height: `100%`,
              };

          return (
            <motion.div
              key={`${images[index]}-${i}`}
              initial={directions.initial}
              animate={directions.animate}
              exit={directions.exit}
              transition={{ ...transitionConfig, delay: i * 0.1 }}
              className="absolute  flex items-center justify-center overflow-hidden"
              style={containerStyle}
            >
              <motion.img
                {...rotateAnim}
                src={images[index]}
                alt={`Arco ${i + 1}`}
                className="object-contain  select-none pointer-events-none"
                style={{
                  ...imageStyle,
                  opacity: 0.9 - i * 0.15,
                  filter: "drop-shadow(0 0 20px rgba(0,0,0,0.25))",
                }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
