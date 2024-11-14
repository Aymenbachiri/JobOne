import type { Metadata } from "next";
import { AuthProvider } from "../../lib/providers/AuthProvider";
import { AdminNavbar } from "./_components/AdminNavbar";

export const metadata: Metadata = {
  title: "Admin",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AdminNavbar />
      {children}
    </AuthProvider>
  );
}
