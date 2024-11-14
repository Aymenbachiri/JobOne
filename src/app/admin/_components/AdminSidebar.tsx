import type { JobType } from "@/lib/types/jobType";
import { ApproveSubmissionForm } from "./ApproveSubmissionForm";
import { DeleteJobForm } from "./DeleteJobForm";

type AdminSidebarProps = {
  job: JobType;
};

export function AdminSidebar({ job }: AdminSidebarProps) {
  return (
    <aside className="flex w-[200px] flex-none flex-row items-center gap-2 md:flex-col md:items-stretch">
      {job.approved ? (
        <span className="text-center font-semibold text-green-500">
          Approved
        </span>
      ) : (
        <ApproveSubmissionForm
          className="w-full bg-green-500 hover:bg-green-600"
          jobId={job.id}
        />
      )}
      <DeleteJobForm jobId={job.id} />
    </aside>
  );
}
