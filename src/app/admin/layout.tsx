import type { Metadata } from "next";
import { AuthProvider } from "../../lib/providers/AuthProvider";

export const metadata: Metadata = {
  title: "Admin",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
