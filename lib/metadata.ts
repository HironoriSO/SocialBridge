import { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from './constants';

interface GenerateMetadataParams {
  title: string;
  description: string;
  path: string;
  locale?: 'ja' | 'en';
  ogImage?: string;
  noindex?: boolean;
  keywords?: string[];
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  locale = 'ja',
  ogImage,
  noindex = false,
  keywords = [],
  type = 'website',
  publishedTime,
  modifiedTime,
}: GenerateMetadataParams): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage || `${SITE_URL}/images/og-image.jpg`;

  const defaultKeywords =
    locale === 'ja'
      ? [
          'SocialBridge',
          'ソーシャルブリッジ',
          '再生資源',
          '産業廃棄物',
          'コンサルティング',
          'DX支援',
          '事業承継',
          '人材採用代行',
          '神戸',
          '東京',
          'サーキュラーエコノミー',
          '循環型経済',
          'リサイクル',
          '廃品回収',
        ]
      : [
          'Social Bridge',
          'recycled resources',
          'industrial waste',
          'consulting',
          'DX',
          'digital transformation',
          'Kobe',
          'Tokyo',
          'circular economy',
          'recycling',
          'Japan',
          'sustainability',
        ];

  const allKeywords = Array.from(new Set([...keywords, ...defaultKeywords]));

  return {
    title,
    description,
    keywords: allKeywords,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        ja: `${SITE_URL}${path.startsWith('/en') ? path.replace('/en', '') || '/' : path}`,
        en: `${SITE_URL}${path.startsWith('/en') ? path : `/en${path}`}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === 'ja' ? 'ja_JP' : 'en_US',
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@socialbridgejp',
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
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
  };
}
