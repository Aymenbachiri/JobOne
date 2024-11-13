import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { JobFilterValues } from "../schema/jobFilterSchema";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMoney(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function formatDate(from: string | Date): string {
  const date = typeof from === "string" ? new Date(from) : from;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  if (diffInSeconds < 0) {
    const absDiff = Math.abs(diffInSeconds);
    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
      const value = Math.floor(absDiff / secondsInUnit);
      if (value >= 1) {
        return `in ${value} ${unit}${value === 1 ? "" : "s"}`;
      }
    }
    return "in less than a second";
  }

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const value = Math.floor(diffInSeconds / secondsInUnit);
    if (value >= 1) {
      return `${value} ${unit}${value === 1 ? "" : "s"} ago`;
    }
  }

  return "just now";
}

export function getTitle({ q, type, location, remote }: JobFilterValues) {
  const titlePrefix = q
    ? `${q} jobs`
    : type
    ? `${type} developer jobs`
    : remote
    ? "Remote developer jobs"
    : "All developer jobs";

  const titleSuffix = location ? ` in ${location}` : "";

  return `${titlePrefix}${titleSuffix}`;
}
