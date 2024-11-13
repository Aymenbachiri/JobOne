"use client";

import { jobTypes, locationTypes } from "@/lib/types/jobType";
import LocationInput from "./LocationInput";
import NewJobSubmitFormBtn from "./NewJobSubmitFormBtn";
import { FormField } from "./FormField";
import { AddNewJob } from "../_lib/AddNewJob";

export default function NewJobForm() {
  const { register, handleSubmit, errors, loading } = AddNewJob();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        label="Title"
        placeholder="e.g Frontend Developer"
        registration={register("title")}
        error={errors.title}
      />
      <FormField
        label="Job Type"
        variant="select"
        placeholder="All types"
        options={jobTypes.map((type) => ({ value: type, label: type }))}
        registration={register("type")}
        error={errors.type}
      />
      <FormField
        label="Company"
        placeholder="e.g Google"
        registration={register("companyName")}
        error={errors.companyName}
      />
      <FormField
        label="Company Logo"
        type="file"
        registration={register("companyLogo")}
        error={errors.companyLogo}
      />
      <FormField
        label="Location"
        variant="select"
        placeholder="Select an option"
        options={locationTypes.map((location) => ({
          value: location,
          label: location,
        }))}
        registration={register("location")}
        error={errors.location}
      />
      <section>
        <label
          htmlFor="officeLocation"
          className="text-muted-foreground block text-sm font-medium"
        >
          Office location
        </label>
        <LocationInput />
      </section>
      <section className="flex flex-col gap-2">
        <label
          htmlFor="applicationEmail"
          className="text-muted-foreground block text-sm font-medium"
        >
          How to apply
        </label>
        <div className="flex items-center gap-2">
          <FormField
            label="Email"
            type="email"
            placeholder="Email"
            registration={register("applicationEmail")}
            error={errors.applicationEmail}
          />
          <span>or</span>
          <FormField
            label="Website"
            type="url"
            placeholder="Website"
            registration={register("url")}
            error={errors.url}
          />
        </div>
      </section>
      <FormField
        label="Description"
        variant="textarea"
        placeholder="e.g. We are looking for a full-time Next.js developer to join our team."
        registration={register("description")}
        error={errors.description}
      />
      <FormField
        label="Salary"
        type="number"
        placeholder="e.g. 100,000"
        registration={register("salary")}
        error={errors.salary}
        valueAsNumber
      />
      <NewJobSubmitFormBtn loading={loading} />
    </form>
  );
}
