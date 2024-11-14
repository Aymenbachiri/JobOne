import { apiUrl } from "@/components/common/constants";
import { jobSchema, type JobFormData } from "@/lib/schema/jobSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function AddNewJob() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
  });

  const onSubmit = async (data: JobFormData) => {
    console.log("Form submitted with data:", data);
    setLoading(true);

    try {
      console.log("Calling registerJob function...");
      await toast.promise(registerJob(data), {
        loading: "Adding job...",
        success: "Job added successfully!",
        error: (err: Error) => {
          console.error("Error during Job submission:", err);
          return err.message;
        },
      });
      console.log("Job added successfully!");
      reset();
      router.push("/dashboard");
    } catch (error) {
      console.error("Error during Job submission:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
  };
}

async function registerJob(data: JobFormData): Promise<void> {
  try {
    console.log("Making API call to", apiUrl);
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
      console.error("Error response:", errorMessage);
      throw new Error(errorMessage);
    }

    console.log("Job added successfully!");
    return await response.json();
  } catch (error) {
    console.error("Error adding job:", error);
    throw error;
  }
}
