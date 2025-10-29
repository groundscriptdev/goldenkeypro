"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Globe, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { LogoSVG } from "@/components/ui/LogoSVG";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("navigation");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: t("home"), href: `/${locale}` },
    { name: t("residency"), href: `/${locale}/residency` },
    { name: t("real_estate"), href: `/${locale}/real-estate` },
    { name: t("medical_tourism"), href: `/${locale}/medical-tourism` },
    { name: t("properties"), href: `/${locale}/properties` },
    { name: t("about_panama"), href: `/${locale}/about-panama` },
    { name: t("about_us"), href: `/${locale}/about-us` },
    { name: t("contact"), href: `/${locale}/contact` },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-jade-green/10"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6">
          {/* Top Bar */}
          <div className="hidden lg:block border-b border-jade-green/10 py-2">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <a
                  href="tel:+50712345678"
                  className="flex items-center space-x-2 text-jade-green hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+507 123-45678</span>
                </a>
                <a
                  href="mailto:info@panamagoldenkey.com"
                  className="flex items-center space-x-2 text-jade-green hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">info@panamagoldenkey.com</span>
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">
                  {t("common.wechat")}: PanamaGoldenKey
                </span>
                <LanguageSwitcher />
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex justify-between items-center h-20 lg:h-24">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center space-x-4">
              <LogoSVG width={40} height={40} className="rounded-lg" />
              <div className="hidden lg:block">
                <h1 className="text-xl font-brand text-jade-green font-semibold">
                  Panama Golden Key
                </h1>
                <p className="text-xs text-muted-foreground">{t("tagline")}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-jade-green"
                      : "text-muted-foreground hover:text-jade-green"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-jade-green" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile & CTA */}
            <div className="flex items-center space-x-4">
              {/* Mobile Language Switcher */}
              <div className="lg:hidden">
                <LanguageSwitcher />
              </div>

              {/* CTA Button */}
              <Button
                asChild
                className="hidden md:inline-flex bg-jade-green hover:bg-jade-green/90 text-white"
              >
                <Link href={`/${locale}/contact`}>
                  {t("common.free_consultation")}
                </Link>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigation}
      />
    </>
  );
}
