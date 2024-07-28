import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="xl:relative">
      <div className="max-w-2xl mx-auto">
        {/* prettier-ignore */}
        <Link
          className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
          href="/"
          // href={searchParams.from === 'featured' ? '/' : '/articles'}
          // aria-label={searchParams.from === 'featured' ? 'Go home' : 'Go back to articles'}
        >
          <ArrowLeftIcon className="w-4 h-4 transition stroke-zinc-500 group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"></ArrowLeftIcon>
        </Link>

        {children}
      </div>
    </div>
  )
}
