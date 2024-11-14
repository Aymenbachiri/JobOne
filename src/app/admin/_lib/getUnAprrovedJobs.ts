import { getAllJobs } from "@/lib/helpers/getAllJobs";

export async function getUnApprovedJobs() {
  try {
    const jobs = await getAllJobs();

    return jobs.filter((job) => job.approved === false);
  } catch (error) {
    console.error("Error fetching approvedjobs:", error);
    throw error;
  }
}
