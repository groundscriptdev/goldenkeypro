"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { LogoSVG } from "@/components/ui/LogoSVG";
import { GroundFooterBg } from "@/components/groundscript/GroundFooterBg";

export function FooterMinimal() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const commonT = useTranslations("common");

  const footerLinks = {
    quickLinks: [
      { name: t("navigation.home"), href: `/${locale}` },
      { name: t("navigation.residency"), href: `/${locale}/residency` },
      { name: t("navigation.real_estate"), href: `/${locale}/real-estate` },
      {
        name: t("navigation.medical_tourism"),
        href: `/${locale}/medical-tourism`,
      },
    ],
    services: [
      {
        name: t("services_list.residency_consultation"),
        href: `/${locale}/residency`,
      },
      {
        name: t("services_list.investment_advisory"),
        href: `/${locale}/real-estate`,
      },
      { name: t("services_list.legal_support"), href: `/${locale}/about-us` },
      {
        name: t("services_list.property_management"),
        href: `/${locale}/real-estate`,
      },
    ],
    resources: [
      { name: t("navigation.blog"), href: `/${locale}/blog` },
      { name: t("navigation.faq"), href: `/${locale}/faq` },
      { name: t("navigation.testimonials"), href: `/${locale}/testimonials` },
      { name: t("navigation.calculator"), href: `/${locale}/calculator` },
    ],
    legal: [
      { name: t("privacy_policy"), href: `/${locale}/privacy` },
      { name: t("terms_of_service"), href: `/${locale}/terms` },
      { name: t("disclaimer"), href: `/${locale}/disclaimer` },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-minimal relative">
      {/* GroundFooterBg con posición absoluta debajo del footer */}

      <GroundFooterBg />

      {/* Enhanced Main Footer Content */}
      <div className="container mx-auto px-6 z-20 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Enhanced Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <LogoSVG
                width={56}
                height={56}
                className="rounded-2xl shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-brand text-gold font-semibold">
                  Panama Golden Key
                </h3>
                <p className="text-gold/90 text-sm font-medium text-gray-300">
                  {t("description")}
                </p>
              </div>
            </div>

            <p className="text-gray-200 mb-8 max-w-md leading-relaxed">
              {t("brand_description")}
            </p>

            {/* Enhanced Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold" />
                <a
                  href="tel:+50712345678"
                  className="footer-link-minimal font-medium"
                >
                  +507 123-45678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold" />
                <a
                  href="mailto:info@panamagoldenkey.com"
                  className="footer-link-minimal font-medium"
                >
                  info@panamagoldenkey.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="text-white/90 font-medium">
                  Panama City, Panama
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-gold" />
                <span className="text-white/90 font-medium">
                  WeChat: PanamaGoldenKey
                </span>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-gold/20 rounded-2xl flex items-center justify-center text-gold hover:bg-gold hover:text-jade-green transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h4 className="text-xl font-brand text-gold font-semibold mb-8">
              {t("quick_links")}
            </h4>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-link-minimal font-medium transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Services */}
          <div>
            <h4 className="text-xl font-brand text-gold font-semibold mb-8">
              {t("services")}
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-link-minimal font-medium transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Resources & Legal */}
          <div>
            <h4 className="text-xl font-brand text-gold font-semibold mb-8">
              {t("resources")}
            </h4>
            <ul className="space-y-4 mb-8">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-link-minimal font-medium transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-xl font-brand text-gold font-semibold mb-8">
              {t("legal")}
            </h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-link-minimal text-sm font-medium transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Bar */}
      <div className="z-20 border-t border-white/10 relative">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Enhanced Copyright */}
            <p className="text-white/70 text-sm font-medium">
              {t("copyright")}
            </p>
            <p>
              Powered by{" "}
              <Link
                className="footer-link-minimal text-sm font-medium transition-all duration-200 hover:translate-x-1 inline-block"
                href={"https://groundscript.com/"}
              >
                GroundScript
              </Link>
            </p>

            {/* Enhanced Language Switcher & Back to Top */}
            <div className="flex items-center space-x-6">
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-white/70 hover:text-gold h-10 w-10 p-0 rounded-xl hover:bg-gold/20 transition-all duration-300 hover:scale-110"
              >
                <ArrowUp className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
