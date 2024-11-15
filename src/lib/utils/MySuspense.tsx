import React, { Suspense } from "react";

export const MySuspense = ({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
}) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};
