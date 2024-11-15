import JobFilterSidebar from "../home/JobFilterSidebar";
import type { JobFilterValues } from "@/lib/schema/jobFilterSchema";
import { JobResult } from "../home/JobResult";
import { getTitle } from "@/lib/utils/utils";
import { MySuspense } from "@/lib/utils/MySuspense";
import { JobListItemFallback } from "../home/JobListItemFallback";

type HomePageProps = {
  jobFilterValues: JobFilterValues;
  page?: number;
};

export default function HomePage({ jobFilterValues, page }: HomePageProps) {
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <section className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {getTitle(jobFilterValues)}
        </h1>
        <p className="text-muted-foreground">Find your dream job.</p>
      </section>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar defaultValues={jobFilterValues} />
        <MySuspense fallback={<JobListItemFallback />}>
          <JobResult jobFilterValues={jobFilterValues} page={page} />
        </MySuspense>
      </section>
    </main>
  );
}
