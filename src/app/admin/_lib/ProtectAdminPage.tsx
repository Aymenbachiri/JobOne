import { IsAdmin } from "@/lib/utils/utils";
import { currentUser } from "@clerk/nextjs/server";

export async function ProtectAdminPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  if (!user || !IsAdmin(user)) {
    return <p>You must be logged in to access this page.</p>;
  }
  return <>{children}</>;
}
