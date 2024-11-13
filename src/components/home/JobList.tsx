import { getApprovedJobs } from "@/lib/helpers/getApprovedJobs";
import { JobListItem } from "./JobListItem";

export async function JobList() {
  const jobs = await getApprovedJobs();

  return (
    <>
      {jobs.map((job) => (
        <JobListItem job={job} key={job.id} />
      ))}
    </>
  );
}
