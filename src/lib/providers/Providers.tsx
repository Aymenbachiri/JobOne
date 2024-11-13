import { Footer } from "@/components/home/Footer";
import { Navbar } from "@/components/home/Navbar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
