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
  title: 'サービス一覧 | SocialBridge株式会社',
  description:
    'SocialBridge株式会社のサービス一覧。再生資源卸売業、産業廃棄物コンサルティング、DX支援、人材採用代行（RPO）、事業承継支援の5つのサービスを提供。',
  path: '/services/',
  keywords: [
    '再生資源卸売',
    '産業廃棄物コンサルティング',
    'DX支援',
    '人材採用代行',
    'RPO',
    '事業承継',
    '番頭代行',
  ],
});

const services = [
  {
    id: 'recycled-resources',
    title: '再生資源卸売業',
    titleEn: 'Recycled Resource Wholesale',
    description:
      '古紙・金属スクラップ・産業廃棄物の回収から分別・卸売まで、一貫した資源循環サービスを提供します。',
    details: [
      '古紙回収・卸売（新聞紙、段ボール、雑誌等）',
      '金属スクラップ回収・卸売',
      '産業廃棄物の収集運搬',
      '神戸市環境局との連携による地域密着型回収',
      '兵庫区・北区・長田区・須磨区を中心としたエリアカバー',
    ],
    icon: '♻️',
  },
  {
    id: 'consulting',
    title: '産業廃棄物コンサルティング',
    titleEn: 'Industrial Waste Consulting',
    description:
      '再生資源・産業廃棄物分野に特化したコンサルティングで、資源循環の最適化とコスト削減を実現します。',
    details: [
      '廃棄物処理フローの最適化',
      'コスト削減コンサルティング',
      '法令遵守・コンプライアンスサポート',
      '資源循環計画の策定・実行支援',
      'サーキュラーエコノミー導入アドバイス',
    ],
    icon: '📋',
  },
  {
    id: 'dx-support',
    title: 'DX支援（デジタルトランスフォーメーション）',
    titleEn: 'DX Support',
    description:
      '再生資源・産業廃棄物業界に特化したDX支援。業務のデジタル化からデータ活用まで総合的にサポートします。',
    details: [
      '業務プロセスのデジタル化',
      'データ活用・分析基盤の構築',
      'クラウドシステムの導入支援',
      'IoTを活用した収集効率化',
      'デジタルマーケティング支援',
    ],
    icon: '🖥️',
  },
  {
    id: 'hr-recruitment',
    title: '人材採用代行（RPO）',
    titleEn: 'HR Recruitment Outsourcing (RPO)',
    description:
      '採用プロセスのアウトソーシングで、企業の採用活動を効率化。外部目線で企業の魅力を求職者に届けます。',
    details: [
      '採用戦略の策定',
      '求人媒体の選定・運用',
      'ダイレクトメール・スカウト送信',
      '応募者スクリーニング',
      '採用ブランディング支援',
    ],
    icon: '👥',
  },
  {
    id: 'business-succession',
    title: '事業承継支援（番頭代行）',
    titleEn: 'Business Succession Support',
    description:
      '「現場の手が足りない」を解決する番頭代行サービス。営業・人材・デジタルをまるっとお任せいただけます。',
    details: [
      '事業承継計画の策定',
      '後継者育成プログラム',
      '業務改善・効率化支援',
      '営業代行・営業支援',
      '経営者の右腕としての総合支援',
    ],
    icon: '🏢',
  },
];

const serviceFaqs = [
  {
    question: 'SocialBridgeのサービスはどのエリアで利用できますか？',
    answer:
      '主に兵庫県（神戸市・西宮市を中心）と東京都でサービスを提供しています。再生資源回収は神戸市の兵庫区・北区・長田区・須磨区を中心に行っています。コンサルティングやDX支援は全国対応可能です。',
  },
  {
    question: 'DX支援はどのような企業が対象ですか？',
    answer:
      '再生資源・産業廃棄物業界の企業を中心に、中小企業から大企業までDX支援を行っています。自社の家業をDXで成長させた実績をもとに、同業他社のデジタル化をサポートします。',
  },
  {
    question: '人材採用代行（RPO）の料金体系は？',
    answer:
      '料金体系はご依頼内容に応じてカスタマイズいたします。まずはお問い合わせいただき、御社の採用課題や目標をヒアリングした上で、最適なプランをご提案します。',
  },
  {
    question: '「番頭代行」サービスの具体的な内容は？',
    answer:
      '番頭代行は、経営者の右腕として営業・人材採用・デジタル化を包括的にサポートするサービスです。「現場の手が足りない」という課題を解決し、事業承継や事業拡大をスムーズに進めます。',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Service Schema for each service */}
      {services.map((service) => (
        <JsonLd
          key={service.id}
          data={generateServiceSchema({
            name: service.title,
            description: service.description,
            url: `${SITE_URL}/services/#${service.id}`,
          })}
        />
      ))}
      <JsonLd data={generateFAQSchema(serviceFaqs)} />

      <Header locale="ja" />
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: 'サービス', href: '/services/' },
        ]}
      />

      <main id="main-content">
        <section className="bg-primary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">サービス一覧</h1>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              再生資源のプロフェッショナルとして、5つの主要サービスを提供しています。
            </p>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-16">
              {services.map((service, index) => (
                <article
                  key={service.id}
                  id={service.id}
                  className={`scroll-mt-24 ${index % 2 === 0 ? '' : ''}`}
                >
                  <div className="card p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl" aria-hidden="true">{service.icon}</span>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                        <p className="text-sm text-gray-500">{service.titleEn}</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <h3 className="font-bold text-lg mb-3">サービス内容</h3>
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
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="services-faq-heading">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 id="services-faq-heading" className="section-heading">
              サービスに関するよくある質問
            </h2>
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

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">サービスについてのご相談</h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              各サービスの詳細やお見積もりについて、お気軽にお問い合わせください。
            </p>
            <Link href="/contact/" className="btn-primary bg-white text-primary-700 hover:bg-gray-100 text-lg px-8 py-4">
              お問い合わせはこちら
            </Link>
          </div>
        </section>
      </main>

      <Footer locale="ja" />
    </>
  );
}
