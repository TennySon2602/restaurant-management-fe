import { useState } from "react";
import { Plus, Edit, Trash2, ToggleLeft, ToggleRight, X } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  available: boolean;
  image: string;
  description?: string;
}

export default function ManagerMenu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { 
      id: 1, 
      name: "Caesar Salad", 
      category: "Appetizers", 
      price: 14, 
      available: true,
      image: "https://images.unsplash.com/photo-1746211108786-ca20c8f80ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWVzYXIlMjBzYWxhZCUyMGFwcGV0aXplciUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzczNjI4MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Classic Caesar with parmesan & croutons"
    },
    { 
      id: 2, 
      name: "Lobster Bisque", 
      category: "Appetizers", 
      price: 18, 
      available: true,
      image: "https://images.unsplash.com/photo-1722162176441-ee93b07b560f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2JzdGVyJTIwYmlzcXVlJTIwc291cCUyMGVsZWdhbnR8ZW58MXx8fHwxNzczNjI4MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Rich & creamy lobster soup"
    },
    { 
      id: 8, 
      name: "Bruschetta", 
      category: "Appetizers", 
      price: 12, 
      available: true,
      image: "https://images.unsplash.com/photo-1649373860956-0974e8583c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVzY2hldHRhJTIwYXBwZXRpemVyJTIwcGxhdGVkfGVufDF8fHx8MTc3MzYyODI2NXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Toasted bread with tomatoes & basil"
    },
    { 
      id: 3, 
      name: "Truffle Pasta", 
      category: "Mains", 
      price: 28, 
      available: true,
      image: "https://images.unsplash.com/photo-1771508558380-92ccad26e977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVmZmxlJTIwcGFzdGElMjBnb3VybWV0JTIwZGlzaHxlbnwxfHx8fDE3NzM2MjgyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Fresh pasta with truffle cream"
    },
    { 
      id: 4, 
      name: "Grilled Salmon", 
      category: "Mains", 
      price: 35, 
      available: false,
      image: "https://images.unsplash.com/photo-1759277513194-fee965299c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2FsbW9uJTIwcGxhdGVkJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NzM2MjgyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Atlantic salmon with seasonal vegetables"
    },
    { 
      id: 5, 
      name: "Wagyu Steak", 
      category: "Mains", 
      price: 65, 
      available: true,
      image: "https://images.unsplash.com/photo-1708388064894-878781b1db43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWd5dSUyMHN0ZWFrJTIwZ291cm1ldCUyMHBsYXRlZHxlbnwxfHx8fDE3NzM2MjgyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Premium Japanese beef"
    },
    { 
      id: 6, 
      name: "Chocolate Lava", 
      category: "Desserts", 
      price: 12, 
      available: true,
      image: "https://images.unsplash.com/photo-1673551490243-f29547426841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBsYXZhJTIwY2FrZSUyMGRlc3NlcnR8ZW58MXx8fHwxNzczNjIyOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Warm chocolate cake with molten center"
    },
    { 
      id: 7, 
      name: "Tiramisu", 
      category: "Desserts", 
      price: 10, 
      available: true,
      image: "https://images.unsplash.com/photo-1768341857441-9084cfd8676e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJhbWlzdSUyMGRlc3NlcnQlMjBlbGVnYW50JTIwcGxhdGVkfGVufDF8fHx8MTc3MzYyODI2NHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Classic Italian coffee-flavored dessert"
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

  const categories = ["All", "Appetizers", "Mains", "Desserts", "Drinks"];

  const toggleAvailability = (id: number) => {
    setMenuItems(
      menuItems.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  const openAddModal = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const openEditModal = (item: MenuItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const deleteItem = (id: number) => {
    if (confirm("Are you sure you want to delete this menu item?")) {
      setMenuItems(menuItems.filter(item => item.id !== id));
    }
  };

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[#2D2D2D]">Menu Management</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Manage menu items with food images and categories
          </p>
        </div>
        <button 
          onClick={openAddModal}
          className="px-6 py-3 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-lg flex items-center gap-2 transition-colors font-bold shadow-lg shadow-orange-100"
        >
          <Plus className="w-5 h-5" />
          Add Dish
        </button>
      </div>

      {/* Category Filter */}
      <div className="bg-card rounded-xl p-4 shadow-md">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors font-bold ${
                selectedCategory === category
                  ? "bg-[#FF6B35] text-white"
                  : "bg-background hover:bg-accent text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items Grid with Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`bg-card rounded-[2rem] overflow-hidden shadow-md border-2 transition-all hover:shadow-xl ${
              item.available ? "border-transparent hover:border-[#FF6B35]/30" : "border-gray-200 opacity-60"
            }`}
          >
            {/* Food Image */}
            <div className="relative aspect-[4/3]">
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {!item.available && (
                <div className="absolute inset-0 bg-[#2D2D2D]/60 backdrop-blur-[2px] flex items-center justify-center">
                  <span className="bg-white/90 px-4 py-2 rounded-full text-xs font-black text-[#2D2D2D] uppercase tracking-widest">
                    Out of Stock
                  </span>
                </div>
              )}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-lg">
                <span className="text-[#FF6B35] font-black">${item.price}</span>
              </div>
            </div>

            {/* Item Info */}
            <div className="p-6 space-y-3">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-black text-[#2D2D2D]">{item.name}</h4>
                </div>
                <p className="text-xs text-gray-500 font-medium line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-2">
                  <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                <button
                  onClick={() => toggleAvailability(item.id)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl transition-all font-bold text-xs uppercase tracking-widest"
                  style={{
                    backgroundColor: item.available ? "rgba(76, 175, 80, 0.1)" : "rgba(158, 158, 158, 0.1)",
                    color: item.available ? "#4CAF50" : "#9E9E9E"
                  }}
                >
                  {item.available ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />}
                  {item.available ? "Available" : "Unavailable"}
                </button>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={() => openEditModal(item)}
                  className="flex-1 p-2 bg-orange-50 hover:bg-orange-100 text-[#FF6B35] rounded-xl transition-colors flex items-center justify-center gap-1 font-bold text-xs"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button 
                  onClick={() => deleteItem(item.id)}
                  className="flex-1 p-2 bg-red-50 hover:bg-red-100 text-red-500 rounded-xl transition-colors flex items-center justify-center gap-1 font-bold text-xs"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <p className="text-sm text-muted-foreground">Total Items</p>
          <p className="text-2xl text-[#2D2D2D] mt-1 font-black">{menuItems.length}</p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <p className="text-sm text-muted-foreground">Available</p>
          <p className="text-2xl text-[#4CAF50] mt-1 font-black">
            {menuItems.filter((i) => i.available).length}
          </p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <p className="text-sm text-muted-foreground">Unavailable</p>
          <p className="text-2xl text-muted-foreground mt-1 font-black">
            {menuItems.filter((i) => !i.available).length}
          </p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <p className="text-sm text-muted-foreground">Categories</p>
          <p className="text-2xl text-[#2D2D2D] mt-1 font-black">{categories.length - 1}</p>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2D2D2D]/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-[#2D2D2D] p-8 text-white flex justify-between items-center">
              <div>
                <h3 className="text-white text-xl font-black">
                  {editingItem ? "Edit Menu Item" : "Add New Dish"}
                </h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">
                  Menu Management
                </p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 space-y-4">
              <p className="text-sm text-gray-500 text-center font-bold">
                This is a demo modal. In production, you would have form fields for:<br />
                Name, Category, Price, Image URL, Description, and Availability.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-4 bg-[#FF6B35] text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-orange-200 active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}