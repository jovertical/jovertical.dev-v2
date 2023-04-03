'use client';

import { Popover } from '@headlessui/react';
import type { PopoverProps } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import cx from 'classnames';
import Link from 'next/link';

interface Props extends Omit<PopoverProps<'div'>, 'className'> {
  className?: string;
  links?: { href: string; label: string }[];
}

export default function LayoutHeaderMobileMenu({
  links = [],
  className,
}: Props) {
  return (
    <Popover className={cx('pointer-events-auto md:hidden', className)}>
      <Popover.Button
        className="flex items-center px-4 py-2 text-sm font-medium rounded-full shadow-lg group bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
        type="button"
      >
        Menu
        <ChevronDownIcon
          viewBox="0 0 16 16"
          className="w-2.5 h-auto ml-3 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
        />
      </Popover.Button>

      <Popover.Overlay className="fixed inset-0 z-50 opacity-100 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />

      <Popover.Panel className="fixed z-50 p-8 origin-top scale-100 bg-white opacity-100 inset-x-4 top-8 rounded-3xl ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800">
        <div className="flex flex-row-reverse items-center justify-between">
          <Popover.Button className="p-1 -m-1">
            <XMarkIcon className="w-6 h-6 text-zinc-500 dark:text-zinc-400"></XMarkIcon>
          </Popover.Button>

          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
        </div>

        <nav className="mt-6">
          <ul className="-my-2 text-base divide-y divide-zinc-100 text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            {links.map((link, linkIdx) => (
              <li key={`${link.href}-${linkIdx}`}>
                <Popover.Button
                  className="block py-2.5"
                  as={Link}
                  href={link.href}
                >
                  {link.label}
                </Popover.Button>
              </li>
            ))}
          </ul>
        </nav>
      </Popover.Panel>
    </Popover>
  );
}
