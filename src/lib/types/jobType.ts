export type JobType = {
  id: string;
  slug: string;
  title: string;
  type: string;
  location_type: string;
  location: string;
  description: string;
  salary: number;
  company_name: string;
  application_email: string;
  application_url: string;
  company_logo_url: string;
  approved: boolean;
  created_at: string;
  updated_at: string;
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
