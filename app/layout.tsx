import type { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';
import './globals.css';

export const metadata: Metadata = {
  title: siteConfig.server.name,
  description: siteConfig.server.description,
  authors: [{ name: siteConfig.server.author }],
  themeColor: '#DC6112',
  icons: {
    icon: '/images/favicon.ico',
  },
  openGraph: {
    siteName: siteConfig.server.name,
    type: 'website',
    description: siteConfig.server.description,
    url: siteConfig.server.website,
    images: [
      {
        url: `${siteConfig.server.website}/images/logo.png`,
      },
    ],
  },
  twitter: {
    title: siteConfig.server.name,
    description: siteConfig.server.description,
  },
};

import DisableInteractions from '@/components/DisableInteractions';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/cards.css" />
        <link rel="stylesheet" href="/css/fontawesome.css" />
        <link rel="stylesheet" href="/css/materialdesignicons.css" />
      </head>
      <body className="slimecube-body">
        <DisableInteractions />
        <div id="slimecube-app" className="flex flex-col min-h-full">
          {children}
        </div>
        <script src="/js/clipboard.js"></script>
        <script src="/js/axios.js"></script>
        <script src="/js/script.js"></script>
        <script src="/js/cards.js"></script>
        <script src="/js/fontawesome.js"></script>
        <script src="/js/alpine.js"></script>
        <script src="/js/jquery.js"></script>
      </body>
    </html>
  );
}
