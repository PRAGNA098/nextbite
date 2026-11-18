
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-orange-50 px-6 text-center">
      <div className="text-8xl mb-6">🍽️</div>

      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Recipe Not Found!
      </h1>

      <p className="text-gray-600 mb-8">
        Sorry, we couldn't find the recipe you're looking for.
      </p>

      <Link
        href="/"
        className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700"
      >
        Back to Home
      </Link>
    </main>
  );
}
