import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Fiança Rápida',
  description: 'Plataforma de Parceiros Fiança Rápida',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
