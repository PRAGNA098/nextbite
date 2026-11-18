
"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

type RecipeSearchProps = {
  recipes: Recipe[];
};

export default function RecipeSearch({ recipes }: RecipeSearchProps) {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
   (recipe.title + " " + recipe.cuisine)
     .toLowerCase()
     .includes(search.toLowerCase())
  ); 
  return (
    <section>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search your favourite recipe..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-10">
          No recipes found. Try searching for something else!
        </p>
      )}
    </section>
  );
}
