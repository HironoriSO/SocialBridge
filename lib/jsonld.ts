import { SITE_URL, COMPANY_INFO, SITE_NAME, SITE_DESCRIPTION } from './constants';

// Organization Schema - Core company identity for SEO/AIO
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.nameEn,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo.png`,
      width: 512,
      height: 512,
    },
    description: SITE_DESCRIPTION,
    foundingDate: COMPANY_INFO.founded,
    founder: {
      '@type': 'Person',
      name: COMPANY_INFO.ceo,
      alternateName: COMPANY_INFO.ceoEn,
      jobTitle: '代表取締役CEO',
    },
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: '神戸市兵庫区',
        addressRegion: '兵庫県',
        postalCode: COMPANY_INFO.offices.kobe.postalCode,
        streetAddress: '荒田町3-45-10',
        addressCountry: 'JP',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: '渋谷区',
        addressRegion: '東京都',
        postalCode: COMPANY_INFO.offices.tokyo.postalCode,
        streetAddress: '渋谷2-19-15 宮益坂ビルディング609',
        addressCountry: 'JP',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: '西宮市',
        addressRegion: '兵庫県',
        postalCode: COMPANY_INFO.offices.nishinomiya.postalCode,
        streetAddress: '南昭和町9-14',
        addressCountry: 'JP',
      },
    ],
    sameAs: [
      COMPANY_INFO.social.facebook,
      COMPANY_INFO.social.youtube,
      COMPANY_INFO.social.note,
    ],
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 1,
      maxValue: 50,
    },
    knowsAbout: [
      '再生資源卸売',
      '産業廃棄物コンサルティング',
      'DX支援',
      '人材採用代行',
      '事業承継支援',
      'サーキュラーエコノミー',
      'Recycled Resource Wholesale',
      'Industrial Waste Consulting',
      'Digital Transformation',
      'Circular Economy',
    ],
  };
}

// WebSite Schema - for sitelinks searchbox in Google
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: COMPANY_INFO.nameEn,
    url: SITE_URL,
    inLanguage: ['ja', 'en'],
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// LocalBusiness Schema - for Google Maps & local SEO
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.nameEn,
    url: SITE_URL,
    image: `${SITE_URL}/images/og-image.jpg`,
    description: SITE_DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      addressLocality: '神戸市兵庫区',
      addressRegion: '兵庫県',
      postalCode: COMPANY_INFO.offices.kobe.postalCode,
      streetAddress: '荒田町3-45-10',
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.offices.kobe.lat,
      longitude: COMPANY_INFO.offices.kobe.lng,
    },
    areaServed: [
      { '@type': 'City', name: '神戸市' },
      { '@type': 'City', name: '西宮市' },
      { '@type': 'Prefecture', name: '兵庫県' },
      { '@type': 'City', name: '渋谷区' },
      { '@type': 'Country', name: 'Japan' },
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };
}

// BreadcrumbList Schema
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// FAQPage Schema - Critical for AIO (AI Overview) optimization
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Article Schema - for blog/column posts
export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    image: article.image || `${SITE_URL}/images/og-image.jpg`,
    author: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}

// Service Schema
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
  };
}

// VideoObject Schema - for YouTube video SEO
export function generateVideoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
  embedUrl: string;
  duration?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    contentUrl: video.contentUrl,
    embedUrl: video.embedUrl,
    duration: video.duration,
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
  };
}

// HowTo Schema - for AIO step-by-step content
export function generateHowToSchema(howto: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howto.name,
    description: howto.description,
    step: howto.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
