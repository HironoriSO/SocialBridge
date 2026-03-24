import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Social Bridge Inc. - Recycled Resource Wholesale & Consulting';
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
        <div style={{ fontSize: '80px', marginBottom: '20px' }}>🌉</div>
        <div
          style={{
            fontSize: '56px',
            fontWeight: 900,
            marginBottom: '16px',
            letterSpacing: '-1px',
          }}
        >
          Social Bridge Inc.
        </div>
        <div
          style={{
            fontSize: '22px',
            opacity: 0.8,
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.6,
            marginTop: '16px',
          }}
        >
          Solving Social Issues Through Technology
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
          <span>Recycled Resources</span>
          <span>•</span>
          <span>Waste Consulting</span>
          <span>•</span>
          <span>DX Support</span>
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
