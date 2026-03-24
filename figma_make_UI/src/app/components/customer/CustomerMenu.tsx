import { useState } from "react";
import { X } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface Dish {
  id: number;
  name: string;
  price: string;
  description: string;
  ingredients: string;
  image: string;
  category: string;
}

const dishes: Dish[] = [
  {
    id: 1,
    name: "Truffle Pasta",
    price: "$28",
    description: "Fresh pasta with black truffle shavings and parmesan",
    ingredients: "Pasta, Black Truffle, Parmesan, Cream",
    image: "https://images.unsplash.com/photo-1709429790175-b02bb1b19207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGFzdGElMjBkaXNoJTIwcGxhdGVkfGVufDF8fHx8MTc3MzM3NTExMXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Mains",
  },
  {
    id: 2,
    name: "Grilled Salmon",
    price: "$35",
    description: "Atlantic salmon with lemon butter sauce",
    ingredients: "Salmon, Lemon, Butter, Herbs",
    image: "https://images.unsplash.com/photo-1759277513194-fee965299c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2FsbW9uJTIwcGxhdGVkJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NzM0MDQ4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Mains",
  },
  {
    id: 3,
    name: "Wagyu Steak",
    price: "$65",
    description: "Premium wagyu beef with seasonal vegetables",
    ingredients: "Wagyu Beef, Vegetables, Red Wine Reduction",
    image: "https://images.unsplash.com/photo-1766557000370-e90df4bacea9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGRpbm5lciUyMHBsYXRlZCUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzczNDA0ODMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Mains",
  },
  {
    id: 4,
    name: "Caesar Salad",
    price: "$14",
    description: "Classic caesar with homemade dressing",
    ingredients: "Romaine, Parmesan, Croutons, Caesar Dressing",
    image: "https://images.unsplash.com/photo-1746211108786-ca20c8f80ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWVzYXIlMjBzYWxhZCUyMGZyZXNoJTIwcGxhdGVkfGVufDF8fHx8MTc3MzQwNDgzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Appetizers",
  },
  {
    id: 5,
    name: "Lobster Bisque",
    price: "$18",
    description: "Rich and creamy lobster soup",
    ingredients: "Lobster, Cream, Brandy, Herbs",
    image: "https://images.unsplash.com/photo-1711989874707-6a5ffe1798c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2JzdGVyJTIwZGlzaCUyMGdvdXJtZXQlMjBwbGF0ZWR8ZW58MXx8fHwxNzczNDA0ODMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Appetizers",
  },
  {
    id: 6,
    name: "Chocolate Lava",
    price: "$12",
    description: "Warm chocolate cake with vanilla ice cream",
    ingredients: "Chocolate, Flour, Eggs, Vanilla Ice Cream",
    image: "https://images.unsplash.com/photo-1722673353577-350697f89b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwZmFuY3klMjBwbGF0ZWR8ZW58MXx8fHwxNzczNDA0ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Desserts",
  },
  {
    id: 7,
    name: "Tiramisu",
    price: "$10",
    description: "Classic Italian dessert with espresso",
    ingredients: "Mascarpone, Espresso, Ladyfingers, Cocoa",
    image: "https://images.unsplash.com/photo-1749080143220-d308c07f80b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJhbWlzdSUyMGRlc3NlcnQlMjBwbGF0ZWR8ZW58MXx8fHwxNzczMzE3NzgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Desserts",
  },
];

const categories = ["All", "Appetizers", "Mains", "Desserts"];

export default function CustomerMenu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter((d) => d.category === selectedCategory);

  return (
    <div className="max-w-lg mx-auto pb-6">
      {/* Header */}
      <div className="bg-card border-b border-border p-4 sticky top-0 z-10">
        <h2 className="text-[#2D2D2D]">Our Menu</h2>
      </div>

      {/* Category Pills */}
      <div className="bg-background sticky top-[73px] z-10 border-b border-border">
        <div className="flex gap-2 p-4 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "bg-[#FF6B35] text-white"
                  : "bg-card text-foreground hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Dish Grid */}
      <div className="p-4 grid grid-cols-2 gap-4">
        {filteredDishes.map((dish) => (
          <button
            key={dish.id}
            onClick={() => setSelectedDish(dish)}
            className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow text-left"
          >
            <div className="aspect-square relative overflow-hidden">
              <ImageWithFallback
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h4 className="text-[#2D2D2D] mb-1">{dish.name}</h4>
              <p className="text-[#FF6B35]">{dish.price}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Dish Detail Slide Panel */}
      {selectedDish && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setSelectedDish(null)}
          />
          <div className="fixed inset-x-0 bottom-0 bg-card rounded-t-3xl shadow-2xl z-50 max-h-[80vh] overflow-y-auto animate-slide-up">
            <div className="sticky top-0 bg-card p-4 border-b border-border flex items-center justify-between">
              <h3 className="text-[#2D2D2D]">{selectedDish.name}</h3>
              <button
                onClick={() => setSelectedDish(null)}
                className="p-2 hover:bg-accent rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <div className="aspect-video relative overflow-hidden rounded-xl">
                <ImageWithFallback
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-[#FF6B35]">{selectedDish.price}</p>
                <span className="text-sm bg-accent px-3 py-1 rounded-full">
                  {selectedDish.category}
                </span>
              </div>

              <div>
                <h4 className="text-[#2D2D2D] mb-2">Description</h4>
                <p className="text-muted-foreground">{selectedDish.description}</p>
              </div>

              <div>
                <h4 className="text-[#2D2D2D] mb-2">Ingredients</h4>
                <p className="text-muted-foreground">{selectedDish.ingredients}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
