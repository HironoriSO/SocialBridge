import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { generatePageMetadata } from '@/lib/metadata';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us | Social Bridge Inc.',
  description:
    'Contact Social Bridge Inc. for recycled resource wholesale, industrial waste consulting, DX support, HR recruitment outsourcing, and business succession support.',
  path: '/en/contact/',
  locale: 'en',
  keywords: ['contact', 'inquiry', 'quote', 'consultation'],
});

export default function ContactEnPage() {
  return (
    <>
      <Header locale="en" />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/en/' },
          { label: 'Contact', href: '/en/contact/' },
        ]}
      />

      <main id="main-content">
        <section className="bg-primary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Contact Us</h1>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              Get in touch with us for consultations, estimates, or any inquiries.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold mb-6">Inquiry Form</h2>
                <form className="space-y-6" action="/api/contact" method="POST">
                  <div>
                    <label htmlFor="company-en" className="block text-sm font-bold text-gray-700 mb-1">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="company-en" name="company" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                  <div>
                    <label htmlFor="name-en" className="block text-sm font-bold text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="name-en" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                  <div>
                    <label htmlFor="email-en" className="block text-sm font-bold text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input type="email" id="email-en" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                  <div>
                    <label htmlFor="service-en" className="block text-sm font-bold text-gray-700 mb-1">
                      Service of Interest
                    </label>
                    <select id="service-en" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="">Select a service</option>
                      <option value="recycled-resources">Recycled Resource Wholesale</option>
                      <option value="consulting">Industrial Waste Consulting</option>
                      <option value="dx">DX Support</option>
                      <option value="hr">HR Recruitment Outsourcing</option>
                      <option value="succession">Business Succession Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message-en" className="block text-sm font-bold text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea id="message-en" name="message" required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                  <button type="submit" className="btn-primary w-full text-lg py-4">
                    Send Message
                  </button>
                </form>
              </div>

              <aside className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
                <div className="space-y-6">
                  {[
                    { label: 'Kobe Office (HQ)', ...COMPANY_INFO.offices.kobe },
                    { label: 'Tokyo Office', ...COMPANY_INFO.offices.tokyo },
                    { label: 'Nishinomiya Office', ...COMPANY_INFO.offices.nishinomiya },
                  ].map((office) => (
                    <div key={office.label} className="card">
                      <h3 className="font-bold text-lg mb-2">{office.label}</h3>
                      <address className="not-italic text-gray-600 text-sm leading-relaxed">
                        <p>{office.addressEn}</p>
                      </address>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="en" />
    </>
  );
}
