import { MySuspense } from "@/lib/utils/MySuspense";
import { JobList } from "./JobList";
import type { JobFilterValues } from "@/lib/schema/jobFilterSchema";
import { JobListItemFallback } from "./JobListItemFallback";

type JobResultProps = {
  jobFilterValues: JobFilterValues;
  page?: number;
};

export function JobResult({ jobFilterValues, page }: JobResultProps) {
  return (
    <div className="space-y-4">
      <MySuspense fallback={<JobListItemFallback />}>
        <JobList jobFilterValues={jobFilterValues} page={page} />
      </MySuspense>
    </div>
  );
}
