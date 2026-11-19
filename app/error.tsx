
"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({
  error,
  reset,
}: ErrorProps) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-orange-50 px-6 text-center">
      <div className="text-7xl mb-6">😕</div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Something went wrong!
      </h1>

      <p className="text-gray-600 mb-6">
        We couldn't load this page. Please try again.
        {error.message && ` (${error.message})`}
      </p>

      <button
        onClick={() => reset()}
        className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700"
      >
        Try Again
      </button>
    </main>
  );
}
