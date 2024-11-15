import { JobFilterValues } from "../schema/jobFilterSchema";
import type { JobType } from "../types/jobType";

export function filterJobs(jobs: JobType[], jobFilterValues: JobFilterValues) {
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
