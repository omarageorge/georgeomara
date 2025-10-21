import '@/app/globals.css';
import Drawer from '@/components/drawer/drawer';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import Script from 'next/script';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Omara George Boniface',
  keywords:
    'Omara George Boniface, Software Engineer, Full-Stack Developer, Web Apps, RESTful APIs, TypeScript, React, React Native, Next.js, Node.js, Nest.js',
  description:
    'Software Engineer with 5+ years building scalable full-stack web apps and RESTful APIs. Skills: TypeScript, React, React Native, Next.js, Node.js, and Nest.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme='custom' lang='en'>
      <head>
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-GRBBCQRTBK'
        />
        <Script id='google-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GRBBCQRTBK');
          `}
        </Script>
      </head>
      <body className={`${figtree.variable}  antialiased`}>
        <Drawer>{children}</Drawer>
      </body>
    </html>
  );
}
