import { JobListItemSkeleton } from "./JobListItemSkeleton";

export function JobListItemFallback() {
  return (
    <div className="grid grid-cols-1 gap-4 w-full">
      <JobListItemSkeleton />
      <JobListItemSkeleton />
      <JobListItemSkeleton />
      <JobListItemSkeleton />
    </div>
  );
}
