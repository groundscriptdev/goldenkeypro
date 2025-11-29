'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { X, Phone, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LogoSVG } from '@/components/ui/LogoSVG';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: Array<{ name: string; href: string }>;
}

export function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-jade-green/10">
            <div className="flex items-center space-x-3">
              <LogoSVG width={32} height={32} className="rounded-lg" />
              <div>
                <h2 className="text-lg font-brand text-jade-green font-semibold">
                  Panama Golden Key
                </h2>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                      isActive(item.href)
                        ? 'bg-jade-green/10 text-jade-green border-l-4 border-jade-green'
                        : 'text-jade-green hover:bg-jade-green/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="p-4 border-t border-jade-green/10 bg-jade-green/5">
            <div className="space-y-3">
              <a
                href="tel:+50712345678"
                className="flex items-center space-x-3 text-jade-green hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+507 123-45678</span>
              </a>
              <a
                href="mailto:info@panamagoldenkey.com"
                className="flex items-center space-x-3 text-jade-green hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">info@panamagoldenkey.com</span>
              </a>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span className="text-sm">WeChat: PanamaGoldenKey</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <Button
                asChild
                className="w-full bg-jade-green hover:bg-jade-green/90 text-white"
                onClick={onClose}
              >
                <Link href={`/${locale}/contact`}>
                  {t('common.free_consultation')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}