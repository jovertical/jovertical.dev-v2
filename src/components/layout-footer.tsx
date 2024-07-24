import d from 'dayjs'
import type { ComponentPropsWithoutRef } from 'react'

import Link from '@/components/link'
import ExternalLink from '@/components/external-link'

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

                  <div className="flex flex-col justify-center">
                    <div className="flex items-center">
                      <p className="text-sm font-light text-zinc-800 dark:text-zinc-200">
                        Built with{' '}
                      </p>

                      <div className="ml-1 text-sm text-zinc-800 dark:text-zinc-200">
                        <ExternalLink href="https://nextjs.org/">
                          Next.js
                        </ExternalLink>
                        {', '}
                        <ExternalLink href="https://tailwindcss.com/">
                          Tailwind CSS
                        </ExternalLink>{' '}
                        and{' '}
                        <ExternalLink href="https://vercel.com/">
                          Vercel 🚀
                        </ExternalLink>
                      </div>
                    </div>

                    <p className="mt-6 sm:mt-1 text-sm text-zinc-400 dark:text-zinc-500">
                      © {d().year()} Jovert Palonpon. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
