
import type { Recipe } from "../data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition">
      <div className="text-6xl mb-4 text-center">
        {recipe.emoji}
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {recipe.title}
      </h2>

      <p className="text-gray-500 mb-3">
        {recipe.cuisine}
      </p>

      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-600">
          ⏱ {recipe.minutes} minutes
        </span>

        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
          {recipe.difficulty}
        </span>
      </div>
    </div>
  );
}
