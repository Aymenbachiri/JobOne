import { getApprovedJobs } from "@/lib/helpers/getApprovedJobs";
import { JobListItem } from "../home/JobListItem";

export default async function HomePage() {
  const jobs = await getApprovedJobs();

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <section className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Developer jobs
        </h1>
        <p className="text-muted-foreground">Find your dream job.</p>
      </section>
      <section className="space-y-4">
        {jobs.map((job) => (
          <JobListItem job={job} key={job.id} />
        ))}
      </section>
    </main>
  );
}
