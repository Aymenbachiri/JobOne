import AdminPage from "@/components/pages/AdminPage";
import { ProtectAdminPage } from "./_lib/ProtectAdminPage";

export default async function page() {
  return (
    <ProtectAdminPage>
      <AdminPage />
    </ProtectAdminPage>
  );
}
