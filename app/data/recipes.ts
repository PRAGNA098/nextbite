
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
  },
  {
    id: "masala-dosa",
    title: "Masala Dosa",
    emoji: "🥞",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Indian",
  },
  {
    id: "chocolate-cake",
    title: "Chocolate Cake",
    emoji: "🍰",
    minutes: 50,
    difficulty: "Easy",
    cuisine: "Dessert",
  },
  {
    id: "vegetable-pasta",
    title: "Vegetable Pasta",
    emoji: "🍝",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Italian",
  },
];
