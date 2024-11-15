import type { JobFilterValues } from "@/lib/schema/jobFilterSchema";
import { MyLink } from "../common/MyLink";
import { ArrowLeftIcon } from "@/lib/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/lib/icons/ArrowRightIcon";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  jobFilterValues: JobFilterValues;
};

export function Pagination({
  currentPage,
  totalPages,
  jobFilterValues: { q, type, location, remote },
}: PaginationProps) {
  function generatePageLink(page: number) {
    const searchParams = new URLSearchParams({
      ...(q && { q }),
      ...(type && { type }),
      ...(location && { location }),
      ...(remote && { remote: "true" }),
      page: page.toString(),
    });

    return `/?${searchParams.toString()}`;
  }

  return (
    <main className="flex justify-between">
      <MyLink
        href={generatePageLink(currentPage - 1)}
        className={`flex items-center gap-2 font-semibold ${
          currentPage <= 1 ? "invisible" : ""
        }`}
      >
        <ArrowRightIcon />
        Previous
      </MyLink>
      <span className="font-semibold">
        Page {currentPage} of {totalPages}
      </span>
      <MyLink
        href={generatePageLink(currentPage + 1)}
        className={`flex items-center gap-2 font-semibold ${
          currentPage >= totalPages ? "invisible" : ""
        }`}
      >
        <ArrowLeftIcon />
        Next
      </MyLink>
    </main>
  );
}
