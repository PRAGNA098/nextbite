
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella cheese",
      "Fresh basil",
      "Olive oil",
    ],
    steps: [
      "Prepare the pizza dough.",
      "Spread tomato sauce over the dough.",
      "Add mozzarella cheese.",
      "Bake until the crust is golden.",
      "Add fresh basil and serve.",
    ],
  },
  {
    id: "masala-dosa",
    title: "Masala Dosa",
    emoji: "🥞",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Indian",
    ingredients: [
      "Dosa batter",
      "Potatoes",
      "Onions",
      "Mustard seeds",
      "Turmeric powder",
    ],
    steps: [
      "Prepare the potato masala.",
      "Heat a dosa pan.",
      "Spread the dosa batter.",
      "Add potato masala.",
      "Fold the dosa and serve.",
    ],
  },
  {
    id: "chocolate-cake",
    title: "Chocolate Cake",
    emoji: "🍰",
    minutes: 50,
    difficulty: "Easy",
    cuisine: "Dessert",
    ingredients: [
      "Flour",
      "Cocoa powder",
      "Sugar",
      "Milk",
      "Butter",
    ],
    steps: [
      "Mix the dry ingredients.",
      "Add milk and melted butter.",
      "Mix until smooth.",
      "Pour into a cake pan.",
      "Bake until cooked through.",
    ],
  },
  {
    id: "vegetable-pasta",
    title: "Vegetable Pasta",
    emoji: "🍝",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Italian",
    ingredients: [
      "Pasta",
      "Carrots",
      "Capsicum",
      "Tomatoes",
      "Olive oil",
    ],
    steps: [
      "Cook the pasta.",
      "Chop the vegetables.",
      "Heat olive oil in a pan.",
      "Cook the vegetables.",
      "Add pasta and mix well.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
