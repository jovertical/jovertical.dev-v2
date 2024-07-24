export default function FeaturedArticleListSkeleton() {
  return (
    <div className="flex flex-col gap-16">
      {[...Array(2)].map((_, itemIdx) => (
        <div key={itemIdx} className="relative flex flex-col items-start group">
          <div className="relative flex flex-col items-start w-full md:col-span-3 group">
            <div className="block w-24 h-5 rounded-sm sm:hidden bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>

            <div className="w-[320px] md:w-[460px] h-5 mt-4 sm:mt-0 rounded-sm bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>

            <div className="mt-4 space-y-1.5 w-full">
              <div className="w-11/12 sm:w-[540px] h-4 rounded-sm bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
              <div className="w-11/12 sm:w-[480px] h-4 rounded-sm bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
              <div className="w-full sm:w-[420px] h-4 rounded-sm bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
              <div className="w-10/12 h-4 rounded-sm sm:hidden bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
              <div className="w-8/12 h-4 rounded-sm sm:hidden bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
            </div>

            <div className="mt-3.5">
              <div className="w-24 h-5 rounded-sm bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
            </div>
          </div>

          <div className="order-first hidden mt-1 mb-3 md:block">
            <div className="w-24 h-4 rounded-sm bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
