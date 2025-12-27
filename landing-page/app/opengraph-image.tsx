import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const revalidate = 86400; // regenerate once a day for export compatibility

// Image metadata
export const alt = 'Kacper Kulesza - Twój Partner w Rozwoju';
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
          fontSize: 128,
          background: '#0f4c5c', // Deep Teal/Petrol (from theme)
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                marginBottom: '20px',
            }}
        >
            <span style={{ fontWeight: 'bold' }}>Kacper Kulesza</span>
        </div>
        <div
            style={{
                fontSize: 48,
                color: '#d97706', // Muted Gold/Amber (from theme)
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            Konsultacje rozwojowe & Trening mentalny
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
