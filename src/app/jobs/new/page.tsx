import NewJobPage from "@/components/pages/NewJobPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post a new job | One Job",
};

export default function page() {
  return <NewJobPage />;
}
