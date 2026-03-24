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
