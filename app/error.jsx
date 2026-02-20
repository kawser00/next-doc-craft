"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-red-500">
      <h2>Something went wrong!</h2>
      <h2 className="font-bold">{error?.message}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="inline-flex justify-center rounded-lg bg-slate-900 mt-4 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
      >
        Try again
      </button>
    </div>
  );
}
