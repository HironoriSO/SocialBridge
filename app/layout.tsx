import type { Metadata, Viewport } from 'next';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
} from '@/lib/jsonld';
import { JsonLd } from '@/components/JsonLd';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import './globals.css';

// Set your GA4 Measurement ID here
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Comprehensive default metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | 再生資源・産業廃棄物コンサルティング | 神戸・東京`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'SocialBridge',
    'ソーシャルブリッジ',
    '再生資源',
    '再生資源卸売',
    '産業廃棄物',
    'コンサルティング',
    'DX支援',
    'デジタルトランスフォーメーション',
    '事業承継',
    '人材採用代行',
    '神戸',
    '東京',
    '西宮',
    'サーキュラーエコノミー',
    '循環型経済',
    'リサイクル',
    '廃品回収',
    '番頭代行',
    '持続可能',
    'SDGs',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      ja: SITE_URL,
      en: `${SITE_URL}/en/`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    alternateLocale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | 再生資源・産業廃棄物コンサルティング`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - 再生資源卸売・コンサルティング`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | 再生資源・産業廃棄物コンサルティング`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/images/og-image.jpg`],
    creator: '@socialbridgejp',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
  category: 'business',
};

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* JSON-LD Structured Data - Global */}
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateWebSiteSchema()} />
        <JsonLd data={generateLocalBusinessSchema()} />
      </head>
      <body className="font-sans">
        {/* Accessibility: Skip to content */}
        <a href="#main-content" className="skip-to-content">
          メインコンテンツへスキップ
        </a>
        {children}
        {/* Google Analytics */}
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
