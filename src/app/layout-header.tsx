import cx from 'classnames';
import Image from 'next/image';
import type { ComponentPropsWithoutRef } from 'react';

import ColorSchemeToggleButton from '@/app/color-scheme-toggle-button';
import NavLink from '@/app/nav-link';
import ChevronDownIcon from '@/components/icons/chevron-down-icon';
import Link from '@/components/link';

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
  );
}
