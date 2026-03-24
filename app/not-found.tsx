import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ページが見つかりません | SocialBridge株式会社',
  description: 'お探しのページは見つかりませんでした。',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header locale="ja" />
      <main id="main-content" className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-primary-600 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">ページが見つかりません</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            お探しのページは存在しないか、移動された可能性があります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              ホームに戻る
            </Link>
            <Link href="/contact/" className="btn-secondary">
              お問い合わせ
            </Link>
          </div>
        </div>
      </main>
      <Footer locale="ja" />
    </>
  );
}
