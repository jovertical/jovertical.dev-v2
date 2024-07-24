export default function ListSkeleton() {
  return (
    <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(5)].map((_, itemIdx) => (
        <li key={itemIdx} className="relative flex flex-col items-start group">
          <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
          <div className="w-32 h-5 mt-6 rounded-sm bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
          <div className="w-full h-4 mt-2 rounded-sm sm:w-64 bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
          <div className="w-[90%] sm:w-56 h-4 mt-1.5 rounded-sm bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
          <div className="w-40 h-5 mt-6 rounded-sm bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
        </li>
      ))}
    </ul>
  )
}
