"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "motion/react";

interface TabItem {
  id: string;
  labelKey: string; // Clave de traducción en lugar de texto duro
}

interface TitulosProps {
  titleKey?: string; // Clave de traducción para el título
  descriptionKey?: string; // Clave de traducción para la descripción
  backgroundImage?: string; // URL de la imagen de fondo
  tabs?: TabItem[]; // Array de pestañas con claves de traducción
  translationNamespace?: string; // Namespace para las traducciones (por defecto "residency")
  defaultActiveTab?: string; // ID de la pestaña activa por defecto
}

export function Titulos({
  titleKey = "title",
  descriptionKey = "subtitle",
  backgroundImage = "/assets/1.png",
  tabs = [
    { id: "visa", labelKey: "qualified_investor.title" },
    { id: "benefits", labelKey: "qualified_investor.benefits.title" },
    { id: "investment", labelKey: "investment_options.title" }
  ],
  translationNamespace = "residency",
  defaultActiveTab = "visa"
}: TitulosProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const t = useTranslations(translationNamespace);

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Imagen de fondo relativa */}
      <div className="relative w-full h-64 md:h-96 lg:h-[500px]">
        <Image
          src={backgroundImage}
          alt="Panama Residence Program"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Contenedor de texto - ahora fluye naturalmente después de la imagen */}
      <div className="bg-white flex flex-col items-center justify-center px-4 py-8 lg:py-16">
        <div className="w-full max-w-6xl">
          {/* Título principal */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-brand text-jade-green mb-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t(titleKey)}
          </motion.h1>

          {/* Descripción */}
          <motion.p
            className="text-base md:text-lg text-gray-700 mb-12 max-w-4xl text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t(descriptionKey)}
          </motion.p>
        </div>
      </div>

      {/* Navegación de pestañas */}
      <div className="bg-gray-200">
        <div className="relative">
          {/* Fondo decorativo con forma personalizada */}
          <div className="absolute inset-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1145 80"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0 0H1138.63C1144.33 0 1146.82 7.203 1142.33 10.7211L1067.59 69.3427C1058.78 76.2474 1047.92 80 1036.73 80H0V0Z"
                fill="#D9D9D9"
              />
            </svg>
          </div>

          {/* Pestañas de navegación */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-start h-20 px-4 lg:px-8 gap-4 lg:gap-8">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-0 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
                  activeTab === tab.id
                    ? "text-jade-green border-jade-green"
                    : "text-gray-600 border-transparent hover:text-jade-green hover:border-gray-400"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(tab.labelKey)}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Titulos;