import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { JsonLd } from '@/components/JsonLd';
import { generateFAQSchema } from '@/lib/jsonld';
import { generatePageMetadata } from '@/lib/metadata';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us | Social Bridge Inc.',
  description:
    'About Social Bridge Inc. Founded in 2019 by CEO Hojon Song, specializing in recycled resource wholesale, industrial waste consulting, and DX support. Offices in Kobe, Tokyo, and Nishinomiya.',
  path: '/en/about/',
  locale: 'en',
  keywords: ['about us', 'company profile', 'Hojon Song', 'history', 'vision'],
});

const aboutFaqs = [
  {
    question: 'When was Social Bridge Inc. founded?',
    answer: 'Social Bridge Inc. was established in July 2019. However, our roots trace back to 1953 when Matsuzawa began resource collection operations in Kobe, giving us approximately 70 years of industry experience.',
  },
  {
    question: 'Who is the CEO of Social Bridge Inc.?',
    answer: 'The CEO is Hojon Song (宋浩典), a 4th-generation Korean-Japanese entrepreneur who founded the company with the vision of "creating a world connected beyond race and borders."',
  },
  {
    question: 'What is the vision of Social Bridge Inc.?',
    answer: 'Our vision is to "solve social issues through the power of technology" and "create a world connected beyond race and borders." We combine 70 years of resource circulation expertise with modern technology.',
  },
];

export default function AboutEnPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(aboutFaqs)} />

      <Header locale="en" />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/en/' },
          { label: 'About', href: '/en/about/' },
        ]}
      />

      <main id="main-content">
        <section className="bg-primary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">About Us</h1>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              Solving social issues through technology, aiming for a sustainable society.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary-700">Vision</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Creating a world connected beyond race and borders
                </p>
                <p className="mt-4 text-gray-600">
                  We solve social issues through the power of technology, creating a society where everyone can thrive.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary-700">Mission</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Guiding professionals to the next stage
                </p>
                <p className="mt-4 text-gray-600">
                  Growing our family business through DX while supporting the digital transformation of industry peers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Details */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="section-heading">Company Information</h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden mt-12">
              <dl>
                {[
                  { label: 'Company Name', value: 'SocialBridge株式会社 (Social Bridge Inc.)' },
                  { label: 'CEO', value: 'Hojon Song (宋浩典)' },
                  { label: 'Founded', value: 'July 2019' },
                  { label: 'Business', value: 'Recycled Resource Wholesale / Industrial Waste Consulting / DX Support / HR Recruitment Outsourcing / Business Succession Support' },
                  { label: 'Kobe Office (HQ)', value: COMPANY_INFO.offices.kobe.addressEn },
                  { label: 'Tokyo Office', value: COMPANY_INFO.offices.tokyo.addressEn },
                  { label: 'Nishinomiya Office', value: COMPANY_INFO.offices.nishinomiya.addressEn },
                ].map((item, index) => (
                  <div key={item.label} className={`flex flex-col sm:flex-row ${index > 0 ? 'border-t border-gray-100' : ''}`}>
                    <dt className="px-6 py-4 font-bold text-gray-900 sm:w-48 flex-shrink-0 bg-gray-50">{item.label}</dt>
                    <dd className="px-6 py-4 text-gray-700">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="section-heading">Our History</h2>
            <div className="mt-12 space-y-8">
              {[
                { year: '1953', event: 'Matsuzawa founded in Kobe, beginning waste collection operations in Hyogo Ward.' },
                { year: '2019', event: 'Social Bridge Inc. established with the vision of "solving social issues through technology."' },
                { year: '2024', event: 'Joined the Hyogo Kobe Start-up Ecosystem Consortium as a support organization.' },
                { year: '2025', event: 'Expanded DX consulting services to support industry peers\' digital transformation.' },
                { year: '2026', event: 'Joined Takeoff Tokyo 2026 as a Community Partner, accelerating global expansion.' },
              ].map((item) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="font-bold text-primary-700">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-px bg-primary-200 relative">
                    <div className="absolute top-1 -left-1.5 w-3 h-3 bg-primary-600 rounded-full" />
                  </div>
                  <p className="text-gray-700 pb-4">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <div className="space-y-4 mt-12">
              {aboutFaqs.map((faq, index) => (
                <details key={index} className="card group">
                  <summary className="cursor-pointer font-bold text-lg list-none flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="flex-shrink-0 text-primary-600 group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer locale="en" />
    </>
  );
}
