import { Footer } from "@/components/home/Footer";
import { Navbar } from "@/components/home/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "sonner";
import { AuthProvider } from "@/lib/providers/AuthProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Navbar />
        <Toaster position="top-right" richColors expand={true} />
        {children}
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  );
}
