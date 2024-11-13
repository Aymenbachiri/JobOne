import { jobSchema, type JobFormData } from "@/lib/schema/jobSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { registerJob } from "./registerJob";

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
    setLoading(true);
    try {
      await toast.promise(registerJob(data), {
        loading: "Adding job...",
        success: "Job added successfully!",
        error: (err: Error) => err.message,
      });

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
