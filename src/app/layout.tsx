import type { ComponentPropsWithoutRef } from 'react'
import { cookies } from 'next/headers'
import cx from 'classnames'

import '@/app/code.css'
import '@/app/globals.css'
import GoogleAnalyticsTracker from '@/components/google-analytics-tracker'
import LayoutFooter from '@/components/layout-footer'
import LayoutHeader from '@/components/layout-header'

export default async function RootLayout({
  children,
}: ComponentPropsWithoutRef<'html'>) {
  const scheme = cookies().get('scheme')?.value ?? 'light'

  return (
    <html
      lang="en"
      className={cx('h-full antialiased', { dark: scheme === 'dark' })}
    >
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
  )
}
