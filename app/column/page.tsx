import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { JsonLd } from '@/components/JsonLd';
import { generateArticleSchema } from '@/lib/jsonld';
import { generatePageMetadata } from '@/lib/metadata';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'コラム | SocialBridge株式会社',
  description:
    'SocialBridge株式会社のコラム。サーキュラーエコノミー、資源循環、DX、産業廃棄物業界の最新トレンドなどについての記事をお届けします。',
  path: '/column/',
  keywords: [
    'コラム',
    'ブログ',
    'サーキュラーエコノミー',
    '資源循環',
    'DX',
    'リサイクル',
    '産業廃棄物',
  ],
});

const columns = [
  {
    slug: 'circular-economy-japan',
    title: '日本におけるサーキュラーエコノミーとSocialBridgeのアプローチ',
    description:
      'サーキュラーエコノミー（循環型経済）とは何か。日本での現状とSocialBridgeが取り組む資源循環の実践例を解説します。',
    date: '2024-08-15',
    category: 'サーキュラーエコノミー',
    readTime: '5分',
  },
  {
    slug: 'metal-recycling',
    title: '資源循環への取り組み Vol.2 ～金属リサイクルの現状と未来～',
    description:
      '1953年の創業から70年。金属スクラップの回収・リサイクル事業を通じて、持続可能な社会の実現を目指す取り組みを紹介します。',
    date: '2024-06-01',
    category: 'リサイクル',
    readTime: '7分',
  },
  {
    slug: 'waste-paper-recycling',
    title: '資源循環への取り組み Vol.1 ～古紙管理で実現する持続可能な社会～',
    description:
      '神戸市の登録事業者として古紙回収に取り組むSocialBridge。地域密着型の資源循環事業の実践を詳しくご紹介。',
    date: '2024-04-15',
    category: 'リサイクル',
    readTime: '6分',
  },
  {
    slug: 'how-culture-born-from-boom',
    title: 'ブームから文化はどう生まれるか',
    description:
      '2008年のiPhone日本上陸から振り返る、テクノロジーの普及と文化形成の関係。ビジネスにおけるデジタル変革の本質を考えます。',
    date: '2024-03-01',
    category: 'DX・テクノロジー',
    readTime: '4分',
  },
  {
    slug: 'dx-recycling-industry',
    title: '再生資源業界のDX ～なぜ今デジタルトランスフォーメーションが必要なのか～',
    description:
      '再生資源・産業廃棄物業界が直面するデジタル化の課題と、SocialBridgeが自社のDX経験から見出したソリューションを解説。',
    date: '2024-01-20',
    category: 'DX・テクノロジー',
    readTime: '8分',
  },
];

export default function ColumnPage() {
  return (
    <>
      {columns.map((col) => (
        <JsonLd
          key={col.slug}
          data={generateArticleSchema({
            title: col.title,
            description: col.description,
            url: `${SITE_URL}/column/${col.slug}/`,
            datePublished: col.date,
            dateModified: col.date,
          })}
        />
      ))}

      <Header locale="ja" />
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: 'コラム', href: '/column/' },
        ]}
      />

      <main id="main-content">
        <section className="bg-primary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">コラム</h1>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              サーキュラーエコノミー、資源循環、DXなど、業界の最新トレンドや知見をお届けします。
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24" aria-labelledby="column-list-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="column-list-heading" className="sr-only">コラム一覧</h2>
            <div className="space-y-6">
              {columns.map((col) => (
                <article key={col.slug} className="card hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <time dateTime={col.date} className="text-sm text-gray-500 font-medium">
                      {new Date(col.date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="inline-block px-3 py-0.5 bg-accent-100 text-accent-700 rounded-full text-xs font-bold">
                      {col.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      読了時間: {col.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    <Link href={`/column/${col.slug}/`} className="hover:text-primary-600 transition-colors">
                      {col.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{col.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer locale="ja" />
    </>
  );
}
