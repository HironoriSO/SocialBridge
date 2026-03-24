'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAV_ITEMS_JA, NAV_ITEMS_EN } from '@/lib/constants';

interface HeaderProps {
  locale?: 'ja' | 'en';
}

export function Header({ locale = 'ja' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = locale === 'ja' ? NAV_ITEMS_JA : NAV_ITEMS_EN;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href={locale === 'ja' ? '/' : '/en/'}
            className="flex items-center gap-3 text-xl font-bold text-primary-700"
            aria-label="SocialBridge株式会社 ホームページ"
          >
            <span className="text-2xl" aria-hidden="true">🌉</span>
            <span>SocialBridge</span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-6"
            role="navigation"
            aria-label={locale === 'ja' ? 'メインナビゲーション' : 'Main navigation'}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm lg:text-base"
              >
                {item.label}
              </Link>
            ))}
            {/* Language Switcher */}
            <Link
              href={locale === 'ja' ? '/en/' : '/'}
              className="ml-2 px-3 py-1.5 border border-primary-600 text-primary-600 rounded-md text-sm hover:bg-primary-600 hover:text-white transition-colors"
              hrefLang={locale === 'ja' ? 'en' : 'ja'}
            >
              {locale === 'ja' ? 'EN' : 'JP'}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden border-t py-4"
            role="navigation"
            aria-label={locale === 'ja' ? 'モバイルナビゲーション' : 'Mobile navigation'}
          >
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={locale === 'ja' ? '/en/' : '/'}
                  className="inline-block mt-2 px-4 py-2 border border-primary-600 text-primary-600 rounded-md text-sm"
                  hrefLang={locale === 'ja' ? 'en' : 'ja'}
                >
                  {locale === 'ja' ? 'English' : '日本語'}
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
