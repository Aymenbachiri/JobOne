"use client";

import { LoaderIcon } from "@/lib/icons/LoaderIcon";
import { cn } from "@/lib/utils/utils";

type NewJobSubmitBtnProps = {
  className?: string;
  loading: boolean;
};

export default function JobFilterSubmitBtn({
  className,
  loading,
}: NewJobSubmitBtnProps) {
  return (
    <button
      type="submit"
      onClick={() => console.log("clicked")}
      disabled={loading}
      className={cn(
        "w-full rounded-lg border bg-[#0F172A] p-2 text-white disabled:opacity-50",
        className
      )}
    >
      <span className="flex items-center justify-center gap-1">
        {loading && <LoaderIcon />}
        Add Job
      </span>
    </button>
  );
}
