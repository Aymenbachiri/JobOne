import SingleJobPage from "@/components/pages/SingleJobPage";

type Params = Promise<{ id: string }>;

export default function page({ params }: { params: Params }) {
  return <SingleJobPage params={params} />;
}
