import type { JobType } from "@/lib/types/jobType";

export async function getJobById(id: string): Promise<JobType> {
  try {
    const res = await fetch(
      `https://jobboardbackend.up.railway.app/api/jobs/${id}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch jobs: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
}
