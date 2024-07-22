import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

import './globals.css';

import { getObjectByConfigValue } from '@/utils/config';

import { getConfigData } from '../lib/notion';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://linktion.mgkusumaputra.me'),
  title: 'Linktion - Linktree Built With Notion',
  description:
    'self-hosted, open-source link-in-bio website with Notion integration.',
  openGraph: {
    title: 'Linktion - Linktree Built With Notion',
    description:
      'self-hosted, open-source link-in-bio website with Notion integration.',
    url: 'https://linktion.mgkusumaputra.me',
    siteName: 'Linktion - Linktree Built With Notion',
    type: 'website',
  },
  twitter: {
    title: 'Linktion - Linktree Built With Notion',
    card: 'summary_large_image',
  },
};

async function fetchConfigData() {
  const res = getConfigData();
  return res;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const configContent = await fetchConfigData();
  const themeConfig = getObjectByConfigValue(configContent, 'Theme');

  return (
    <html lang='en' className={`theme-${themeConfig?.value}`}>
      <body
        className={`${plusJakartaSans.className} flex h-screen justify-center bg-gradient-to-br from-secondary to-primary`}
      >
        <main className='w-full max-w-screen-sm'>{children}</main>
      </body>
    </html>
  );
}
