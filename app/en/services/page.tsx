import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { JsonLd } from '@/components/JsonLd';
import { generateServiceSchema, generateFAQSchema } from '@/lib/jsonld';
import { generatePageMetadata } from '@/lib/metadata';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Services | Social Bridge Inc.',
  description:
    'Social Bridge Inc. services: Recycled Resource Wholesale, Industrial Waste Consulting, DX Support, HR Recruitment Outsourcing (RPO), and Business Succession Support.',
  path: '/en/services/',
  locale: 'en',
  keywords: ['recycled resources', 'industrial waste consulting', 'DX support', 'RPO', 'business succession'],
});

const services = [
  {
    id: 'recycled-resources',
    title: 'Recycled Resource Wholesale',
    description: 'End-to-end resource circulation services from collection to sorting and wholesale of waste paper, metal scrap, and industrial waste.',
    details: [
      'Waste paper collection and wholesale (newspapers, cardboard, magazines)',
      'Metal scrap collection and wholesale',
      'Industrial waste collection and transportation',
      'Community-based collection in partnership with Kobe City Environmental Bureau',
      'Coverage across Hyogo, Kita, Nagata, and Suma wards',
    ],
    icon: '♻️',
  },
  {
    id: 'consulting',
    title: 'Industrial Waste Consulting',
    description: 'Specialized consulting for recycled resources and industrial waste, optimizing resource circulation and reducing costs.',
    details: [
      'Waste processing flow optimization',
      'Cost reduction consulting',
      'Regulatory compliance support',
      'Resource circulation planning and implementation',
      'Circular economy adoption guidance',
    ],
    icon: '📋',
  },
  {
    id: 'dx-support',
    title: 'DX Support (Digital Transformation)',
    description: 'Industry-specific DX support for the recycling and waste management sector, from digitization to data analytics.',
    details: [
      'Business process digitization',
      'Data analytics infrastructure development',
      'Cloud system implementation',
      'IoT-powered collection efficiency',
      'Digital marketing support',
    ],
    icon: '🖥️',
  },
  {
    id: 'hr-recruitment',
    title: 'HR Recruitment Outsourcing (RPO)',
    description: 'Streamline your hiring process with our recruitment outsourcing services, delivering your company\'s appeal to candidates from an external perspective.',
    details: [
      'Recruitment strategy development',
      'Job platform selection and management',
      'Direct mail and scout messaging',
      'Candidate screening',
      'Employer branding support',
    ],
    icon: '👥',
  },
  {
    id: 'business-succession',
    title: 'Business Succession Support',
    description: 'Comprehensive business support as your "Banto Agent" — handling sales, HR, and digital needs to solve the "not enough hands" challenge.',
    details: [
      'Succession planning',
      'Successor development programs',
      'Business improvement and efficiency',
      'Sales representation and support',
      'Comprehensive management support',
    ],
    icon: '🏢',
  },
];

const serviceFaqs = [
  {
    question: 'What areas does Social Bridge serve?',
    answer: 'We primarily operate in Hyogo Prefecture (Kobe and Nishinomiya) and Tokyo. Resource collection covers Hyogo, Kita, Nagata, and Suma wards in Kobe. Consulting and DX services are available nationwide in Japan.',
  },
  {
    question: 'What types of companies benefit from your DX support?',
    answer: 'Our DX support targets companies in the recycled resources and industrial waste sector, from SMEs to large enterprises. We leverage our own experience digitally transforming our family business to help industry peers.',
  },
];

export default function ServicesEnPage() {
  return (
    <>
      {services.map((service) => (
        <JsonLd
          key={service.id}
          data={generateServiceSchema({
            name: service.title,
            description: service.description,
            url: `${SITE_URL}/en/services/#${service.id}`,
          })}
        />
      ))}
      <JsonLd data={generateFAQSchema(serviceFaqs)} />

      <Header locale="en" />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/en/' },
          { label: 'Services', href: '/en/services/' },
        ]}
      />

      <main id="main-content">
        <section className="bg-primary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Our Services</h1>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              As professionals in recycled resources, we offer five core services.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-16">
              {services.map((service) => (
                <article key={service.id} id={service.id} className="card p-8 md:p-12 scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl" aria-hidden="true">{service.icon}</span>
                    <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  <h3 className="font-bold text-lg mb-3">What We Offer</h3>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-gray-600">
                        <span className="flex-shrink-0 w-5 h-5 bg-accent-100 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-accent-600 text-xs">✓</span>
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="section-heading">FAQ</h2>
            <div className="space-y-4 mt-12">
              {serviceFaqs.map((faq, index) => (
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

        <section className="py-16 md:py-20 bg-primary-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Our Services?</h2>
            <p className="text-primary-100 text-lg mb-8">Contact us for details and estimates.</p>
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
