import type { JobType } from "../types/jobType";
import { getAllJobs } from "./getAllJobs";

export async function getApprovedJobs(): Promise<JobType[]> {
  try {
    const jobs = await getAllJobs();

    return jobs.filter((job) => job.approved);
  } catch (error) {
    console.error("Error fetching approvedjobs:", error);
    throw error;
  }
}
