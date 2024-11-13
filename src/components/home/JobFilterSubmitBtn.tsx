"use client";

import { LoaderIcon } from "@/lib/icons/LoaderIcon";
import { cn } from "@/lib/utils/utils";
import { useFormStatus } from "react-dom";

type JobFilterSubmitBtnProps = {
  children: React.ReactNode;
  className?: string;
};

export default function JobFilterSubmitBtn({
  children,
  className,
}: JobFilterSubmitBtnProps) {
  const state = useFormStatus();

  return (
    <button
      type="submit"
      disabled={state.pending}
      className={cn(
        "w-full rounded-lg border bg-[#0F172A] p-2 text-white disabled:opacity-50",
        className
      )}
    >
      <span className="flex items-center justify-center gap-1">
        {state.pending && <LoaderIcon />}
        {children}
      </span>
    </button>
  );
}
