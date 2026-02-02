import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'BioGen - Crie sua bio perfeita em segundos';
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
          background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            left: '-50px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          {/* Emoji */}
          <div style={{ fontSize: '72px', marginBottom: '16px' }}>
            ✨
          </div>
          
          {/* Title */}
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #a855f7 0%, #ec4899 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '16px',
            }}
          >
            BioGen
          </div>
          
          {/* Subtitle */}
          <div
            style={{
              fontSize: '28px',
              color: '#e5e7eb',
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Crie sua bio perfeita em segundos
          </div>
          
          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              fontSize: '20px',
              color: '#9ca3af',
            }}
          >
            <span>📸 Instagram</span>
            <span>💼 LinkedIn</span>
            <span>🐦 Twitter</span>
            <span>❤️ Tinder</span>
          </div>
          
          {/* URL */}
          <div
            style={{
              fontSize: '20px',
              color: '#6b7280',
              marginTop: '32px',
            }}
          >
            biogen.autonomousclara.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
