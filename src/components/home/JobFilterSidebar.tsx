import { getApprovedJobs } from "@/lib/helpers/getApprovedJobs";
import Select from "./Select";
import Form from "next/form";
import JobFilterSubmitBtn from "./JobFilterSubmitBtn";
import type { JobFilterValues } from "@/lib/schema/jobFilterSchema";

type JobFilterSidebarProps = {
  defaultValues: JobFilterValues;
};

export default async function JobFilterSidebar({
  defaultValues,
}: JobFilterSidebarProps) {
  const job = await getApprovedJobs();
  const jobTypes = [...new Set(job.map((job) => job.type))];
  const Locations = [...new Set(job.map((job) => job.location))];

  return (
    <aside className="sticky top-0 h-fit rounded-lg border bg-background p-4 md:w-[260px]">
      <Form action="" key={JSON.stringify(defaultValues)}>
        <div className="space-y-4">
          <section className="flex flex-col gap-2">
            <label htmlFor="q">Search</label>
            <input
              type="text"
              id="q"
              name="q"
              defaultValue={defaultValues.q}
              placeholder="Title, company, etc."
              className="border-input w-full rounded-lg border p-2"
            />
          </section>
          <section className="flex flex-col gap-2">
            <label htmlFor="type">Type</label>
            <Select
              id="type"
              name="type"
              defaultValue={defaultValues.type || ""}
            >
              <option value="">All types</option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </section>
          <section className="flex flex-col gap-2">
            <label htmlFor="location">Location</label>
            <Select
              id="location"
              name="location"
              defaultValue={defaultValues.location || ""}
            >
              <option value="">All locations</option>
              {Locations.map((location) => (
                <option key={location} value={location}>
                  {location || "Unknown"}
                </option>
              ))}
            </Select>
          </section>
          <section className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remote"
              name="remote"
              value="true"
              defaultChecked={defaultValues.remote}
              className="scale-125 accent-black"
            />
            <label htmlFor="remote">Remote Jobs</label>
          </section>
          <JobFilterSubmitBtn>Filter Jobs</JobFilterSubmitBtn>
        </div>
      </Form>
    </aside>
  );
}
