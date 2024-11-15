import NewJobPage from "@/components/pages/NewJobPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post a Job - Find Top Talent on One Jobs",
  description:
    "Post job openings and connect with skilled professionals on One Jobs. Start hiring the best talent today!",
};

export default function page() {
  return <NewJobPage />;
}
