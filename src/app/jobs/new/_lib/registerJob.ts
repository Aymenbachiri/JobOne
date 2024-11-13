import { apiUrl } from "@/components/common/constants";
import { type JobFormData } from "@/lib/schema/jobSchema";

export async function registerJob(data: JobFormData): Promise<void> {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      const errorMessage = errorText
        ? JSON.parse(errorText)?.error || errorText
        : `Failed to add job: ${response.statusText}`;
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding job:", error);
    throw error;
  }
}
