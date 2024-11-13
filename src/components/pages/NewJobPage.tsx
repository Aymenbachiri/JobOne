import NewJobForm from "@/app/jobs/new/_components/NewJobForm";

export default function NewJobPage() {
  return (
    <main className="m-auto my-10 max-w-3xl space-y-10">
      <section className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Find your perfect developer
        </h1>
        <p className="text-muted-foreground">
          Get your job posting seen by thousands of job seekers.
        </p>
      </section>
      <div className="space-y-6 rounded-lg border p-4">
        <section>
          <h2 className="font-semibold">Job details</h2>
          <p className="text-muted-foreground">
            Provide a job description and details
          </p>
        </section>
        <NewJobForm />
      </div>
    </main>
  );
}
