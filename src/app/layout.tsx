import type { Metadata } from 'next';
import type { ComponentPropsWithoutRef } from 'react';

import '@/app/globals.css';
import GoogleAnalyticsTracker from '@/components/google-analytics-tracker';
import LayoutHeader from '@/components/layout-header';
import LayoutFooter from '@/components/layout-footer';

export const metadata: Metadata = {
  title: 'Jovert Palonpon - Software engineer, web developer',
  description: `Hi, I'm Jovert, a software engineer based in Manila, Philippines. I'm passionate about building web applications and learning new technologies. I love to travel as well, exploring the beauty of nature and experiencing different cultures.`,
  alternates: {
    canonical: 'https://jovertical.dev/articles',
    types: {
      'application/rss+xml': [
        {
          url: 'https://rss.beehiiv.com/feeds/6LIt6WZQMo.xml',
          title: 'jovertical.dev - all articles',
        },
      ],
    },
  },
};

export default function RootLayout({
  children,
}: ComponentPropsWithoutRef<'html'>) {
  return (
    <html lang="en" className="h-full antialiased">
      <GoogleAnalyticsTracker></GoogleAnalyticsTracker>

      <body className="flex flex-col h-full bg-zinc-50 dark:bg-black">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
          </div>
        </div>

        <div className="relative">
          <LayoutHeader />

          <main>{children}</main>

          <LayoutFooter className="mt-32" />
        </div>
      </body>
    </html>
  );
}
