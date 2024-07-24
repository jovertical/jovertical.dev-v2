export default function ContentSkeleton() {
  return (
    <div>
      <div className="flex flex-col">
        <div>
          <div className="w-4/5 h-10 text-4xl rounded-sm mt-7 bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
          <div className="w-5/6 h-10 mt-3.5 text-4xl rounded-sm bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
        </div>

        <div className="flex items-center order-first">
          <div className="h-5 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></div>
          <div className="w-24 h-5 ml-3 rounded-sm bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
        </div>
      </div>

      <div className="w-full mt-8 space-y-10 sm:space-y-12 sm:mt-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-full space-y-3">
            <div className="w-full h-5 rounded-sm sm:w-4/5 bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
            <div className="w-full h-5 rounded-sm sm:w-4/5 bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
            <div className="w-full h-5 rounded-sm sm:w-3/4 bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
            <div className="w-[95%] h-5 rounded-sm sm:w-3/4 bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
            <div className="w-[95%] sm:w-[70%] h-5 rounded-sm bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
            <div className="w-[90%] sm:w-[70%] h-5 rounded-sm bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
