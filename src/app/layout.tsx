import '@/app/globals.css';
import LayoutHeader from '@/app/layout-header';
import LayoutFooter from '@/app/layout-footer';
import GoogleAnalyticsTracker from '@/components/google-analytics-tracker';
import { ColorSchemeProvider } from '@/ctx/ColorSchemeContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ColorSchemeProvider>
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
    </ColorSchemeProvider>
  );
}
