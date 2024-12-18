import { getUnApprovedJobs } from "@/app/admin/_lib/getUnAprrovedJobs";
import { MyLink } from "../common/MyLink";
import { JobListItem } from "../home/JobListItem";

export default async function AdminPage() {
  const unapprovedJobs = await getUnApprovedJobs();

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <h1 className="text-center">Admin Dashboard</h1>
      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">Unapproved jobs:</h2>
        {unapprovedJobs.map((job) => (
          <MyLink key={job.id} href={`/admin/jobs/${job.id}`} className="block">
            <JobListItem job={job} />
          </MyLink>
        ))}
        {unapprovedJobs.length === 0 && (
          <p className="text-muted-foreground h-[50vh]">No unapproved jobs</p>
        )}
      </section>
    </main>
  );
}
