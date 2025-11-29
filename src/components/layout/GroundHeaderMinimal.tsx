"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Globe, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { LogoSVG } from "@/components/ui/LogoSVG";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { HeaderDropdown } from "@/components/groundscript/external/HeaderDropdown";

export function GroundHeaderMinimal() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollThreshold = 100; // Umbral mínimo de scroll antes de ocultar
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("navigation");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Evitar ejecutar lógica si el menú móvil está abierto
      if (isMobileMenuOpen) return;
      
      // Detectar si el header debe cambiar de estilo
      setIsScrolled(currentScrollY > 10);
      
      // Lógica para ocultar/mostrar header según dirección del scroll
      if (currentScrollY > scrollThreshold) {
        if (currentScrollY > lastScrollY.current) {
          // Scroll hacia abajo - ocultar header
          console.log('Scrolling down, hiding header');
          setIsHeaderHidden(true);
        } else {
          // Scroll hacia arriba - mostrar header
          console.log('Scrolling up, showing header');
          setIsHeaderHidden(false);
        }
      } else {
        // Cerca del top - siempre mostrar header
        console.log('Near top, showing header');
        setIsHeaderHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const navigation = [
    { name: t("home"), href: `/${locale}` },
    { name: t("golden_visa"), href: `/${locale}/residency` },
    { name: t("services"), href: `/${locale}/services` },
    { name: t("about_panama"), href: `/${locale}/about-panama` },
    { name: t("properties"), href: `/${locale}/properties` },
    { name: t("about_us"), href: `/${locale}/about-us` },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`ground-pull-up nav-minimal ${isHeaderHidden ? "header-hidden" : ""}`}
      >
        <div className="container-fluid mx-auto px-8">
          {/* Enhanced Top Bar */}
          <div className="hidden lg:block border-b border-gray-100/50 py-3 border-gold">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-8">
                <a
                  href="tel:+50712345678"
                  className="flex items-center space-x-2 text-jade-green hover:text-gold transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+507 349-4567</span>
                </a>
                <a
                  href="mailto:info@panamagoldenkey.com"
                  className="flex items-center space-x-2 text-jade-green hover:text-gold transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">info@panamagoldenkey.com</span>
                </a>
              </div>
              <div className="flex items-center space-x-6">
                <span className="text-gray-600 font-medium">
                  {t("common.wechat")}: PanamaGoldenKey
                </span>
                <LanguageSwitcher />
              </div>
            </div>
          </div>

          {/* Enhanced Main Navigation */}
          <div className="flex justify-between items-center h-20 lg:h-18">
            {/* Enhanced Logo */}
            <Link
              href={`/${locale}`}
              className="flex items-center space-x-5 group"
            >
              <div className="transition-all duration-300 group-hover:scale-105">
                <LogoSVG
                  width={48}
                  height={48}
                  className="rounded-2xl shadow-md group-hover:shadow-lg"
                />
              </div>
              <div className="hidden lg:block">
                <h1 className="text-xl font-brand text-jade-green font-semibold">
                  Panama Golden Key
                </h1>
                <p className="text-xs text-gray-600 ground-text-sha font-medium">
                  {t("tagline")}
                </p>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative ground-text-sha py-3 text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-[hsl(43.4,55.8%,64.5%)]"
                      : "text-gray-600 hover:text-[hsl(43.4,55.8%,64.5%)]"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[hsl(43.4,55.8%,64.5%)] rounded-full animate-slide-up" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Enhanced Mobile & CTA */}
            <div className="flex items-center space-x-4">
              {/* Mobile Language Switcher */}
              <div className="lg:hidden">
                <LanguageSwitcher />
              </div>

              {/* Enhanced CTA Button */}
              <div className="hidden md:inline-flex">
                <div className="bg-jade-green hover:bg-jade-green/90 text-white rounded-xl px-6 py-2 font-medium transition-all duration-200 hover:shadow-lg">

                  
                 

                  <HeaderDropdown/>
                </div>
              </div>

              {/* Enhanced Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden hover:bg-jade-green/10 rounded-xl p-3"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-jade-green" />
                ) : (
                  <Menu className="w-6 h-6 text-jade-green" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigation}
      />
    </>
  );
}
