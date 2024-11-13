import { MyLink } from "../common/MyLink";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <section className="space-y-2">
            <h3 className="text-xl font-semibold">One Jobs</h3>
            <p className="text-sm text-muted-foreground">
              Connecting talents with opportunities
            </p>
          </section>
          <nav className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <MyLink href="/about" className="hover:underline">
              About Us
            </MyLink>
            <MyLink href="/contact" className="hover:underline">
              Contact
            </MyLink>
            <MyLink href="/terms" className="hover:underline">
              Terms of Service
            </MyLink>
            <MyLink href="/privacy" className="hover:underline">
              Privacy Policy
            </MyLink>
          </nav>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} One Jobs, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
