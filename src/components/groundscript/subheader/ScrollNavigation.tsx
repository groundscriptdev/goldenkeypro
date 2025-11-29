"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import "@/styles/scroll-navigation.css";

interface NavItem {
  id: string;
  labelKey: string;
}

interface ScrollNavigationProps {
  items: NavItem[];
  translationNamespace: string;
  activeSection?: string;
  onSectionChange?: (id: string) => void;
}

export function ScrollNavigation({ 
  items, 
  translationNamespace, 
  activeSection,
  onSectionChange 
}: ScrollNavigationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations(translationNamespace);

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling past the hero section
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight * 0.8; // Approximate hero height
      setIsVisible(scrollPosition > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (itemId: string) => {
    const element = document.getElementById(itemId);
    if (element) {
      const offset = 80; // Height of the sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    if (onSectionChange) {
      onSectionChange(itemId);
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-jade-green/10 shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 lg:space-x-8 py-4 overflow-x-auto">
          {items.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeSection === item.id
                  ? "text-jade-green"
                  : "text-gray-600 hover:text-jade-green"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t(item.labelKey)}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-jade-green"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ScrollNavigation;