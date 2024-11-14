import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createJobSchema, CreateJobValues } from "./validation";
import { toSlug } from "@/lib/utils/utils";
import { nanoid } from "nanoid";
import { registerJob } from "./registerJob";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function AddNewJob() {
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<CreateJobValues>({
    resolver: zodResolver(createJobSchema),
  });

  const onSubmit = async (values: CreateJobValues) => {
    const slug = `${toSlug(values.title)}-${nanoid(10)}`;
    const companyLogoUrl = values.companyLogo || undefined;

    const jobData = {
      id: undefined,
      slug: slug,
      title: values.title.trim(),
      type: values.type,
      companyName: values.companyName.trim(),
      salary: Number(values.salary) > 0 ? Number(values.salary) : 0,
      locationType: values.locationType,
      location: values.location,
      description: values.description?.trim(),
      applicationEmail: values.applicationEmail?.trim() || null,
      applicationUrl: values.applicationUrl?.trim() || null,
      approved: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      companyLogoUrl,
    };

    setLoading(true);
    try {
      toast.promise(registerJob(jobData as CreateJobValues), {
        loading: "Adding job...",
        success: "Job added successfully!",
        error: (err: Error) => err.message,
      });
      reset();
      route.push("/job-submitted");
    } catch (error) {
      console.error("Error during Job submission:", error);
    } finally {
      setLoading(false);
    }
  };
  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    watch,
    control,
    setValue,
    errors,
    loading,
    onSubmit,
  };
}
