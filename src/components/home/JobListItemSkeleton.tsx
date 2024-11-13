export function JobListItemSkeleton() {
  return (
    <article className="flex gap-3 rounded-lg border p-5 animate-pulse">
      <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>

      <div className="flex-grow space-y-3">
        <div className="space-y-2">
          <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
          </div>
          <div className="flex items-center gap-1.5 sm:hidden">
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      <div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
        <div className="h-6 w-16 bg-gray-300 rounded"></div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
          <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
        </div>
      </div>
    </article>
  );
}
