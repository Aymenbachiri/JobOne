"use server";

import { toSlug } from "@/lib/utils/utils";
import { createJobSchema } from "./validation";
import { nanoid } from "nanoid";
import { put } from "@vercel/blob";
import path from "path";
import { apiUrl } from "@/components/common/constants";
import { redirect } from "next/navigation";

export async function createJobPosting(formData: FormData) {
  try {
    console.log("Server: Received form data"); // Debug log

    // Log the received form data
    const formDataObj = Object.fromEntries(formData.entries());
    console.log("Server: Form data received:", formDataObj);

    // Parse and validate
    const parsed = createJobSchema.safeParse(formDataObj);

    if (!parsed.success) {
      console.error("Server: Validation failed:", parsed.error); // Debug log
      throw new Error(`Validation failed: ${parsed.error.message}`);
    }

    console.log("Server: Validation passed, parsed data:", parsed.data); // Debug log

    const {
      title,
      type,
      companyName,
      companyLogo,
      locationType,
      location,
      applicationEmail,
      applicationUrl,
      description,
      salary,
    } = parsed.data;

    const slug = `${toSlug(title)}-${nanoid(10)}`;
    console.log("Server: Generated slug:", slug); // Debug log

    // Prepare job data
    const jobData = {
      slug,
      title: title.trim(),
      type,
      companyName: companyName.trim(),
      locationType,
      location,
      applicationEmail: applicationEmail?.trim(),
      applicationUrl: applicationUrl?.trim(),
      description: description?.trim(),
      salary: salary ? Number(salary) : undefined,
    };

    console.log("Server: Prepared job data:", jobData); // Debug log
    console.log(
      "Server: Sending to API:",
      "https://jobboardbackend.up.railway.app/api/jobs"
    ); // Debug log

    // Send to API
    const response = await fetch(
      "https://jobboardbackend.up.railway.app/api/jobs",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Server: API error response:", errorText); // Debug log
      throw new Error(
        `API error: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    const responseData = await response.json();
    console.log("Server: API response:", responseData); // Debug log

    console.log("Server: Redirecting to /job-submitted"); // Debug log
    redirect("/job-submitted");
  } catch (error) {
    console.error("Server: Error in createJobPosting:", error); // Debug log
    throw error;
  }
}
