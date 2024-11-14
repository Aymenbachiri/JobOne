import SingleJobPage from "@/components/pages/SingleJobPage";
import type { Metadata } from "next";
import { getJobById } from "./_lib/getJobById";
import { getApprovedJobs } from "@/lib/helpers/getApprovedJobs";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const job = await getJobById(id);
  return {
    title: job.title,
    description: job.description,
    openGraph: {
      title: job.title,
      description: job.description,
      images: [
        {
          url: job.companyLogoUrl
            ? job.companyLogoUrl
            : "/assets/images/company-logo-placeholder.webp",
          alt: job.companyName,
        },
      ],
    },
  };
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const jobs = await getApprovedJobs();
  if (!jobs) return notFound();
  return jobs.map((job) => ({ id: String(job.id) }));
}

export default function page({ params }: { params: Params }) {
  return <SingleJobPage params={params} />;
}
