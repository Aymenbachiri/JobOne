import HomePage from "@/components/pages/HomePage";
import type { JobFilterValues } from "@/lib/schema/jobFilterSchema";
import { getTitle } from "@/lib/utils/utils";
import type { Metadata } from "next";

type SearchParams = Promise<{
  q?: string;
  type?: string;
  location?: string;
  remote?: string;
  page?: string;
}>;

export async function generateMetadata(props: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const { q, type, location, remote } = searchParams;
  return {
    title: `${getTitle({
      q,
      type,
      location,
      remote: remote === "true",
    })} | One Jobs`,
  };
}

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const { q, type, location, remote, page } = searchParams;
  const jobFilterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };

  return (
    <HomePage
      jobFilterValues={jobFilterValues}
      page={page ? parseInt(page) : undefined}
    />
  );
}
