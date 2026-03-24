import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { generatePageMetadata } from '@/lib/metadata';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'プライバシーポリシー | SocialBridge株式会社',
  description: 'SocialBridge株式会社のプライバシーポリシー。個人情報の取り扱いについてご案内いたします。',
  path: '/privacy/',
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <Header locale="ja" />
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: 'プライバシーポリシー', href: '/privacy/' },
        ]}
      />

      <main id="main-content">
        <section className="bg-primary-700 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-black">プライバシーポリシー</h1>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl prose prose-gray">
            <article>
              <p>
                {COMPANY_INFO.name}（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、以下のとおりプライバシーポリシーを定め、適切な管理と保護に努めます。
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">1. 個人情報の収集について</h2>
              <p>
                当社は、サービスのご提供やお問い合わせへの対応のために必要な範囲で、適法かつ公正な手段により個人情報を収集いたします。
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">2. 個人情報の利用目的</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>お問い合わせへのご回答</li>
                <li>サービスのご提供・ご案内</li>
                <li>当社サービスの改善・開発</li>
                <li>法令に基づく対応</li>
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-4">3. 個人情報の第三者提供</h2>
              <p>
                当社は、法令に基づく場合を除き、お客様の同意を得ることなく第三者に個人情報を提供することはありません。
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">4. 個人情報の安全管理</h2>
              <p>
                当社は、個人情報の漏洩、滅失又は毀損の防止のため、適切な安全管理措置を講じます。
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">5. お問い合わせ</h2>
              <p>
                個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
              </p>
              <address className="not-italic mt-4">
                <p className="font-bold">{COMPANY_INFO.name}</p>
                <p>{COMPANY_INFO.offices.kobe.address}</p>
              </address>
            </article>
          </div>
        </section>
      </main>

      <Footer locale="ja" />
    </>
  );
}
