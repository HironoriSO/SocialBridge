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
  title: 'ニュース・お知らせ | SocialBridge株式会社',
  description:
    'SocialBridge株式会社の最新ニュース・お知らせ。スタートアップエコシステム参画、イベント出展、事業開発などの最新情報をお届けします。',
  path: '/news/',
  keywords: ['ニュース', 'お知らせ', 'プレスリリース', 'イベント'],
});

const newsItems = [
  {
    slug: 'takeoff-tokyo-2026',
    title: 'Takeoff Tokyo 2026にコミュニティパートナーとして参加',
    description:
      'SocialBridge株式会社は、2026年3月31日〜4月1日に東京ビッグサイトで開催される「Takeoff Tokyo 2026」にコミュニティパートナーとして参加いたします。',
    date: '2026-02-15',
    category: 'イベント',
  },
  {
    slug: 'hyogo-kobe-startup-consortium',
    title: '「兵庫神戸スタートアップエコシステムコンソーシアム」にサポート組織として参画',
    description:
      'SocialBridge株式会社は、「兵庫神戸スタートアップエコシステムコンソーシアム」にサポート組織として参画いたしました。グローバルスタートアップの日本進出を支援してまいります。',
    date: '2024-09-17',
    category: 'プレスリリース',
  },
  {
    slug: 'metal-recycling-initiatives',
    title: '資源循環への取り組み Vol.2 ～金属リサイクルの取り組み～',
    description:
      '1953年の創業から約70年、神戸市を中心に金属スクラップの回収・リサイクル事業を展開してきた取り組みを紹介します。',
    date: '2024-06-01',
    category: 'コラム',
  },
  {
    slug: 'waste-paper-management',
    title: '資源循環への取り組み Vol.1 ～古紙管理の取り組み～',
    description:
      '神戸市の登録事業者として、古紙・金属スクラップ・産業廃棄物の回収を通じた資源循環を加速する取り組みをご紹介します。',
    date: '2024-04-15',
    category: 'コラム',
  },
];

export default function NewsPage() {
  return (
    <>
      {newsItems.map((item) => (
        <JsonLd
          key={item.slug}
          data={generateArticleSchema({
            title: item.title,
            description: item.description,
            url: `${SITE_URL}/news/${item.slug}/`,
            datePublished: item.date,
            dateModified: item.date,
          })}
        />
      ))}

      <Header locale="ja" />
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: 'ニュース', href: '/news/' },
        ]}
      />

      <main id="main-content">
        <section className="bg-primary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">ニュース・お知らせ</h1>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              SocialBridgeの最新ニュース、プレスリリース、イベント情報をお届けします。
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24" aria-labelledby="news-list-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="news-list-heading" className="sr-only">ニュース一覧</h2>
            <div className="space-y-6">
              {newsItems.map((item) => (
                <article key={item.slug} className="card hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <time dateTime={item.date} className="text-sm text-gray-500 font-medium">
                      {new Date(item.date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="inline-block px-3 py-0.5 bg-primary-100 text-primary-700 rounded-full text-xs font-bold">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    <Link href={`/news/${item.slug}/`} className="hover:text-primary-600 transition-colors">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
