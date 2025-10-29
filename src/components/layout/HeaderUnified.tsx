"use client";
//// usage//// groundscript
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { MobileMenuEnhanced } from "./MobileMenuEnhanced";
import { LogoSVG } from "@/components/ui/LogoSVG";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useDropdown } from "@/hooks/useDropdown";
import { navigationData, getLocalizedUrl } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function HeaderUnified() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations();

  const { isScrolled } = useScrollDirection();
  const {
    activeDropdown,
    activeSubmenu,
    openDropdown,
    closeDropdown,
    openSubmenu,
    closeSubmenu,
  } = useDropdown();

  const isActive = (href: string) => {
    const localizedHref = getLocalizedUrl(href, locale);
    if (localizedHref === `/${locale}` || localizedHref === `/${locale}/`) {
      return pathname === localizedHref || pathname === `${localizedHref}/`;
    }
    return pathname.startsWith(localizedHref);
  };

  const handleNavigation = (href: string) => {
    // Close dropdowns when navigating
    closeDropdown();
    closeSubmenu();
  };

  return (
    <>
      <header
        id="main-header"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          isScrolled &&
            "bg-white/98 backdrop-blur-lg shadow-sm border-b border-jade-green/8"
        )}
      >
        <div className="ground-arena-nav-full mx-auto px-8">
          {/* Top Bar */}
          <div className="hidden lg:block border-b border-jade-green/5 py-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-10">
                <a
                  href="tel:+50712345678"
                  className="flex items-center space-x-2 text-xs text-gray-600 hover:text-jade-green/90 transition-colors duration-300 font-light tracking-wide"
                >
                  <Phone className="w-3 h-3" />
                  <span className="font-light">+507 344-5678</span>
                </a>
                <a
                  href="mailto:info@panamagoldenkey.com"
                  className="flex items-center space-x-2 text-xs text-gray-600 hover:text-jade-green/90 transition-colors duration-300 font-light tracking-wide"
                >
                  <Mail className="w-3 h-3" />
                  <span className="font-light">info@panamagoldenkey.com</span>
                </a>
              </div>
              <div className="flex items-center space-x-8">
                <span className="text-xs text-gray-500 font-light tracking-wide">
                  WeChat: PanamaGoldenKey
                </span>
                <LanguageSwitcher />
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex justify-between items-center h-20 lg:h-24">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="flex items-center space-x-3 group"
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                <LogoSVG width={40} height={40} className="rounded-lg" />
              </div>
              <div className="hidden lg:block">
                <h1 className="text-xl font-brand text-jade-green font-light transition-colors duration-300 group-hover:text-jade-green/80 tracking-wide">
                  Panama Golden Key
                </h1>
                <p className="text-xs text-gray-500 font-light mt-0.5 tracking-wider">
                  {t("navigation.tagline")}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="ground-nav hidden lg:flex items-center justify-center flex-1 mx-12 gap-2"
              data-dropdown-container
            >
              {navigationData.map((item) => (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown && openDropdown(item.id)}
                  onMouseLeave={() => item.hasDropdown && closeDropdown()}
                >
                  {item.hasDropdown ? (
                    <button
                      className={cn(
                        "flex items-center space-x-1 px-4 py-5 text-sm font-light tracking-wide transition-all duration-300",
                        activeDropdown === item.id
                          ? "text-jade-green/90"
                          : "text-gray-700 hover:text-jade-green/80"
                      )}
                      aria-expanded={activeDropdown === item.id}
                      aria-haspopup="true"
                      onClick={(e) => {
                        e.preventDefault();
                        if (activeDropdown === item.id) {
                          closeDropdown();
                        } else {
                          openDropdown(item.id);
                        }
                      }}
                    >
                      <span className="uppercase letter-spacing-1">
                        {t(item.label)}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 transition-transform duration-300",
                          activeDropdown === item.id && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={getLocalizedUrl(item.href || "/", locale)}
                      className={cn(
                        "relative px-4 py-5 text-sm font-light tracking-wide transition-all duration-300",
                        item.href && isActive(item.href)
                          ? "text-jade-green/90"
                          : "text-gray-700 hover:text-jade-green/80"
                      )}
                      onClick={() => handleNavigation(item.href || "/")}
                    >
                      <span className="uppercase letter-spacing-1">
                        {t(item.label)}
                      </span>
                      {item.href && isActive(item.href) && (
                        <span className="absolute bottom-0 left-0 right-0 h-px bg-jade-green/60" />
                      )}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <div
                      className={cn(
                        "absolute top-full left-0 min-w-[260px] py-4 mt-1 bg-white/98 backdrop-blur-lg border border-gray-100 rounded-lg shadow-lg transition-all duration-300 z-50",
                        activeDropdown === item.id
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 -translate-y-1 invisible pointer-events-none"
                      )}
                    >
                      {item.items?.map((subItem) => (
                        <div
                          key={subItem.id}
                          className="relative group/submenu"
                          onMouseEnter={() =>
                            subItem.hasSubmenu && openSubmenu(subItem.id)
                          }
                          onMouseLeave={() =>
                            subItem.hasSubmenu && closeSubmenu()
                          }
                        >
                          {subItem.hasSubmenu ? (
                            <Link
                              href={getLocalizedUrl(
                                subItem.href || "/",
                                locale
                              )}
                              className={cn(
                                "flex items-center justify-between w-full px-4 py-3 text-sm font-light tracking-wide transition-colors duration-300",
                                activeSubmenu === subItem.id
                                  ? "text-jade-green/80 bg-gray-50/50"
                                  : "text-gray-700 hover:text-jade-green/80 hover:bg-gray-50/30"
                              )}
                              onClick={() =>
                                handleNavigation(subItem.href || "/")
                              }
                            >
                              <span>{t(subItem.label)}</span>
                              <ChevronRight className="w-3 h-3" />
                            </Link>
                          ) : (
                            <Link
                              href={getLocalizedUrl(
                                subItem.href || "/",
                                locale
                              )}
                              className={cn(
                                "block px-4 py-3 text-sm font-light tracking-wide transition-colors duration-300",
                                subItem.href && isActive(subItem.href)
                                  ? "text-jade-green/80 bg-gray-50/50"
                                  : "text-gray-700 hover:text-jade-green/80 hover:bg-gray-50/30"
                              )}
                              onClick={() =>
                                handleNavigation(subItem.href || "/")
                              }
                            >
                              {t(subItem.label)}
                            </Link>
                          )}

                          {/* Submenu */}
                          {subItem.hasSubmenu && (
                            <div
                              className={cn(
                                "absolute top-0 left-full min-w-[220px] py-4 ml-1 bg-white/98 backdrop-blur-lg border border-gray-100 rounded-lg shadow-lg transition-all duration-300 z-50",
                                activeSubmenu === subItem.id
                                  ? "opacity-100 translate-x-0 visible"
                                  : "opacity-0 -translate-x-1 invisible pointer-events-none"
                              )}
                            >
                              {subItem.items?.map((subSubItem) => (
                                <Link
                                  key={subSubItem.id}
                                  href={getLocalizedUrl(
                                    subSubItem.href,
                                    locale
                                  )}
                                  className={cn(
                                    "block px-4 py-3 text-sm font-light tracking-wide transition-colors duration-300",
                                    isActive(subSubItem.href)
                                      ? "text-jade-green/80 bg-gray-50/50"
                                      : "text-gray-700 hover:text-jade-green/80 hover:bg-gray-50/30"
                                  )}
                                  onClick={() =>
                                    handleNavigation(subSubItem.href)
                                  }
                                >
                                  {t(subSubItem.label)}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
                size="sm"
                className="hidden md:inline-flex bg-jade-green/90 hover:bg-jade-green text-white font-light tracking-wide transition-all duration-300"
              >
                <Link href={`/${locale}/contact`}>
                  {t("navigation.common.free_consultation")}
                </Link>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-gray-700 hover:text-jade-green/80 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenuEnhanced
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigationData}
      />
    </>
  );
}
