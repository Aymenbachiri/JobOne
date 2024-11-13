import { JobListItemSkeleton } from "./JobListItemSkeleton";

export function JobListItemFallback() {
  return (
    <>
      <JobListItemSkeleton />
      <JobListItemSkeleton />
      <JobListItemSkeleton />
      <JobListItemSkeleton />
      <JobListItemSkeleton />
      <JobListItemSkeleton />
      <JobListItemSkeleton />
    </>
  );
}
