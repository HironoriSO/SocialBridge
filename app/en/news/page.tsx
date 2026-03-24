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
  title: 'News | Social Bridge Inc.',
  description: 'Latest news and updates from Social Bridge Inc. Startup ecosystem participation, events, and business development.',
  path: '/en/news/',
  locale: 'en',
});

const newsItems = [
  {
    slug: 'takeoff-tokyo-2026',
    title: 'SocialBridge Joins Takeoff Tokyo 2026 as a Community Partner',
    description: 'Social Bridge Inc. will participate as a Community Partner at Takeoff Tokyo 2026, held at Tokyo Big Sight on March 31 - April 1, 2026.',
    date: '2026-02-15',
    category: 'Event',
  },
  {
    slug: 'hyogo-kobe-startup-consortium',
    title: 'SocialBridge Joins Hyogo Kobe Start-up Ecosystem Consortium',
    description: 'Social Bridge Inc. has joined the Hyogo Kobe Start-up Ecosystem Consortium as a supporting organization, assisting global start-ups in their expansion into Japan.',
    date: '2024-09-17',
    category: 'Press Release',
  },
  {
    slug: 'metal-recycling-initiatives',
    title: 'Our Journey to Resource Circulation Vol.2 — Metal Recycling Initiatives',
    description: 'Exploring our 70-year journey of metal scrap collection and recycling, from our founding in 1953 in Kobe.',
    date: '2024-06-01',
    category: 'Column',
  },
];

export default function NewsEnPage() {
  return (
    <>
      {newsItems.map((item) => (
        <JsonLd
          key={item.slug}
          data={generateArticleSchema({
            title: item.title,
            description: item.description,
            url: `${SITE_URL}/en/news/${item.slug}/`,
            datePublished: item.date,
            dateModified: item.date,
          })}
        />
      ))}

      <Header locale="en" />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/en/' },
          { label: 'News', href: '/en/news/' },
        ]}
      />

      <main id="main-content">
        <section className="bg-primary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">News</h1>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              Latest news, press releases, and updates from Social Bridge.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6">
              {newsItems.map((item) => (
                <article key={item.slug} className="card hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <time dateTime={item.date} className="text-sm text-gray-500 font-medium">
                      {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <span className="inline-block px-3 py-0.5 bg-primary-100 text-primary-700 rounded-full text-xs font-bold">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    <Link href={`/en/news/${item.slug}/`} className="hover:text-primary-600 transition-colors">
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

      <Footer locale="en" />
    </>
  );
}
