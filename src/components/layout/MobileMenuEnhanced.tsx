'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { X, Phone, Mail, Globe, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LogoSVG } from '@/components/ui/LogoSVG';
import { navigationData, NavigationItem, NavigationSubItem, getLocalizedUrl } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavigationItem[];
}

export function MobileMenuEnhanced({ isOpen, onClose, navigation }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
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
    const localizedHref = getLocalizedUrl(href, locale);
    if (localizedHref === `/${locale}` || localizedHref === `/${locale}/`) {
      return pathname === localizedHref || pathname === `${localizedHref}/`;
    }
    return pathname.startsWith(localizedHref);
  };

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const renderMobileNavigation = (items: NavigationItem[], level = 0) => (
    <ul className={cn(
      'space-y-1',
      level > 0 && 'ml-4 mt-2 space-y-1'
    )}>
      {items.map((item) => (
        <li key={item.id}>
          {item.hasDropdown ? (
            <div>
              <Link
                href={getLocalizedUrl(item.href || '/', locale)}
                onClick={() => {
                  toggleExpanded(item.id);
                  onClose();
                }}
                className={cn(
                  'flex items-center justify-between w-full px-5 py-4 text-sm font-sans font-medium rounded-lg transition-colors duration-200 mobile-menu-text-enhanced',
                  expandedItems.includes(item.id)
                    ? 'bg-jade-green/10 text-jade-green'
                    : 'text-jade-green/80 hover:text-jade-green hover:bg-jade-green/5'
                )}
              >
                <span>{t(item.label)}</span>
                {expandedItems.includes(item.id) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </Link>
              {expandedItems.includes(item.id) && item.items && (
                <div className="mt-1">
                  {renderMobileSubNavigation(item.items)}
                </div>
              )}
            </div>
          ) : (
            <Link
              href={getLocalizedUrl(item.href || '/', locale)}
              onClick={onClose}
              className={cn(
                'block px-5 py-4 text-sm font-sans font-medium rounded-lg transition-colors duration-200 mobile-menu-text-enhanced',
                item.href && isActive(item.href)
                  ? 'bg-jade-green/10 text-jade-green'
                  : 'text-jade-green/80 hover:text-jade-green hover:bg-jade-green/5'
              )}
            >
              {t(item.label)}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  const renderMobileSubNavigation = (items: NavigationSubItem[]) => (
    <ul className="ml-4 mt-2 space-y-1">
      {items.map((item) => (
        <li key={item.id}>
          {item.hasSubmenu ? (
            <div>
              <Link
                href={getLocalizedUrl(item.href || '/', locale)}
                onClick={() => {
                  toggleExpanded(item.id);
                  onClose();
                }}
                className={cn(
                  'flex items-center justify-between w-full px-5 py-4 text-sm font-sans font-medium rounded-lg transition-colors duration-200 mobile-menu-text-enhanced',
                  expandedItems.includes(item.id)
                    ? 'bg-jade-green/10 text-jade-green'
                    : 'text-jade-green/80 hover:text-jade-green hover:bg-jade-green/5'
                )}
              >
                <span>{t(item.label)}</span>
                {expandedItems.includes(item.id) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </Link>
              {expandedItems.includes(item.id) && item.items && (
                <div className="mt-1">
                  {renderMobileSubSubNavigation(item.items)}
                </div>
              )}
            </div>
          ) : (
            <Link
              href={getLocalizedUrl(item.href || '/', locale)}
              onClick={onClose}
              className={cn(
                'block px-5 py-4 text-sm font-sans font-medium rounded-lg transition-colors duration-200 mobile-menu-text-enhanced',
                item.href && isActive(item.href)
                  ? 'bg-jade-green/10 text-jade-green'
                  : 'text-jade-green/80 hover:text-jade-green hover:bg-jade-green/5'
              )}
            >
              {t(item.label)}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  const renderMobileSubSubNavigation = (items: any[]) => (
    <ul className="ml-4 mt-2 space-y-1">
      {items.map((item) => (
        <li key={item.id}>
          <Link
            href={getLocalizedUrl(item.href || '/', locale)}
            onClick={onClose}
            className={cn(
              'block px-5 py-4 text-sm font-sans font-medium rounded-lg transition-colors duration-200 mobile-menu-text-enhanced',
              item.href && isActive(item.href)
                ? 'bg-jade-green/10 text-jade-green'
                : 'text-jade-green/70 hover:text-jade-green hover:bg-jade-green/5'
            )}
          >
            {t(item.label)}
          </Link>
        </li>
      ))}
    </ul>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-out">
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
            {renderMobileNavigation(navigation)}
          </nav>

          {/* Contact Info */}
          <div className="p-4 border-t border-jade-green/10 bg-jade-green/5">
            <div className="space-y-3">
              <a
                href="tel:+50712345678"
                className="flex items-center space-x-3 text-sm text-jade-green/80 hover:text-jade-green transition-colors duration-200 font-sans"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+507 123-45678</span>
              </a>
              <a
                href="mailto:info@panamagoldenkey.com"
                className="flex items-center space-x-3 text-sm text-jade-green/80 hover:text-jade-green transition-colors duration-200 font-sans"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">info@panamagoldenkey.com</span>
              </a>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-sans">WeChat: PanamaGoldenKey</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <Button
                asChild
                className="w-full bg-jade-green hover:bg-jade-green/90 text-white px-6 py-3 text-sm font-sans font-medium transition-all duration-200 cta-text-enhanced"
                onClick={onClose}
              >
                <Link href={`/${locale}/contact`}>
                  {t('navigation.common.free_consultation')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}