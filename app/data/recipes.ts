
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
      "Add mozzarella cheese and fresh basil.",
      "Bake until the crust is golden and the cheese melts.",
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
      "Onion",
      "Mustard seeds",
      "Turmeric powder",
      "Oil",
    ],
    steps: [
      "Boil and mash the potatoes.",
      "Cook onions and spices in a pan.",
      "Mix the potato filling with the onion mixture.",
      "Spread dosa batter on a hot pan.",
      "Add the potato filling and fold the dosa.",
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
      "Baking powder",
    ],
    steps: [
      "Mix flour, cocoa powder, sugar, and baking powder.",
      "Add milk and melted butter.",
      "Mix until the batter is smooth.",
      "Pour into a prepared cake tin.",
      "Bake until the cake is cooked through.",
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
      "Carrot",
      "Capsicum",
      "Onion",
      "Tomato sauce",
      "Salt",
      "Pepper",
    ],
    steps: [
      "Boil the pasta until cooked.",
      "Chop the vegetables.",
      "Cook the vegetables in a pan.",
      "Add tomato sauce, salt, and pepper.",
      "Add the cooked pasta and mix well.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
