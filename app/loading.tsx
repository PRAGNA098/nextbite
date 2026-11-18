
export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-orange-50">
      <div className="text-6xl mb-4">🍽️</div>

      <h1 className="text-2xl font-bold text-orange-600 mb-2">
        Preparing your NextBites...
      </h1>

      <p className="text-gray-500">
        Please wait while we get your recipes ready.
      </p>

      <div className="mt-6 w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
    </main>
  );
}
