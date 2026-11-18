
import { getRecipe, recipes } from "../../data/recipes";
import { notFound } from "next/navigation";

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
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-md p-8">
        <div className="text-7xl text-center mb-6">
          {recipe.emoji}
        </div>

        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
          {recipe.title}
        </h1>

        <p className="text-center text-gray-500 mb-8">
          {recipe.cuisine} · {recipe.minutes} minutes · {recipe.difficulty}
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ingredients
        </h2>

        <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Preparation Steps
        </h2>

        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        <div className="mt-8">
          <a
            href="/"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
