import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { generateFAQSchema, generateHowToSchema } from '@/lib/jsonld';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${SITE_NAME} | 再生資源卸売・産業廃棄物コンサルティング・DX支援 | 神戸・東京`,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      ja: `${SITE_URL}/`,
      en: `${SITE_URL}/en/`,
    },
  },
};

// FAQ data for AIO optimization - these are questions AI systems commonly extract
const faqs = [
  {
    question: 'SocialBridge株式会社とはどのような会社ですか？',
    answer:
      'SocialBridge株式会社は、再生資源卸売業と再生資源・産業廃棄物分野に特化したコンサルティングを行う企業です。1953年から神戸で廃品回収を行う松澤から始まり、2019年にSocialBridge株式会社として創業しました。「テクノロジーの力で社会課題を解決する」をビジョンに掲げ、DX支援・人材採用代行・事業承継支援などのサービスを提供しています。',
  },
  {
    question: 'SocialBridgeはどのようなサービスを提供していますか？',
    answer:
      'SocialBridgeは5つの主要サービスを提供しています。①再生資源卸売業（古紙・金属スクラップ・産業廃棄物の回収・卸売）、②産業廃棄物コンサルティング（資源循環の最適化提案）、③DX支援（デジタルトランスフォーメーションの導入支援）、④人材採用代行（RPO：採用プロセスのアウトソーシング）、⑤事業承継支援（「番頭代行」として現場の課題を解決）です。',
  },
  {
    question: 'SocialBridgeの所在地はどこですか？',
    answer:
      `SocialBridge株式会社は3つのオフィスを構えています。本社は${COMPANY_INFO.offices.kobe.address}（神戸オフィス）、東京オフィスは${COMPANY_INFO.offices.tokyo.address}、西宮オフィスは${COMPANY_INFO.offices.nishinomiya.address}です。`,
  },
  {
    question: 'サーキュラーエコノミー（循環型経済）への取り組みは？',
    answer:
      'SocialBridgeは1953年から約70年にわたり、神戸市を中心に資源循環事業を展開しています。神戸市環境局と連携し、兵庫区・北区・長田区・須磨区を中心に古紙・金属スクラップ・産業廃棄物の回収を行い、サーキュラーエコノミーの実現に向けた取り組みを推進しています。',
  },
  {
    question: 'SocialBridgeの「番頭代行」とは何ですか？',
    answer:
      '「番頭代行」は、SocialBridgeが提供する事業支援サービスのコンセプトです。「現場の手が足りない」という企業の課題を解決するため、営業・人材・デジタルをまるごとお任せいただけるサービスです。事業承継や事業拡大をサポートし、経営者の右腕として機能します。',
  },
  {
    question: 'SocialBridgeはスタートアップ支援も行っていますか？',
    answer:
      'はい、SocialBridgeは「兵庫神戸スタートアップエコシステムコンソーシアム」のサポート組織として参画しており、グローバルスタートアップの日本進出を支援しています。また、2026年のTakeoff Tokyoにコミュニティパートナーとして参加するなど、スタートアップエコシステムの発展に貢献しています。',
  },
];

export default function HomePage() {
  return (
    <>
      {/* AIO: FAQ Schema for AI Overview extraction */}
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* AIO: Speakable Schema - tells AI which content is most important to read aloud / extract */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'SocialBridge株式会社 - テクノロジーの力で社会課題を解決する',
          url: `${SITE_URL}/`,
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['#about-heading', '#services-heading', '#faq-heading', '.section-subheading'],
          },
          mainEntity: {
            '@id': `${SITE_URL}/#organization`,
          },
        }}
      />

      {/* AIO: HowTo Schema for step-by-step content */}
      <JsonLd
        data={generateHowToSchema({
          name: 'SocialBridgeへのお問い合わせ方法',
          description: 'SocialBridge株式会社へのお問い合わせ手順をご案内します。',
          steps: [
            { name: 'サービスを選ぶ', text: '再生資源卸売、コンサルティング、DX支援、人材採用代行、事業承継支援からご希望のサービスを選択してください。' },
            { name: 'お問い合わせフォームへ', text: 'お問い合わせページから必要事項をご入力ください。' },
            { name: '担当者からご連絡', text: '内容確認後、担当者より2営業日以内にご連絡いたします。' },
          ],
        })}
      />

      <Header locale="ja" />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              テクノロジーの力で
              <br />
              <span className="text-accent-300">社会課題を解決する</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              SocialBridge株式会社は、再生資源卸売業と産業廃棄物コンサルティングを通じて
              持続可能な社会の実現を目指しています。
              <br />
              営業・人材・デジタルをまるっとお任せできる「番頭代行」サービスで、
              あなたのビジネスを次のステージへ導きます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services/" className="btn-primary text-lg px-8 py-4">
                サービスを見る
              </Link>
              <Link href="/contact/" className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white/10">
                お問い合わせ
              </Link>
            </div>
          </div>
        </section>

        {/* About Summary - AIO optimized with clear, extractable content */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="about-heading">
          <div className="container mx-auto px-4">
            <h2 id="about-heading" className="section-heading">
              SocialBridgeについて
            </h2>
            <p className="section-subheading">
              1953年の創業から約70年。神戸から世界へ、資源循環の未来を創造します。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="card text-center">
                <div className="text-4xl mb-4" aria-hidden="true">♻️</div>
                <h3 className="text-xl font-bold mb-3">再生資源卸売業</h3>
                <p className="text-gray-600 leading-relaxed">
                  古紙・金属スクラップ・産業廃棄物の回収から卸売まで。
                  神戸市環境局と連携し、地域に根差した資源循環を推進しています。
                </p>
              </article>
              <article className="card text-center">
                <div className="text-4xl mb-4" aria-hidden="true">💡</div>
                <h3 className="text-xl font-bold mb-3">コンサルティング</h3>
                <p className="text-gray-600 leading-relaxed">
                  再生資源・産業廃棄物分野に特化した専門コンサルティング。
                  DX支援を通じて業界全体の効率化と最適化を実現します。
                </p>
              </article>
              <article className="card text-center">
                <div className="text-4xl mb-4" aria-hidden="true">🤝</div>
                <h3 className="text-xl font-bold mb-3">番頭代行</h3>
                <p className="text-gray-600 leading-relaxed">
                  「現場の手が足りない」を解決。営業・人材・デジタルをまるっとお任せ。
                  事業承継から事業拡大まで、経営者の右腕として支援します。
                </p>
              </article>
            </div>
            <div className="text-center mt-10">
              <Link href="/about/" className="btn-primary">
                会社概要を見る
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <h2 id="services-heading" className="section-heading">
              サービス一覧
            </h2>
            <p className="section-subheading">
              再生資源のプロフェッショナルとして、幅広いソリューションを提供します。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: '再生資源卸売業',
                  desc: '古紙・金属スクラップ・産業廃棄物の回収・分別・卸売を行います。70年の実績と神戸市環境局との連携で、確実な資源循環を実現。',
                  icon: '♻️',
                },
                {
                  title: '産業廃棄物コンサルティング',
                  desc: '廃棄物処理の最適化、コスト削減、法令遵守のアドバイスを提供。資源循環計画の策定から実行まで一貫してサポート。',
                  icon: '📋',
                },
                {
                  title: 'DX支援（デジタルトランスフォーメーション）',
                  desc: '再生資源・産業廃棄物業界に特化したDX支援。業務のデジタル化、データ活用、システム導入を総合的にサポート。',
                  icon: '🖥️',
                },
                {
                  title: '人材採用代行（RPO）',
                  desc: '採用プロセスのアウトソーシング。ダイレクトメール送信などの付帯サービスで、外部目線から企業の魅力を求職者へ届けます。',
                  icon: '👥',
                },
                {
                  title: '事業承継支援',
                  desc: '「番頭代行」として、事業承継における課題を解決。後継者育成、業務改善、デジタル化まで包括的にサポートします。',
                  icon: '🏢',
                },
                {
                  title: 'スタートアップ支援',
                  desc: '兵庫神戸スタートアップエコシステムコンソーシアムのサポート組織として、グローバルスタートアップの日本進出を支援。',
                  icon: '🚀',
                },
              ].map((service) => (
                <article key={service.title} className="card">
                  <div className="text-3xl mb-3" aria-hidden="true">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </article>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/services/" className="btn-primary">
                サービス詳細を見る
              </Link>
            </div>
          </div>
        </section>

        {/* Strengths / Why Choose Us */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="strengths-heading">
          <div className="container mx-auto px-4">
            <h2 id="strengths-heading" className="section-heading">
              SocialBridgeが選ばれる理由
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-lg">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">70年の実績</h3>
                  <p className="text-gray-600">1953年から神戸で資源回収事業を展開。長年の経験と信頼に基づく確かなサービスを提供します。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-lg">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">テクノロジー × 現場力</h3>
                  <p className="text-gray-600">伝統的な資源回収業にDXを融合。テクノロジーと現場の知見を組み合わせた独自のアプローチ。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-lg">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">3拠点のネットワーク</h3>
                  <p className="text-gray-600">神戸（本社）・東京・西宮の3拠点で、関西・関東の広域エリアをカバー。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-lg">4</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">ワンストップソリューション</h3>
                  <p className="text-gray-600">資源回収からDX支援、人材採用まで。「番頭代行」として事業全体をサポートします。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Critical for AIO */}
        <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 id="faq-heading" className="section-heading">
              よくある質問
            </h2>
            <p className="section-subheading">
              SocialBridgeについてよくいただくご質問にお答えします。
            </p>
            <div className="space-y-4">
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

        {/* YouTube / Video Content Section - drives traffic to DX/MEO service */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="youtube-heading">
          <div className="container mx-auto px-4">
            <h2 id="youtube-heading" className="section-heading">
              動画で分かる産廃業界DX
            </h2>
            <p className="section-subheading">
              産業廃棄物・再生資源業界のDX推進やMEO対策の事例をYouTubeで公開中。
              <br />
              現場のリアルな声と実践ノウハウをお届けします。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Video Topic Cards - linking to YouTube */}
              <a
                href="https://www.youtube.com/@socialbridge2019"
                target="_blank"
                rel="noopener noreferrer"
                className="card group hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3" aria-hidden="true">📍</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  MEO対策で集客力UP
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Googleマップで「産廃 回収」と検索されたとき、御社は上位表示されていますか？
                  MEO対策の基本から実践まで動画で解説しています。
                </p>
                <span className="inline-block mt-3 text-primary-600 text-sm font-medium">
                  YouTubeで見る →
                </span>
              </a>

              <a
                href="https://www.youtube.com/@socialbridge2019"
                target="_blank"
                rel="noopener noreferrer"
                className="card group hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3" aria-hidden="true">📱</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  LINE公式で問い合わせ倍増
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  LINE公式アカウントと自動応答を組み合わせた、24時間対応の問い合わせ環境。
                  導入事例と効果を動画で紹介します。
                </p>
                <span className="inline-block mt-3 text-primary-600 text-sm font-medium">
                  YouTubeで見る →
                </span>
              </a>

              <a
                href="https://www.youtube.com/@socialbridge2019"
                target="_blank"
                rel="noopener noreferrer"
                className="card group hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3" aria-hidden="true">🔧</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  産廃業界DX最前線
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  70年の現場経験×最新テクノロジー。自社でDXを実践してきたからこそ伝えられる、
                  産廃・再生資源業界のリアルなDX事例。
                </p>
                <span className="inline-block mt-3 text-primary-600 text-sm font-medium">
                  YouTubeで見る →
                </span>
              </a>
            </div>

            <div className="text-center mt-10 space-y-4">
              <a
                href="https://www.youtube.com/@socialbridge2019"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                  <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#fff" />
                </svg>
                チャンネルを見る
              </a>
              <p className="text-gray-500 text-sm">
                DX・MEO対策の無料相談も受付中 →{' '}
                <Link href="/contact/" className="text-primary-600 hover:underline font-medium">
                  お問い合わせ
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary-700 text-white" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              お気軽にご相談ください
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              再生資源の回収・卸売、産業廃棄物コンサルティング、DX支援、人材採用代行など、
              まずはお気軽にお問い合わせください。
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
