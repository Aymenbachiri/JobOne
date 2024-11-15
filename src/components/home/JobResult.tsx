import { MySuspense } from "@/lib/utils/MySuspense";
import { JobListItemFallback } from "./JobListItemFallback";
import { JobList } from "./JobList";
import type { JobFilterValues } from "@/lib/schema/jobFilterSchema";

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
