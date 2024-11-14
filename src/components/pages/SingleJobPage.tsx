import { JobPage } from "@/app/jobs/[id]/_components/JobPage";
import { getJobById } from "@/app/jobs/[id]/_lib/getJobById";

type Params = Promise<{ id: string }>;

export default async function SingleJobPage({ params }: { params: Params }) {
  const { id } = await params;
  const job = await getJobById(id);

  const { applicationEmail, applicationUrl } = job;
  const applicationLink = applicationEmail
    ? `mailto:${applicationEmail}`
    : applicationUrl;

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobPage job={job} />
      <aside>
        <button>
          <a href={applicationLink} className="w-40 md:w-fit">
            Apply now
          </a>
        </button>
      </aside>
    </main>
  );
}
