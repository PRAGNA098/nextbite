
import { notFound } from "next/navigation";
import Link from "next/link";
import { getRecipe, recipes } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export default async function RecipeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <Link
        href="/"
        className="text-orange-600 hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="bg-white rounded-2xl shadow-md p-8 mt-6">
        <div className="text-7xl text-center mb-6">
          {recipe.emoji}
        </div>

        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          {recipe.title}
        </h1>

        <p className="text-center text-gray-600 mb-6">
          {recipe.cuisine} · {recipe.minutes} minutes · {recipe.difficulty}
        </p>

        <h2 className="text-xl font-bold mb-3">
          Ingredients
        </h2>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mb-3">
          Instructions
        </h2>

        <ol className="list-decimal pl-6 space-y-3">
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </main>
  );
}
