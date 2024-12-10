import type { CreateJobValues } from "./validation";

export async function registerJob(jobData: CreateJobValues): Promise<void> {
  try {
    const response = await fetch(
      "https://jobboardbackend-i17f.onrender.com/api/jobs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(jobData),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `API error: ${response.status} ${response.statusText} - ${errorText}`
      );
    }
  } catch (error) {
    console.error("Error during Job submission:", error);
  }
}
