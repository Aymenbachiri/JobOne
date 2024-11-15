import { getApprovedJobs } from "@/lib/helpers/getApprovedJobs";
import type { JobType } from "@/lib/types/jobType";
import type { MetadataRoute } from "next";

const staticRoutes = [
  { path: "", lastModified: "2024-11-15T10:54:00.000Z" },
  { path: "/jobs/new", lastModified: "2024-11-15T10:54:00.000Z" },
  { path: "/signin", lastModified: "2024-11-15T10:54:00.000Z" },
  { path: "/signup", lastModified: "2024-11-15T10:54:00.000Z" },
];

async function fetchjobIds(): Promise<{ id: string }[]> {
  const jobs: JobType[] = await getApprovedJobs();
  return jobs.map((job) => ({
    id: job.id,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = staticRoutes.map((route) => ({
    url: `https://jobone.vercel.app${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: "weekly" as const,
    priority: route.path === "" ? 1 : 0.8,
  }));

  const jobIds = await fetchjobIds();
  const jobRoutes = jobIds.map(({ id }) => ({
    url: `https://jobone.vercel.app/jobs/${id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routes, ...jobRoutes];
}
