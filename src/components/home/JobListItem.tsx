import { formatDate, formatMoney } from "@/lib/utils/utils";
import { BriefcaseIcon } from "@/lib/icons/BriefcaseIcon";
import { MapPinIcon } from "@/lib/icons/MapPinIcon";
import { GlobeIcon } from "@/lib/icons/GlobeIcon";
import { BanknoteIcon } from "@/lib/icons/BanknoteIcon";
import { ClockIcon } from "@/lib/icons/GlockIcon";
import { Badge } from "./Badge";
import type { JobType } from "@/lib/types/jobType";

type JobListItemProps = {
  job: JobType;
};

export function JobListItem({ job }: JobListItemProps) {
  const {
    company_logo_url,
    company_name,
    title,
    type,
    location_type,
    location,
    salary,
    created_at,
  } = job;

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <article className="flex gap-3 rounded-lg border p-5 hover:bg-muted/60">
      <img
        src={company_logo_url || "/assets/images/company-logo-placeholder.webp"}
        alt={`${company_name} logo`}
        width={100}
        height={100}
        className="self-center rounded-lg"
      />
      <div className="flex-grow space-y-3">
        <div>
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-muted-foreground">{company_name}</p>
        </div>
        <div className="text-muted-foreground">
          <p className="flex items-center gap-1.5 sm:hidden">
            <BriefcaseIcon />
            {type}
          </p>
          <p className="flex items-center gap-1.5">
            <MapPinIcon />
            {location_type}
          </p>
          <p className="flex items-center gap-1.5">
            <GlobeIcon />
            {location || "Worldwide"}
          </p>
          <p className="flex items-center gap-1.5">
            <BanknoteIcon />
            {formatMoney(salary)}
          </p>
          <p className="flex items-center gap-1.5 sm:hidden">
            <ClockIcon />
            {formatDate(created_at!)}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
        <Badge>{type}</Badge>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <ClockIcon />
          {formatDate(created_at!)}
        </span>
      </div>
    </article>
  );
}
