
import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      {/* Hero Section */}
      <section className="text-center mb-12">
        <p className="text-orange-600 font-semibold mb-3">
          WELCOME TO NEXTBITES
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Discover Your Next
          <span className="text-orange-600"> Favourite Meal</span>
        </h1>

        <p className="text-gray-600 text-lg">
          Explore delicious recipes and bring happiness to your kitchen.
        </p>
      </section>

      {/* Recipe Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Popular Recipes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

    </main>
  );
}
