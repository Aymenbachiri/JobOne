import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex h-[68vh] flex-col items-center justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <SignIn />
    </main>
  );
}
