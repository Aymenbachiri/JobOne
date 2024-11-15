"use server";
import "server-only";

import { IsAdmin } from "@/lib/utils/utils";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type FormState = { error?: string } | undefined;

export async function approveSubmission(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const jobId = parseInt(formData.get("jobId") as string);

    if (isNaN(jobId)) {
      throw new Error("Invalid Job ID");
    }

    console.log(jobId);
    const user = await currentUser();

    if (!user || !IsAdmin(user)) {
      throw new Error("Not authorized");
    }

    const response = await fetch(
      `https://jobboardbackend.up.railway.app/api/jobs/${jobId}`,

      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ approved: true }),
      }
    );

    if (!response.ok) {
      console.log(response);

      throw new Error(response.statusText);
    }

    revalidatePath("/");
    redirect("/admin");
  } catch (error) {
    let message = "Unexpected error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }
}

export async function deleteJob(prevState: FormState, formData: FormData) {
  try {
    const jobId = parseInt(formData.get("jobId") as string);

    const user = await currentUser();

    if (!user || !IsAdmin(user)) {
      throw new Error("Not authorized");
    }

    const deleteResponse = await fetch(
      `https://jobboardbackend.up.railway.app/api/jobs/${jobId}`,
      {
        method: "DELETE",
      }
    );

    if (!deleteResponse.ok) {
      throw new Error("Failed to delete job");
    }

    redirect("/admin");
  } catch (error) {
    let message = "Unexpected error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }
}
