import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Espresso",
  "Latte",
  "Cappuccino",
  "Mocha",
  "Cold Brew",
  "Desserts",
];

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    category: "Espresso",
    description: "Bold, concentrated shot of pure coffee flavor.",
    price: 3.5,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Double Espresso",
    category: "Espresso",
    description: "Extra strong shot for a powerful morning kick.",
    price: 4.0,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Cappuccino",
    category: "Cappuccino",
    description: "Rich espresso topped with velvety steamed milk foam.",
    price: 4.5,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Caramel Latte",
    category: "Latte",
    description: "Smooth espresso and milk with a sweet caramel touch.",
    price: 5.0,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Mocha",
    category: "Mocha",
    description: "A decadent mix of espresso, chocolate, and steamed milk.",
    price: 5.2,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Flat White",
    category: "Latte",
    description: "Espresso with a thin layer of micro-foam, smooth and strong.",
    price: 4.8,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    name: "Americano",
    category: "Espresso",
    description: "Classic espresso diluted with hot water for a light body.",
    price: 3.8,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Macchiato",
    category: "Espresso",
    description: "Espresso marked with a dollop of creamy milk foam.",
    price: 4.2,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Cold Brew",
    category: "Cold Brew",
    description: "Slow-steeped for 12 hours, smooth and refreshingly bold.",
    price: 4.9,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Vanilla Latte",
    category: "Latte",
    description: "Creamy latte infused with sweet, fragrant vanilla syrup.",
    price: 5.1,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Chocolate Cake",
    category: "Desserts",
    description: "Rich, moist chocolate cake with a smooth ganache layer.",
    price: 6.0,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Cheesecake",
    category: "Desserts",
    description: "Creamy classic cheesecake with a buttery graham crust.",
    price: 6.5,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80",
  },
];

const whyOurCoffee = [
  {
    id: 1,
    icon: "🌱",
    title: "Premium Beans",
    description: "Sourced from the finest farms around the world.",
  },
  {
    id: 2,
    icon: "🥛",
    title: "Fresh Milk",
    description: "Locally sourced, always fresh, never watered down.",
  },
  {
    id: 3,
    icon: "☕",
    title: "Handmade Daily",
    description: "Every drink crafted by hand with care and precision.",
  },
  {
    id: 4,
    icon: "🚚",
    title: "Fast Service",
    description: "Quick, friendly service without ever cutting corners.",
  },
];

const featuredDrink = {
  name: "Signature Caramel Macchiato",
  description:
    "Our best-selling drink: bold espresso layered with steamed milk, vanilla, and a swirl of rich caramel. A perfect balance of sweet and strong, crafted to be the highlight of your day.",
  price: 5.8,
  image:
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
};

// ===================== COMPONENT =====================

const Menu = ({ cartItems, setCartItems, search }) => {
  const [activeCategory, setActiveCategory] = useState("All");

 const filteredItems = menuItems.filter((item) => {
  const matchesCategory =
    activeCategory === "All" || item.category === activeCategory;

  const matchesSearch =
    item.name.toLowerCase().includes(search.toLowerCase());

  return matchesCategory && matchesSearch;
});

  const handleAddToCart = (coffee) => {
    const existingItem = cartItems.find(
      (item) => item.id === coffee.id
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === coffee.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...coffee,
          quantity: 1,
        },
      ]);
    }
  };

      
  return (
    <main className="bg-[#F8F5F2] dark:bg-[#121212] text-[#4B2E2B] dark:text-white font-sans">
      {/* ===================== HERO SECTION ===================== */}
      {/* pt-32 leaves space at the top for the Navbar */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20 bg-[#F8F5F2] dark:bg-[#121212]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left: text content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-[#E8DCCB] dark:bg-[#2a2a2a] text-[#6F4E37] dark:text-[#C89B6D] font-medium text-sm tracking-wide px-4 py-1.5 rounded-full mb-5">
              Handcrafted Daily
            </span>
            <h1 className="font-serif font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Our Coffee <span className="text-[#6F4E37]">Menu</span>
            </h1>
            <p className="text-base sm:text-lg text-[#4B2E2B]/70 dark:text-white/70 max-w-xl mx-auto lg:mx-0 mb-8">
              Explore our full range of handcrafted coffees and treats, made
              fresh every day with premium beans and genuine care.
            </p>
          </div>

          {/* Right: hero image */}
          <div className="flex-1 relative flex justify-center">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-[#E8DCCB] dark:bg-[#2a2a2a] rounded-full -z-10" />
            <img
              src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80"
              alt="Freshly brewed coffee menu"
              className="w-72 sm:w-96 lg:w-[420px] rounded-3xl shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===================== CATEGORIES SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F8F5F2] dark:bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#4B2E2B] dark:text-white">
              Browse by Category
            </h2>
            <p className="text-[#4B2E2B]/70 dark:text-white/70 max-w-md mx-auto">
              Find your favorite coffee style in seconds.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                  activeCategory === category
                    ? "bg-[#6F4E37] text-[#F8F5F2] shadow-md"
                    : "bg-[#E8DCCB] dark:bg-[#2a2a2a] text-[#4B2E2B] dark:text-white hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PRODUCTS SECTION ===================== */}
      <section id="full-menu" className="scroll-mt-24 py-16 px-6 md:px-12 lg:px-20 bg-[#E8DCCB] dark:bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#4B2E2B] dark:text-white">
              Full Menu
            </h2>
            <p className="text-[#4B2E2B]/70 dark:text-white/70 max-w-md mx-auto">
              Every item crafted fresh, just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#F8F5F2] dark:bg-[#2a2a2a] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif font-semibold text-xl">
                      {item.name}
                    </h3>
                    <span className="flex items-center gap-1 text-sm text-yellow-600 font-semibold">
                      ★ {item.rating.toFixed(1)}
                    </span>
                  </div>
                  <p className="text-[#4B2E2B]/70 dark:text-white/70 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-lg text-[#6F4E37]">
                      ${item.price.toFixed(2)}
                    </span>
                    <button onClick={()=>handleAddToCart(item)} className="bg-[#6F4E37] text-[#F8F5F2] text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#4B2E2B] hover:scale-105 transition-all duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURED DRINK SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F8F5F2] dark:bg-[#181818]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#4B2E2B] dark:text-white">
              Featured Drink
            </h2>
            <p className="text-[#4B2E2B]/70 dark:text-white/70 max-w-md mx-auto">
              This month's spotlight, loved by our customers.
            </p>
          </div>

          <div className="bg-[#E8DCCB] dark:bg-[#2a2a2a] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row items-center gap-8 p-6 lg:p-10">
            <div className="w-full lg:w-1/2">
              <img
                src={featuredDrink.image}
                alt={featuredDrink.name}
                className="w-full h-72 lg:h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="font-serif font-bold text-2xl sm:text-3xl mb-4">
                {featuredDrink.name}
              </h3>
              <p className="text-[#4B2E2B]/70 dark:text-white/70 text-base leading-relaxed mb-6">
                {featuredDrink.description}
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-6">
                <span className="font-serif font-bold text-2xl text-[#6F4E37]">
                  ${featuredDrink.price.toFixed(2)}
                </span>
                 <HashLink
                              smooth
                              to="/#popular-coffee"
                              className="bg-[#6F4E37] text-[#F8F5F2] font-semibold px-8 py-3.5 rounded-xl hover:bg-[#4B2E2B] hover:scale-105 transition-all duration-300"
                            >
                             Order Now
                            </HashLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHY OUR COFFEE SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#E8DCCB] dark:bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#4B2E2B] dark:text-white">
              Why Our Coffee
            </h2>
            <p className="text-[#4B2E2B]/70 dark:text-white/70 max-w-md mx-auto">
              What makes every cup worth coming back for.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyOurCoffee.map((feature) => (
              <div
                key={feature.id}
                className="bg-[#F8F5F2] dark:bg-[#2a2a2a] rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-serif font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#4B2E2B]/70 dark:text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#4B2E2B] dark:bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#F8F5F2]">
            Ready for your next cup?
          </h2>
          <p className="text-[#F8F5F2]/70 mb-8">
            Order online or stop by, we can't wait to serve you.
          </p>
          <HashLink
            smooth
            to="#full-menu"
            className="bg-[#6F4E37] text-[#F8F5F2] font-semibold px-8 py-3.5 rounded-xl hover:bg-[#4B2E2B] hover:scale-105 transition-all duration-300"
          >
           Order Now
         </HashLink>
        </div>
      </section>
    </main>
  );
};

export default Menu;