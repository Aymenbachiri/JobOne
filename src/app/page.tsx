import HomePage from "@/components/pages/HomePage";
import type { JobFilterValues } from "@/lib/schema/jobFilterSchema";

type SearchParams = Promise<{
  q?: string;
  type?: string;
  location?: string;
  remote?: string;
}>;

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const { q, type, location, remote } = searchParams;
  const jobFilterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };

  return <HomePage jobFilterValues={jobFilterValues} />;
}
