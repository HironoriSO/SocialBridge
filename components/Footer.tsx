import Link from 'next/link';
import { NAV_ITEMS_JA, NAV_ITEMS_EN, COMPANY_INFO } from '@/lib/constants';

interface FooterProps {
  locale?: 'ja' | 'en';
}

export function Footer({ locale = 'ja' }: FooterProps) {
  const navItems = locale === 'ja' ? NAV_ITEMS_JA : NAV_ITEMS_EN;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">
              {locale === 'ja' ? COMPANY_INFO.name : COMPANY_INFO.nameEn}
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              {locale === 'ja'
                ? 'テクノロジーの力で社会課題を解決し、持続可能な社会の実現を目指します。'
                : 'Solving social issues through technology and aiming to realize a sustainable society.'}
            </p>
            <address className="not-italic text-sm space-y-2">
              <p>
                <strong>{locale === 'ja' ? '本社：' : 'HQ: '}</strong>
                {locale === 'ja'
                  ? COMPANY_INFO.offices.kobe.address
                  : COMPANY_INFO.offices.kobe.addressEn}
              </p>
              <p>
                <strong>{locale === 'ja' ? '東京：' : 'Tokyo: '}</strong>
                {locale === 'ja'
                  ? COMPANY_INFO.offices.tokyo.address
                  : COMPANY_INFO.offices.tokyo.addressEn}
              </p>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-white text-lg font-bold mb-4">
              {locale === 'ja' ? 'ページ一覧' : 'Pages'}
            </h2>
            <nav aria-label={locale === 'ja' ? 'フッターナビゲーション' : 'Footer navigation'}>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-white text-lg font-bold mb-4">
              {locale === 'ja' ? '事業内容' : 'Services'}
            </h2>
            <ul className="space-y-2 text-sm">
              <li>{locale === 'ja' ? '再生資源卸売業' : 'Recycled Resource Wholesale'}</li>
              <li>{locale === 'ja' ? '産業廃棄物コンサルティング' : 'Industrial Waste Consulting'}</li>
              <li>{locale === 'ja' ? 'DX支援' : 'DX Support'}</li>
              <li>{locale === 'ja' ? '人材採用代行' : 'HR Recruitment Outsourcing'}</li>
              <li>{locale === 'ja' ? '事業承継支援' : 'Business Succession Support'}</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 mt-8">
          <a
            href={COMPANY_INFO.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-colors"
            aria-label="YouTube"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
              <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#fff" />
            </svg>
          </a>
          <a
            href={COMPANY_INFO.social.note}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors"
            aria-label="note"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19.195 4.805a6.667 6.667 0 0 0-9.428 0L4.805 9.767a6.667 6.667 0 0 0 0 9.428 6.667 6.667 0 0 0 9.428 0l4.962-4.962a6.667 6.667 0 0 0 0-9.428zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
            </svg>
          </a>
          <a
            href={COMPANY_INFO.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {currentYear} {COMPANY_INFO.name} All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href={locale === 'ja' ? '/privacy/' : '/en/privacy/'} className="hover:text-white transition-colors">
              {locale === 'ja' ? 'プライバシーポリシー' : 'Privacy Policy'}
            </Link>
            <Link
              href={locale === 'ja' ? '/en/' : '/'}
              className="hover:text-white transition-colors"
              hrefLang={locale === 'ja' ? 'en' : 'ja'}
            >
              {locale === 'ja' ? 'English' : '日本語'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
