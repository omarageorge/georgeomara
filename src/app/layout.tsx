import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Omara George Boniface',
  description:
    'Software Engineer with 5+ years building scalable full-stack web apps and RESTful APIs. Skills: TypeScript, React, React Native, Next.js, Node.js, and Nest.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme='lofi' lang='en'>
      <body className={`${figtree.variable}  antialiased`}>{children}</body>
    </html>
  );
}
