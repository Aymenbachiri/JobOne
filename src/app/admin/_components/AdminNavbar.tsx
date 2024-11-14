import { MyLink } from "@/components/common/MyLink";
import { currentUser } from "@clerk/nextjs/server";
import { SignOutBtn } from "./SignOutBtn";

export async function AdminNavbar() {
  const user = await currentUser();

  return (
    <main className="px-3">
      <div className="m-auto flex h-10 max-w-5xl items-center justify-between gap-2">
        <MyLink href="/admin" className="font-semibold underline">
          Admin Dashboard
        </MyLink>
        <div className="space-x-2">
          <span className="font-semibold">
            {user?.primaryEmailAddress?.emailAddress}
          </span>
          <SignOutBtn />
        </div>
      </div>
    </main>
  );
}
