import { SignUp } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Join One Jobs Today",
  description:
    "Create your One Jobs account to explore opportunities, post jobs, and connect with top employers or professionals.",
};

export default function Page() {
  return (
    <main className="flex h-[68vh] flex-col items-center justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <SignUp />
    </main>
  );
}
