import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - Access Your One Jobs Account",
  description:
    "Sign in to your One Jobs account to manage job applications, post jobs, and connect with employers or candidates.",
};

export default function Page() {
  return (
    <main className="flex h-[68vh] flex-col items-center justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <SignIn />
    </main>
  );
}
