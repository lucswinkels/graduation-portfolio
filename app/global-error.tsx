"use client";

import { useEffect } from "react";

import ErrorComponent from "@/components/error-component";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorComponent error={error} />;
}
