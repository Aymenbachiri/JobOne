import { MyImage } from "@/components/common/MyImage";
import { MyLink } from "@/components/common/MyLink";
import { BanknoteIcon } from "@/lib/icons/BanknoteIcon";
import { BriefcaseIcon } from "@/lib/icons/BriefcaseIcon";
import { GlobeIcon } from "@/lib/icons/GlobeIcon";
import { MapPinIcon } from "@/lib/icons/MapPinIcon";
import type { JobType } from "@/lib/types/jobType";
import { formatMoney } from "@/lib/utils/utils";
import img from "/public/assets/images/company-logo-placeholder.webp";

export function JobPage({ job }: { job: JobType }) {
  const {
    application_url,
    company_logo_url,
    company_name,
    description,
    location,
    location_type,
    salary,
    title,
    type,
  } = job;
  return (
    <main className="w-full grow space-y-5 h-full mb-[50px]">
      <div className="flex items-center gap-3">
        {company_logo_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={company_logo_url}
            alt="Company logo"
            className="rounded-xl w-fit h-[100px]"
          />
        ) : (
          <MyImage
            src={img}
            alt="company logo placeholder"
            width={100}
            height={100}
            placeholder="blur"
          />
        )}
        <div>
          <section>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="font-semibold">
              {application_url ? (
                <MyLink
                  href={new URL(application_url).origin}
                  className="text-green-500 hover:underline"
                >
                  {company_name}
                </MyLink>
              ) : (
                <span>{company_name}</span>
              )}
            </p>
          </section>
          <section className="text-muted-foreground">
            <p className="flex items-center gap-1.5">
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
          </section>
        </div>
      </div>
      <div>{description}</div>
    </main>
  );
}
