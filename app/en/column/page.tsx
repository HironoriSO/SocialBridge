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
  title: 'Column | Social Bridge Inc.',
  description: 'Insights on circular economy, resource circulation, DX, and industry trends from Social Bridge Inc.',
  path: '/en/column/',
  locale: 'en',
});

const columns = [
  {
    slug: 'circular-economy-japan',
    title: 'Circular Economy in Japan and Social Bridge\'s Approaches',
    description: 'An exploration of what circular economy means, its current state in Japan, and how Social Bridge is putting resource circulation into practice.',
    date: '2024-08-15',
    category: 'Circular Economy',
  },
  {
    slug: 'metal-recycling',
    title: 'Our Journey to Resource Circulation Vol.2 — Metal Recycling',
    description: 'A look at our 70-year journey of metal scrap collection and recycling, aiming for a sustainable society.',
    date: '2024-06-01',
    category: 'Recycling',
  },
  {
    slug: 'waste-paper-recycling',
    title: 'Our Journey to Resource Circulation Vol.1 — Waste Paper Management',
    description: 'How Social Bridge, as a Kobe City registered operator, promotes sustainable resource circulation through waste paper collection.',
    date: '2024-04-15',
    category: 'Recycling',
  },
  {
    slug: 'how-culture-born-from-boom',
    title: 'How Culture Is Born from Boom',
    description: 'Reflecting on the relationship between technology adoption and cultural formation, from the iPhone\'s arrival in Japan in 2008 to the essence of digital transformation.',
    date: '2024-03-01',
    category: 'DX & Technology',
  },
];

export default function ColumnEnPage() {
  return (
    <>
      {columns.map((col) => (
        <JsonLd
          key={col.slug}
          data={generateArticleSchema({
            title: col.title,
            description: col.description,
            url: `${SITE_URL}/en/column/${col.slug}/`,
            datePublished: col.date,
            dateModified: col.date,
          })}
        />
      ))}

      <Header locale="en" />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/en/' },
          { label: 'Column', href: '/en/column/' },
        ]}
      />

      <main id="main-content">
        <section className="bg-primary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Column</h1>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              Insights on circular economy, sustainability, and digital transformation.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6">
              {columns.map((col) => (
                <article key={col.slug} className="card hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <time dateTime={col.date} className="text-sm text-gray-500 font-medium">
                      {new Date(col.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <span className="inline-block px-3 py-0.5 bg-accent-100 text-accent-700 rounded-full text-xs font-bold">
                      {col.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    <Link href={`/en/column/${col.slug}/`} className="hover:text-primary-600 transition-colors">
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

      <Footer locale="en" />
    </>
  );
}
