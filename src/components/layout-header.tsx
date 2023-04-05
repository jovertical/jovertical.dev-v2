import cx from 'classnames';
import Image from 'next/image';
import type { ComponentPropsWithoutRef } from 'react';

import ColorSchemeToggleButton from '@/components/color-scheme-toggle-button';
import LayoutHeaderMobileMenu from '@/components/layout-header-mobile-menu';
import Link from '@/components/link';
import NavLink from '@/components/nav-link';

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/articles', label: 'Articles' },
  { href: '/projects', label: 'Projects' },
  { href: '/speaking', label: 'Speaking' },
];

export default function Header({
  className = '',
  ...props
}: ComponentPropsWithoutRef<'header'>) {
  return (
    <header
      {...props}
      className={cx(
        'relative z-50 flex flex-col pointer-events-none',
        className
      )}
    >
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
                    <LayoutHeaderMobileMenu
                      links={LINKS}
                    ></LayoutHeaderMobileMenu>

                    <nav className="hidden pointer-events-auto md:block">
                      <ul className="flex px-3 text-sm font-medium rounded-full shadow-lg bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        {LINKS.map((link) => (
                          <li key={`nav-link-to-${link.href}`}>
                            <NavLink href={link.href}>{link.label}</NavLink>
                          </li>
                        ))}
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
  );
}
