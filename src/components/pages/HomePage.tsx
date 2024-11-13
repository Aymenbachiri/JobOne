import { JobListItemFallback } from "../home/JobListItemFallback";
import { JobList } from "../home/JobList";
import { MySuspense } from "@/lib/utils/MySuspense";

export default function HomePage() {
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <section className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Developer jobs
        </h1>
        <p className="text-muted-foreground">Find your dream job.</p>
      </section>
      <section className="space-y-4">
        <MySuspense fallback={<JobListItemFallback />}>
          <JobList />
        </MySuspense>
      </section>
    </main>
  );
}
