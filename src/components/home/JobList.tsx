import { getApprovedJobs } from "@/lib/helpers/getApprovedJobs";
import { JobListItem } from "./JobListItem";
import type { JobFilterValues } from "@/lib/schema/jobFilterSchema";
import { MyLink } from "../common/MyLink";
import { filterJobs } from "@/lib/helpers/filterJobs";
import { Pagination } from "./Pagination";
import { MySuspense } from "@/lib/utils/MySuspense";
import { JobListItemFallback } from "./JobListItemFallback";

type JobListProps = {
  jobFilterValues: JobFilterValues;
  page?: number;
};

const JOBS_PER_PAGE = 4;

export async function JobList({ jobFilterValues, page = 1 }: JobListProps) {
  const approvedJobs = await getApprovedJobs();
  const filteredJobs = filterJobs(approvedJobs, jobFilterValues);

  const totalResults = filteredJobs.length;
  const totalPages = Math.ceil(totalResults / JOBS_PER_PAGE);
  const startIndex = (page - 1) * JOBS_PER_PAGE;
  const paginatedJobs = filteredJobs.slice(
    startIndex,
    startIndex + JOBS_PER_PAGE
  );

  return (
    <>
      <MySuspense fallback={<JobListItemFallback />}>
        {paginatedJobs.map((job) => (
          <MyLink href={`/jobs/${job.id}`} key={job.id} className="block">
            <JobListItem job={job} />
          </MyLink>
        ))}
      </MySuspense>
      {paginatedJobs.length === 0 && (
        <p className="m-auto text-center">
          No jobs found. Try adjusting your search filters.
        </p>
      )}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        jobFilterValues={jobFilterValues}
      />
    </>
  );
}
