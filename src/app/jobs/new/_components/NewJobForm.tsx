"use client";

import { jobTypes, locationTypes } from "@/lib/types/jobType";
import NewJobSubmitFormBtn from "./NewJobSubmitFormBtn";
import { Controller } from "react-hook-form";
import { XIcon } from "@/lib/icons/XIcon";
import LocationInput from "./LocationInput";
import FormField from "./FormField";
import { AddNewJob } from "../_lib/AddNewJob";

export default function NewJobForm() {
  const { register, handleSubmit, watch, control, setValue, errors, loading } =
    AddNewJob();

  const locationValue = watch("location");

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <FormField
        label="Job title"
        name="title"
        registration={register("title")}
        error={errors.title}
        placeholder="e.g. Frontend Developer"
      />
      <FormField
        label="Job type"
        name="type"
        type="select"
        registration={register("type")}
        error={errors.type}
        options={jobTypes}
      />
      <FormField
        label="Company"
        type="text"
        name="companyName"
        placeholder="e.g. Google"
        registration={register("companyName")}
        error={errors.companyName}
      />
      <FormField
        label="Company Logo URL"
        type="text"
        name="companyLogo"
        placeholder="Enter the URL of the company logo"
        registration={register("companyLogo")}
        error={errors.companyLogo}
      />
      <FormField
        label="Location Type"
        type="select"
        name="locationType"
        registration={register("locationType")}
        error={errors.locationType}
        options={locationTypes}
      />
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
      <FormField
        label="How to apply"
        type="email"
        name="applicationEmail"
        placeholder="Email"
        registration={register("applicationEmail")}
        error={errors.applicationEmail}
      />

      <FormField
        label="Application URL"
        name="applicationUrl"
        type="url"
        placeholder="Website"
        registration={register("applicationUrl")}
        error={errors.applicationUrl}
      />
      <FormField
        label="Description"
        name="description"
        placeholder="enter job description"
        type="textarea"
        registration={register("description")}
        error={errors.description}
      />
      <FormField
        label="Salary"
        name="salary"
        type="number"
        registration={register("salary", { valueAsNumber: true })}
        error={errors.salary}
        min={0}
        step={1000}
      />
      <NewJobSubmitFormBtn loading={loading} />
    </form>
  );
}
