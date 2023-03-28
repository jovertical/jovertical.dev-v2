import d from 'dayjs';
import Image from 'next/image';

import '@/app/globals.css';
import ColorSchemeToggleButton from '@/components/color-scheme-toggle-button';
import Link from '@/components/link';
import NavLink from '@/components/nav-link';
import ChevronDownIcon from '@/components/icons/chevron-down-icon';
import { ColorSchemeProvider } from '@/ctx/ColorSchemeContext';

export const metadata = {
  // prettier-ignore
  title: 'Jovert Palonpon - Software Engineer, Web Developer and React Native Developer',
  description: 'Everything about Jovert Palonpon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ColorSchemeProvider>
      <html lang="en" className="h-full antialiased">
        <body className="flex flex-col h-full bg-zinc-50 dark:bg-black">
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
            </div>
          </div>

          <div className="relative">
            <header className="relative z-50 flex flex-col pointer-events-none">
              <div className="top-0 z-10 h-16 pt-6">
                <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
                  <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                      <div className="max-w-2xl mx-auto lg:max-w-5xl">
                        <div className="relative flex gap-4">
                          <div className="flex flex-1">
                            <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                              <Link
                                aria-label="Home"
                                className="pointer-events-auto"
                                href="/"
                              >
                                <Image
                                  src="/logo.png"
                                  width={500}
                                  height={500}
                                  alt="Jovert Palonpon"
                                  className="object-cover rounded-full bg-zinc-100 dark:bg-zinc-800 h-9 w-9"
                                />
                              </Link>
                            </div>
                          </div>

                          <div className="flex justify-end flex-1 md:justify-center">
                            <div
                              className="pointer-events-auto md:hidden"
                              data-headlessui-state=""
                            >
                              <button
                                className="flex items-center px-4 py-2 text-sm font-medium rounded-full shadow-lg group bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                                type="button"
                                aria-expanded="false"
                                data-headlessui-state=""
                                id="headlessui-popover-button-:R2qb6:"
                              >
                                Menu
                                <ChevronDownIcon className="w-2 h-auto ml-3 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
                              </button>
                            </div>

                            <nav className="hidden pointer-events-auto md:block">
                              <ul className="flex px-3 text-sm font-medium rounded-full shadow-lg bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                                <li>
                                  <NavLink href="/about">About</NavLink>
                                </li>

                                <li>
                                  <NavLink href="/articles">Articles</NavLink>
                                </li>

                                <li>
                                  <NavLink href="/projects">Projects</NavLink>
                                </li>

                                <li>
                                  <NavLink href="/speaking">Speaking</NavLink>
                                </li>
                              </ul>
                            </nav>
                          </div>

                          <div className="flex justify-end md:flex-1">
                            <div className="pointer-events-auto">
                              <ColorSchemeToggleButton />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <main className="mt-16 sm:px-8 sm:mt-32">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="max-w-2xl mx-auto lg:max-w-5xl">
                    {children}
                  </div>
                </div>
              </div>
            </main>

            <footer className="mt-32">
              <div className="sm:px-8">
                <div className="mx-auto max-w-7xl lg:px-8">
                  <div className="pt-10 pb-16 border-t border-zinc-100 dark:border-zinc-700/40">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                      <div className="max-w-2xl mx-auto lg:max-w-5xl">
                        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                          <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                            <Link href="/about">About</Link>
                            <Link href="/projects">Projects</Link>
                            <Link href="/speaking">Speaking</Link>
                          </div>

                          <p className="text-sm text-zinc-400 dark:text-zinc-500">
                            © {d().year()} Jovert Palonpon. All rights reserved.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </ColorSchemeProvider>
  );
}
