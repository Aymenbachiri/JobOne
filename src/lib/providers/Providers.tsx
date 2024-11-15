import { Footer } from "@/components/home/Footer";
import { Navbar } from "@/components/home/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "sonner";
import { AuthProvider } from "@/lib/providers/AuthProvider";
import NextTopLoader from "nextjs-toploader";
import { LenisScrollProvider } from "./LenisScrollProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LenisScrollProvider />
        <NextTopLoader />
        <Navbar />
        <Toaster position="top-right" richColors expand={true} />
        {children}
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  );
}
