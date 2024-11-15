import { Suspense } from "react";

type Props = {
  children: React.ReactNode;
  fallback: React.ReactNode;
};

export function MySuspense({ children, fallback }: Props) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}
