"use client";

import { jobTypes, locationTypes } from "@/lib/types/jobType";
import NewJobSubmitFormBtn from "./NewJobSubmitFormBtn";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createJobSchema, CreateJobValues } from "../_lib/validation";
import { createJobPosting } from "../_lib/createJobPosting";
import { XIcon } from "@/lib/icons/XIcon";
import LocationInput from "./LocationInput";
import { useState } from "react";
import { toSlug } from "@/lib/utils/utils";
import { nanoid } from "nanoid";
import path from "path";
import { put } from "@vercel/blob";

export default function NewJobForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CreateJobValues>({
    resolver: zodResolver(createJobSchema),
  });

  const locationValue = watch("location");

  const onSubmit = async (values: CreateJobValues) => {
    console.log("Form submitted with values:", values); // Log the values
    setSubmitError(null);

    const slug = `${toSlug(values.title)}-${nanoid(10)}`;

    const companyLogoUrl = values.companyLogo || undefined;

    try {
      // Create the job data object
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
        approved: true, // Adjust as needed
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        companyLogoUrl: companyLogoUrl,
      };

      console.log("Job data being sent to API:", jobData); // Log the jobData

      // Send directly to your API
      const response = await fetch(
        "https://jobboardbackend.up.railway.app/api/jobs",
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
        console.error("API error response:", errorText); // Log the error response
        throw new Error(
          `API error: ${response.status} ${response.statusText} - ${errorText}`
        );
      }

      const result = await response.json();
      // Handle successful submission
      window.location.href = "/job-submitted";
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting the form. Please try again."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(
        (values) => {
          console.log("Form submitted with values:", values); // Debug log
          onSubmit(values);
        },
        (errors) => {
          console.error("Form validation errors:", errors); // Debug validation errors
        }
      )}
      className="space-y-4"
      noValidate
    >
      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded">
          {submitError}
        </div>
      )}
      <div>
        <label htmlFor="title" className="block font-medium mb-1">
          Job title
        </label>
        <input
          {...register("title")}
          name="title"
          type="text"
          id="title"
          placeholder="e.g. Frontend Developer"
          className="w-full border rounded p-2"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="type" className="block font-medium mb-1">
          Job type
        </label>
        <select
          {...register("type")}
          id="type"
          name="type"
          className="w-full border rounded p-2"
        >
          <option value="">Select an option</option>
          {jobTypes.map((jobType) => (
            <option key={jobType} value={jobType}>
              {jobType}
            </option>
          ))}
        </select>
        {errors.type && (
          <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="companyName" className="block font-medium mb-1">
          Company
        </label>
        <input
          {...register("companyName")}
          type="text"
          id="companyName"
          name="companyName"
          className="w-full border rounded p-2"
        />
        {errors.companyName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.companyName.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="companyLogoUrl" className="block font-medium mb-1">
          Company Logo URL
        </label>
        <input
          {...register("companyLogo", {
            required: "Company logo URL is required",
          })}
          type="text"
          id="companyLogoUrl"
          placeholder="Enter the URL of the company logo"
          className="w-full border rounded p-2"
        />
        {errors.companyLogo && (
          <p className="text-red-500 text-sm mt-1">
            {errors.companyLogo.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="locationType" className="block font-medium mb-1">
          Location Type
        </label>
        <select
          {...register("locationType")}
          id="locationType"
          name="locationType"
          className="w-full border rounded p-2"
        >
          <option value="">Select an option</option>
          {locationTypes.map((locationType) => (
            <option key={locationType} value={locationType}>
              {locationType}
            </option>
          ))}
        </select>
        {errors.locationType && (
          <p className="text-red-500 text-sm mt-1">
            {errors.locationType.message}
          </p>
        )}
      </div>

      {/* Location Input field */}
      <div>
        <label htmlFor="location" className="block font-medium mb-1">
          Office location
        </label>
        <Controller
          name="location"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <div>
              <LocationInput
                id="location"
                className="w-full border rounded p-2"
                onLocationSelected={(location) => {
                  field.onChange(location);
                }}
                ref={ref}
              />
              {locationValue && (
                <div className="flex items-center gap-1 mt-2">
                  <button
                    type="button"
                    onClick={() =>
                      setValue("location", "", { shouldValidate: true })
                    }
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <XIcon />
                  </button>
                  <span className="text-sm">{locationValue}</span>
                </div>
              )}
            </div>
          )}
        />
        {errors.location && (
          <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1">How to apply</label>
        <div className="flex gap-2">
          <div className="flex-1">
            <input
              {...register("applicationEmail")}
              type="email"
              name="applicationEmail"
              placeholder="Email"
              className="w-full border rounded p-2"
            />
            {errors.applicationEmail && (
              <p className="text-red-500 text-sm mt-1">
                {errors.applicationEmail.message}
              </p>
            )}
          </div>
          <span className="flex items-center">or</span>
          <div className="flex-1">
            <input
              {...register("applicationUrl")}
              type="url"
              name="applicationUrl"
              placeholder="Website"
              className="w-full border rounded p-2"
            />
            {errors.applicationUrl && (
              <p className="text-red-500 text-sm mt-1">
                {errors.applicationUrl.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block font-medium mb-1">
          Description
        </label>
        <textarea
          {...register("description")}
          id="description"
          className="w-full border rounded p-2 min-h-[200px]"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="salary" className="block font-medium mb-1">
          Salary
        </label>
        <input
          {...register("salary", {
            valueAsNumber: true,
          })}
          type="number"
          id="salary"
          min="0"
          step="1000"
          name="salary"
          className="w-full border rounded p-2"
        />
        {errors.salary && (
          <p className="text-red-500 text-sm mt-1">{errors.salary.message}</p>
        )}
      </div>

      <NewJobSubmitFormBtn loading={isSubmitting} />
    </form>
  );
}
