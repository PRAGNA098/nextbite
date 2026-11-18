
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Discover Delicious Recipes",
  description: "Explore simple, delicious recipes with NextBites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-orange-50 min-h-screen">
        <nav className="bg-white shadow-sm px-6 py-5">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-orange-600">
              🍽️ NextBites
            </a>

            <span className="text-gray-600">
              Discover. Cook. Enjoy.
            </span>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
