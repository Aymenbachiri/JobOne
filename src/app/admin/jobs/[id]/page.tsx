import { JobPage } from "@/app/jobs/[id]/_components/JobPage";
import { getJobById } from "@/app/jobs/[id]/_lib/getJobById";
import { notFound } from "next/navigation";
import { AdminSidebar } from "../../_components/AdminSidebar";

type Params = Promise<{ id: string }>;

export default async function page({ params }: { params: Params }) {
  const { id } = await params;
  const job = await getJobById(id);
  if (!job) notFound();

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobPage job={job} />
      <AdminSidebar job={job} />
    </main>
  );
}
