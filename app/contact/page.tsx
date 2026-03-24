import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { JsonLd } from '@/components/JsonLd';
import { generateFAQSchema } from '@/lib/jsonld';
import { generatePageMetadata } from '@/lib/metadata';
import { COMPANY_INFO, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'お問い合わせ | SocialBridge株式会社',
  description:
    'SocialBridge株式会社へのお問い合わせ。再生資源卸売、産業廃棄物コンサルティング、DX支援、人材採用代行、事業承継支援に関するご相談はこちらから。',
  path: '/contact/',
  keywords: ['お問い合わせ', '相談', '見積もり', '資料請求'],
});

const contactFaqs = [
  {
    question: 'お問い合わせからどのくらいで返答がありますか？',
    answer: '通常、2営業日以内に担当者よりご連絡いたします。お急ぎの場合はその旨をお問い合わせフォームにご記載ください。',
  },
  {
    question: '初回相談は無料ですか？',
    answer: 'はい、初回のご相談は無料です。御社の課題やご要望をヒアリングし、最適なソリューションをご提案いたします。',
  },
  {
    question: 'オンラインでの打ち合わせは可能ですか？',
    answer: 'はい、Zoom等のオンラインツールを使用した打ち合わせに対応しております。全国どこからでもご相談いただけます。',
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(contactFaqs)} />
      {/* ContactPoint Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'お問い合わせ - SocialBridge株式会社',
          description: 'SocialBridge株式会社へのお問い合わせページ',
          url: `${SITE_URL}/contact/`,
          mainEntity: {
            '@type': 'Organization',
            name: COMPANY_INFO.name,
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              availableLanguage: ['Japanese', 'English'],
              areaServed: 'JP',
            },
          },
        }}
      />

      <Header locale="ja" />
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: 'お問い合わせ', href: '/contact/' },
        ]}
      />

      <main id="main-content">
        <section className="bg-primary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">お問い合わせ</h1>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              サービスに関するご相談やお見積もりなど、お気軽にお問い合わせください。
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24" aria-labelledby="contact-form-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <h2 id="contact-form-heading" className="text-2xl font-bold mb-6">
                  お問い合わせフォーム
                </h2>
                <form className="space-y-6" action="/api/contact" method="POST">
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-1">
                      会社名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="株式会社○○"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="info@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="078-XXX-XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-1">
                      ご相談内容
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">選択してください</option>
                      <option value="recycled-resources">再生資源卸売業</option>
                      <option value="consulting">産業廃棄物コンサルティング</option>
                      <option value="dx">DX支援</option>
                      <option value="hr">人材採用代行（RPO）</option>
                      <option value="succession">事業承継支援</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="ご相談内容をご記入ください"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-lg py-4">
                    送信する
                  </button>
                </form>
              </div>

              {/* Office Info */}
              <aside className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">オフィス所在地</h2>
                <div className="space-y-6">
                  {[
                    { label: '神戸オフィス（本社）', ...COMPANY_INFO.offices.kobe },
                    { label: '東京オフィス', ...COMPANY_INFO.offices.tokyo },
                    { label: '西宮オフィス', ...COMPANY_INFO.offices.nishinomiya },
                  ].map((office) => (
                    <div key={office.label} className="card">
                      <h3 className="font-bold text-lg mb-2">{office.label}</h3>
                      <address className="not-italic text-gray-600 text-sm leading-relaxed">
                        <p>〒{office.postalCode}</p>
                        <p>{office.address}</p>
                      </address>
                    </div>
                  ))}
                </div>

                {/* FAQ */}
                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">よくある質問</h2>
                  <div className="space-y-3">
                    {contactFaqs.map((faq, index) => (
                      <details key={index} className="card group text-sm">
                        <summary className="cursor-pointer font-bold list-none flex items-center justify-between gap-2">
                          <span>{faq.question}</span>
                          <span className="flex-shrink-0 text-primary-600 group-open:rotate-180 transition-transform text-xs" aria-hidden="true">▼</span>
                        </summary>
                        <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="ja" />
    </>
  );
}
