import Link from 'next/link';
import { JsonLd } from './JsonLd';
import { generateBreadcrumbSchema } from '@/lib/jsonld';
import { SITE_URL } from '@/lib/constants';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: `${SITE_URL}${item.href}`,
  }));

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(schemaItems)} />
      <nav aria-label="パンくずリスト" className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-gray-400">
                    /
                  </span>
                )}
                {index === items.length - 1 ? (
                  <span aria-current="page" className="text-gray-900 font-medium">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-primary-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
