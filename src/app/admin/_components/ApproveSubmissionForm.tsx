"use client";

import { approveSubmission } from "../_lib/action";
import { FormSubmitBtn } from "./FormSubmitBtn";
import { useActionState, useState } from "react";

type ApproveSubmissionFormProps = {
  jobId: string;
  className?: string;
};

export function ApproveSubmissionForm({
  jobId,
  className,
}: ApproveSubmissionFormProps) {
  const [formState, formAction] = useActionState(approveSubmission, undefined);
  const [, setValue] = useState("");

  return (
    <form action={formAction} className="space-y-1">
      <input
        hidden
        name="id"
        value={jobId}
        onChange={(e) => setValue(e.target.value)}
      />
      <FormSubmitBtn className={className}>Approve</FormSubmitBtn>
      {formState?.error && (
        <p className="text-sm text-red-500">{formState.error}</p>
      )}
    </form>
  );
}
