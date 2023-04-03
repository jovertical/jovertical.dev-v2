export default function ExperienceTimelineSkeleton() {
  return (
    <div className="p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40">
      <div className="flex items-center">
        <div className="flex-none w-6 h-6 rounded-lg bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
        <div className="h-4 ml-3 rounded-sm w-9 bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
      </div>

      <div className="mt-6 space-y-4">
        {[...Array(5)].map((_, itemIdx) => (
          <div key={itemIdx} className="flex gap-4">
            <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>

            <div className="flex flex-wrap flex-auto gap-x-2">
              <div className="w-full">
                <div className="flex-none w-20 h-5 mb-1 rounded-sm bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
              </div>

              <span className="w-24 h-4 rounded-sm bg-zinc-200 dark:bg-zinc-700 animate-pulse"></span>
              <div className="w-16 h-4 ml-auto rounded-sm bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="inline-flex w-full mt-6 rounded-sm h-9 bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
    </div>
  );
}
