"use client";

import { useState, useEffect } from "react";
import { JobListItem } from "./JobListItem"; // Ensure you have this component
import { getApprovedJobs } from "@/lib/helpers/getApprovedJobs";
import { filterJobs } from "@/lib/helpers/filterJobs";
import { JobType } from "@/lib/types/jobType";
import type { JobFilterValues } from "@/lib/schema/jobFilterSchema";
import { MyLink } from "../common/MyLink";
import { JobListItemFallback } from "./JobListItemFallback";
import { Pagination } from "./Pagination";

type JobListProps = {
  jobFilterValues: JobFilterValues;
  page?: number;
};

export function JobList({ jobFilterValues, page = 1 }: JobListProps) {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<JobType[]>([]);

  const JOBS_PER_PAGE = 4;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const approvedJobs = await getApprovedJobs();
      const filteredJobs = filterJobs(approvedJobs, jobFilterValues);
      setJobs(filteredJobs);
      setLoading(false);
    };

    fetchData();
  }, [jobFilterValues, page]);

  if (loading) {
    return <JobListItemFallback />;
  }

  const filteredJobs = jobs;
  const totalResults = filteredJobs.length;
  const totalPages = Math.ceil(totalResults / JOBS_PER_PAGE);
  const startIndex = (page - 1) * JOBS_PER_PAGE;
  const paginatedJobs = filteredJobs.slice(
    startIndex,
    startIndex + JOBS_PER_PAGE
  );

  return (
    <>
      {paginatedJobs.map((job) => (
        <MyLink href={`/jobs/${job.id}`} key={job.id} className="block">
          <JobListItem job={job} />
        </MyLink>
      ))}

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
