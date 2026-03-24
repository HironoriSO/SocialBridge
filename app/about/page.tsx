import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { JsonLd } from '@/components/JsonLd';
import { generateFAQSchema } from '@/lib/jsonld';
import { generatePageMetadata } from '@/lib/metadata';
import { SITE_URL, COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: '会社概要 | SocialBridge株式会社',
  description:
    'SocialBridge株式会社の会社概要。代表取締役CEO 宋浩典。2019年創業、再生資源卸売業・産業廃棄物コンサルティング・DX支援を展開。神戸・東京・西宮の3拠点。',
  path: '/about/',
  keywords: ['会社概要', '代表取締役', '宋浩典', '企業情報', '沿革', '経営理念'],
});

const companyFaqs = [
  {
    question: 'SocialBridge株式会社の設立はいつですか？',
    answer: 'SocialBridge株式会社は2019年7月に設立されました。ただし、前身の松澤は1953年に神戸で創業し、約70年の歴史を持っています。',
  },
  {
    question: 'SocialBridge株式会社の代表者は誰ですか？',
    answer: '代表取締役CEOの宋浩典（Song Hojon）です。在日コリアン4世として「人種・国境を超えた繋がりのある世界を創造する」というビジョンのもと、会社を設立しました。',
  },
  {
    question: 'SocialBridge株式会社の資本金はいくらですか？',
    answer: 'SocialBridge株式会社は、再生資源卸売業とコンサルティングを主な事業とする企業です。詳しい資本金情報についてはお問い合わせください。',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(companyFaqs)} />

      <Header locale="ja" />
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: '会社概要', href: '/about/' },
        ]}
      />

      <main id="main-content">
        {/* Page Header */}
        <section className="bg-primary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">会社概要</h1>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              テクノロジーの力で社会課題を解決し、持続可能な社会の実現を目指します。
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="vision-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 id="vision-heading" className="text-2xl font-bold mb-4 text-primary-700">ビジョン</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  人種・国境を超えた繋がりのある世界を創造する
                </p>
                <p className="mt-4 text-gray-600">
                  テクノロジーの力で社会課題を解決し、すべての人が暮らしやすい社会を実現します。
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary-700">ミッション</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  プロフェッショナルを次のステージに導く
                </p>
                <p className="mt-4 text-gray-600">
                  家業をDXで成長させながら、同業他社のデジタル化と事業発展をサポートします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Details Table */}
        <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="company-details-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="company-details-heading" className="section-heading">会社情報</h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden mt-12">
              <dl>
                {[
                  { label: '会社名', value: 'SocialBridge株式会社（Social Bridge Inc.）' },
                  { label: '代表取締役CEO', value: '宋 浩典（Song Hojon）' },
                  { label: '設立', value: '2019年7月' },
                  { label: '事業内容', value: '再生資源卸売業 / 産業廃棄物コンサルティング / DX支援 / 人材採用代行 / 事業承継支援' },
                  { label: '本社所在地', value: COMPANY_INFO.offices.kobe.address },
                  { label: '東京オフィス', value: COMPANY_INFO.offices.tokyo.address },
                  { label: '西宮オフィス', value: COMPANY_INFO.offices.nishinomiya.address },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex flex-col sm:flex-row ${index > 0 ? 'border-t border-gray-100' : ''}`}
                  >
                    <dt className="px-6 py-4 font-bold text-gray-900 sm:w-48 flex-shrink-0 bg-gray-50">
                      {item.label}
                    </dt>
                    <dd className="px-6 py-4 text-gray-700">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="history-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="history-heading" className="section-heading">沿革</h2>
            <div className="mt-12 space-y-8">
              {[
                { year: '1953年', event: '松澤として神戸市にて廃品回収事業を開始。兵庫区を中心に地域に根差した資源循環事業を展開。' },
                { year: '2019年7月', event: 'SocialBridge株式会社を設立。「テクノロジーの力で社会課題を解決する」をビジョンに掲げる。' },
                { year: '2024年9月', event: '「兵庫神戸スタートアップエコシステムコンソーシアム」にサポート組織として参画。' },
                { year: '2025年', event: '家業のDXを推進しながら、同業他社へのDX支援コンサルティングを本格展開。' },
                { year: '2026年3月', event: 'Takeoff Tokyo 2026にコミュニティパートナーとして参加。グローバル展開を加速。' },
              ].map((item) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex-shrink-0 w-28 text-right">
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
        <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="about-faq-heading">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 id="about-faq-heading" className="section-heading">会社に関するよくある質問</h2>
            <div className="space-y-4 mt-12">
              {companyFaqs.map((faq, index) => (
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

      <Footer locale="ja" />
    </>
  );
}
