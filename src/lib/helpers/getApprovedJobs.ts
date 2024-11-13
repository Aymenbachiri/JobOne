import { apiUrl } from "@/components/common/constants";

export type JobType = {
  id: number;
  slug: string;
  title: string;
  type: string;
  locationType: string;
  location: string;
  description: string;
  salary: number;
  companyName: string;
  applicationEmail?: string;
  applicationUrl?: string;
  companyLogoUrl?: string;
  approved: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export async function getApprovedJobs(): Promise<JobType[]> {
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
