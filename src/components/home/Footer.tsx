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
          <nav className="flex flex-wrap gap-1 text-sm text-muted-foreground">
            <span>Provided by</span>
            <a
              href="https://www.linkedin.com/in/aymen-bachiri-9442b5287/"
              className="underline"
            >
              Aymen
            </a>
          </nav>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} One Jobs, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
