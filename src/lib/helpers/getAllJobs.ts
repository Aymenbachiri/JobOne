import { apiUrl } from "@/components/common/constants";
import type { JobType } from "../types/jobType";

export async function getAllJobs(): Promise<JobType[]> {
  try {
    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch jobs: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
}
