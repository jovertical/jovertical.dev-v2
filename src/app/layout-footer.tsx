import d from 'dayjs';
import type { ComponentPropsWithoutRef } from 'react';

import Link from '@/components/link';

export default function Footer(props: ComponentPropsWithoutRef<'footer'>) {
  return (
    <footer {...props}>
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
  );
}
