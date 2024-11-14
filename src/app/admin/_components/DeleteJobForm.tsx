"use client";

import { FormSubmitBtn } from "./FormSubmitBtn";
import { deleteJob } from "../_lib/action";
import { useActionState, useState } from "react";

type DeleteJobFormProps = {
  jobId: string;
};

export function DeleteJobForm({ jobId }: DeleteJobFormProps) {
  const [formState, formAction] = useActionState(deleteJob, undefined);
  const [, setValue] = useState("");

  return (
    <form action={formAction} className="space-y-1">
      <input
        hidden
        name="jobId"
        value={jobId}
        onChange={(e) => setValue(e.target.value)}
      />
      <FormSubmitBtn className="w-full bg-red-500 hover:bg-red-600">
        Delete
      </FormSubmitBtn>

      {formState?.error && (
        <p className="text-sm text-red-500">{formState.error}</p>
      )}
    </form>
  );
}
