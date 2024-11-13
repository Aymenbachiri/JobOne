export type JobType = {
  id: number;
  slug: string;
  title: string;
  type: string;
  locationType: string;
  location: string;
  description: string;
  salary: number;
  companyName: string;
  applicationEmail?: string;
  applicationUrl?: string;
  companyLogoUrl?: string;
  approved: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export const jobTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Temporary",
  "Internship",
  "Volunteer",
];

export const locationTypes = ["Remote", "On-site", "Hybrid"];
