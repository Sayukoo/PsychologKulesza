import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const revalidate = 86400; // regenerate once a day for export compatibility

// Image metadata
export const alt = 'Kacper Kulesza — psycholog, konsultacje decyzyjne online';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  const logoData = await fetch(
    new URL('../components/images/logo-og.png', import.meta.url)
  );
  const logoArrayBuffer = await logoData.arrayBuffer();
  const logoSrc = `data:image/png;base64,${arrayBufferToBase64(
    logoArrayBuffer
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#0F1923', // Deep Navy (brand primary)
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FAF8F2',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            marginBottom: '24px',
          }}
        >
          <img
            src={logoSrc}
            alt="Logo Kacper Kulesza"
            width={180}
            height={180}
            style={{
              borderRadius: '50%',
              background: '#FAF8F4',
              padding: '16px',
              boxShadow: '0 12px 50px rgba(201, 168, 92, 0.35)',
            }}
          />
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#FAF8F2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          Kacper Kulesza · psycholog
        </div>
        <div
          style={{
            fontSize: 40,
            color: '#C9A85C', // Warm Gold (brand accent)
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          Konsultacje decyzyjne online — pierwsze 15 minut bezpłatnie
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

function arrayBufferToBase64(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  let binary = '';

  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }

  return btoa(binary);
}
