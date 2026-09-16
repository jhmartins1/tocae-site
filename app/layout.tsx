import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tocaê | Escola de Música',
  description: 'Aulas particulares de música no conforto da sua casa.',
  icons: {
    icon: { url: '/favicon.png', type: 'image/png', sizes: '512x512' },
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
