import { JobType } from "@/lib/helpers/getAllJobs";
import { MyImage } from "../common/MyImage";
import { formatDate, formatMoney } from "@/lib/utils/utils";
import { BriefcaseIcon } from "@/lib/icons/BriefcaseIcon";
import { MapPinIcon } from "@/lib/icons/MapPinIcon";
import { GlobeIcon } from "@/lib/icons/GlobeIcon";
import { BanknoteIcon } from "@/lib/icons/BanknoteIcon";
import { ClockIcon } from "@/lib/icons/GlockIcon";
import companyLogoPlaceholder from "/public/assets/images/company-logo-placeholder.webp";
import { Badge } from "./Badge";

type JobListItemProps = {
  job: JobType;
};

export function JobListItem({ job }: JobListItemProps) {
  const {
    companyLogoUrl,
    companyName,
    title,
    type,
    locationType,
    location,
    salary,
    createdAt,
  } = job;

  return (
    <article className="flex gap-3 rounded-lg border p-5 hover:bg-muted/60">
      <MyImage
        src={companyLogoUrl || companyLogoPlaceholder}
        alt={`${companyName} logo`}
        width={100}
        height={100}
        className="self-center rounded-lg"
        placeholder="blur"
      />
      <div className="flex-grow space-y-3">
        <div>
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-muted-foreground">{companyName}</p>
        </div>
        <div className="text-muted-foreground">
          <p className="flex items-center gap-1.5 sm:hidden">
            <BriefcaseIcon />
            {type}
          </p>
          <p className="flex items-center gap-1.5">
            <MapPinIcon />
            {locationType}
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
            {formatDate(createdAt as Date)}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
        <Badge>{type}</Badge>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <ClockIcon />
          {formatDate(createdAt as Date)}
        </span>
      </div>
    </article>
  );
}
