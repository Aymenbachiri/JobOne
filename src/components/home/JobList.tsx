import { getApprovedJobs } from "@/lib/helpers/getApprovedJobs";
import { JobListItem } from "./JobListItem";
import type { JobFilterValues } from "@/lib/schema/jobFilterSchema";
import type { JobType } from "@/lib/types/jobType";

type JobListProps = {
  jobFilterValues: JobFilterValues;
};

function filterJobs(jobs: JobType[], jobFilterValues: JobFilterValues) {
  const { q, type, location, remote } = jobFilterValues;
  const searchString = q
    ? q
        .split(" ")
        .filter((word) => word.length > 0)
        .join(" ")
    : "";

  return jobs.filter((job) => {
    const matchesSearch = searchString
      ? (
          ["title", "companyName", "type", "locationType", "location"] as Array<
            keyof JobType
          >
        ).some((field) =>
          job[field]
            ?.toString()
            .toLowerCase()
            .includes(searchString.toLowerCase())
        )
      : true;

    const matchesType = type ? job.type === type : true;
    const matchesLocation = location ? job.location === location : true;
    const matchesRemote = remote ? job.locationType === "Remote" : true;

    const isApproved = job.approved === true;

    return (
      matchesSearch &&
      matchesType &&
      matchesLocation &&
      matchesRemote &&
      isApproved
    );
  });
}

export async function JobList({ jobFilterValues }: JobListProps) {
  const approvedJobs = await getApprovedJobs();
  const jobs = filterJobs(approvedJobs, jobFilterValues);

  return (
    <>
      {jobs.map((job) => (
        <JobListItem job={job} key={job.id} />
      ))}
      {jobs.length === 0 && (
        <p className="m-auto text-center">
          No jobs found. Try adjusting your search filters.
        </p>
      )}
    </>
  );
}
