import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { generateFAQSchema } from '@/lib/jsonld';
import { SITE_URL, SITE_DESCRIPTION_EN } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Social Bridge Inc. | Recycled Resource Wholesale & Consulting | Kobe & Tokyo',
  description: SITE_DESCRIPTION_EN,
  alternates: {
    canonical: `${SITE_URL}/en/`,
    languages: {
      ja: `${SITE_URL}/`,
      en: `${SITE_URL}/en/`,
    },
  },
  openGraph: {
    title: 'Social Bridge Inc. | Recycled Resource Wholesale & Consulting',
    description: SITE_DESCRIPTION_EN,
    url: `${SITE_URL}/en/`,
    locale: 'en_US',
    alternateLocale: 'ja_JP',
  },
};

const faqs = [
  {
    question: 'What is Social Bridge Inc.?',
    answer:
      'Social Bridge Inc. is a Japanese company specializing in recycled resource wholesale and consulting for recycled resources and industrial waste. Founded in 2019, with roots dating back to 1953 in Kobe, we aim to realize a sustainable society through technology-driven solutions. Our services include resource wholesale, industrial waste consulting, DX support, HR recruitment outsourcing, and business succession support.',
  },
  {
    question: 'What services does Social Bridge offer?',
    answer:
      'Social Bridge offers five core services: (1) Recycled Resource Wholesale — collection and wholesale of waste paper, metal scrap, and industrial waste; (2) Industrial Waste Consulting — optimization of waste management and resource circulation; (3) DX Support — digital transformation for the recycling industry; (4) HR Recruitment Outsourcing (RPO); (5) Business Succession Support — comprehensive support for business transitions.',
  },
  {
    question: 'Where is Social Bridge located?',
    answer:
      'Social Bridge operates from three offices in Japan: Kobe Office (HQ) at 3-45-10 Arata-cho, Hyogo-ku, Kobe; Tokyo Office at Miyamasaka Building 609, 2-19-15 Shibuya, Shibuya-ku; and Nishinomiya Office at 9-14 Minamishowa-cho, Nishinomiya, Hyogo.',
  },
  {
    question: 'How does Social Bridge contribute to the circular economy?',
    answer:
      'Since 1953, Social Bridge has been promoting resource circulation in Kobe. In partnership with the Kobe City Environmental Bureau, we collect waste paper, metal scrap, and industrial waste across Hyogo, Kita, Nagata, and Suma wards. We combine 70 years of expertise with modern technology to advance circular economy initiatives in Japan.',
  },
];

export default function EnglishHomePage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(faqs)} />

      <Header locale="en" />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Solving Social Issues
              <br />
              <span className="text-accent-300">Through Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Social Bridge Inc. specializes in recycled resource wholesale and
              industrial waste consulting, aiming to realize a sustainable society.
              Operating from Kobe, Tokyo, and Nishinomiya since 1953.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/en/services/" className="btn-primary text-lg px-8 py-4">
                Our Services
              </Link>
              <Link href="/en/contact/" className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* About Summary */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="about-heading-en">
          <div className="container mx-auto px-4">
            <h2 id="about-heading-en" className="section-heading">
              About Social Bridge
            </h2>
            <p className="section-subheading">
              From Kobe to the world — creating the future of resource circulation since 1953.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="card text-center">
                <div className="text-4xl mb-4" aria-hidden="true">♻️</div>
                <h3 className="text-xl font-bold mb-3">Recycled Resource Wholesale</h3>
                <p className="text-gray-600 leading-relaxed">
                  Collection and wholesale of waste paper, metal scrap, and industrial waste.
                  Partnering with Kobe City to promote community-rooted resource circulation.
                </p>
              </article>
              <article className="card text-center">
                <div className="text-4xl mb-4" aria-hidden="true">💡</div>
                <h3 className="text-xl font-bold mb-3">Consulting & DX</h3>
                <p className="text-gray-600 leading-relaxed">
                  Specialized consulting for recycled resources and industrial waste.
                  Digital transformation support to optimize the entire industry.
                </p>
              </article>
              <article className="card text-center">
                <div className="text-4xl mb-4" aria-hidden="true">🤝</div>
                <h3 className="text-xl font-bold mb-3">Business Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive business support including HR recruitment outsourcing,
                  business succession, and startup ecosystem participation.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="faq-heading-en">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 id="faq-heading-en" className="section-heading">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 mt-12">
              {faqs.map((faq, index) => (
                <details key={index} className="card group">
                  <summary className="cursor-pointer font-bold text-lg list-none flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="flex-shrink-0 text-primary-600 group-open:rotate-180 transition-transform" aria-hidden="true">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary-700 text-white" aria-labelledby="cta-heading-en">
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading-en" className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Whether you need recycled resource management, waste consulting, DX support,
              or HR recruitment services, we&apos;re here to help.
            </p>
            <Link href="/en/contact/" className="btn-primary bg-white text-primary-700 hover:bg-gray-100 text-lg px-8 py-4">
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <Footer locale="en" />
    </>
  );
}
