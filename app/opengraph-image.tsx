import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SocialBridge株式会社 - 再生資源卸売・産業廃棄物コンサルティング';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #1e3a8a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
          padding: '60px',
        }}
      >
        <div
          style={{
            fontSize: '80px',
            marginBottom: '20px',
          }}
        >
          🌉
        </div>
        <div
          style={{
            fontSize: '56px',
            fontWeight: 900,
            marginBottom: '16px',
            letterSpacing: '-1px',
          }}
        >
          SocialBridge
        </div>
        <div
          style={{
            fontSize: '28px',
            fontWeight: 500,
            opacity: 0.9,
            marginBottom: '32px',
          }}
        >
          SocialBridge株式会社
        </div>
        <div
          style={{
            fontSize: '22px',
            opacity: 0.8,
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.6,
          }}
        >
          テクノロジーの力で社会課題を解決する
        </div>
        <div
          style={{
            fontSize: '18px',
            opacity: 0.7,
            marginTop: '24px',
            display: 'flex',
            gap: '24px',
          }}
        >
          <span>再生資源卸売</span>
          <span>•</span>
          <span>産業廃棄物コンサルティング</span>
          <span>•</span>
          <span>DX支援</span>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '16px',
            opacity: 0.6,
          }}
        >
          social-bridge.net
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
