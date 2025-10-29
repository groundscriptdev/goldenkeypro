'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { LogoSVG } from '@/components/ui/LogoSVG';
import { cn } from '@/lib/utils';

export function Footer() {
  const locale = useLocale();
  const t = useTranslations('footer');
  const commonT = useTranslations('common');

  const footerLinks = {
    quickLinks: [
      { name: t('navigation.home'), href: `/${locale}` },
      { name: t('navigation.residency'), href: `/${locale}/residency` },
      { name: t('navigation.real_estate'), href: `/${locale}/real-estate` },
      { name: t('navigation.medical_tourism'), href: `/${locale}/medical-tourism` },
    ],
    services: [
      { name: t('services_list.residency_consultation'), href: `/${locale}/residency` },
      { name: t('services_list.investment_advisory'), href: `/${locale}/real-estate` },
      { name: t('services_list.legal_support'), href: `/${locale}/about-us` },
      { name: t('services_list.property_management'), href: `/${locale}/real-estate` },
    ],
    resources: [
      { name: t('navigation.blog'), href: `/${locale}/blog` },
      { name: t('navigation.faq'), href: `/${locale}/faq` },
      { name: t('navigation.testimonials'), href: `/${locale}/testimonials` },
      { name: t('navigation.calculator'), href: `/${locale}/calculator` },
    ],
    legal: [
      { name: t('privacy_policy'), href: `/${locale}/privacy` },
      { name: t('terms_of_service'), href: `/${locale}/terms` },
      { name: t('disclaimer'), href: `/${locale}/disclaimer` },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-jade-green text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <LogoSVG width={48} height={48} className="rounded-lg" />
              <div>
                <h3 className="text-xl font-brand text-white font-semibold">
                  Panama Golden Key
                </h3>
                <p className="text-gold/80 text-sm">
                  {t('description')}
                </p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 max-w-md">
              {t('brand_description')}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+50712345678" className="text-white/90 hover:text-gold transition-colors">
                  +507 123-45678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:info@panamagoldenkey.com" className="text-white/90 hover:text-gold transition-colors">
                  info@panamagoldenkey.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-white/90">
                  Panama City, Panama
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-gold" />
                <span className="text-white/90">
                  WeChat: PanamaGoldenKey
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-jade-green transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-brand text-gold font-semibold mb-6">
              {t('quick_links')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-brand text-gold font-semibold mb-6">
              {t('services')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="text-lg font-brand text-gold font-semibold mb-6">
              {t('resources')}
            </h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-brand text-gold font-semibold mb-6">
              {t('legal')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-white/70 text-sm">
              {t('copyright')}
            </p>

            {/* Language Switcher & Back to Top */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-white/70 hover:text-gold h-8 w-8 p-0"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}