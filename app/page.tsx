
import { recipes } from "./data/recipes";
import RecipeSearch from "./components/RecipeSearch";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
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

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Popular Recipes
        </h2>

        <RecipeSearch recipes={recipes} />
      </section>
    </main>
  );
}
