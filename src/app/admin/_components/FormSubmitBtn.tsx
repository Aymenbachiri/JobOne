"use client";
import { LoaderIcon } from "@/lib/icons/LoaderIcon";
import { cn } from "@/lib/utils/utils";
import { useFormStatus } from "react-dom";

type FormSubmitBtnProps = {
  children: React.ReactNode;
  className?: string;
};

export function FormSubmitBtn({ children, className }: FormSubmitBtnProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "w-full rounded-lg border bg-[#0F172A] p-2 text-white disabled:opacity-50",
        className
      )}
    >
      <span className="flex items-center justify-center gap-1">
        {pending && <LoaderIcon />}
        {children}
      </span>
    </button>
  );
}
