'use client;';

import Script from 'next/script';

export default function GoogleAnalyticsTracker() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_GA_ID}`}
      />

      <Script id="ga-tag-jovertical.dev" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_GA_ID}', {
            page_path: window.location.pathname,
          });
      `}
      </Script>
    </>
  );
}
