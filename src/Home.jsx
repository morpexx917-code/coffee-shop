import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import PageTransition from "./PageTransition";
import { HashLink } from "react-router-hash-link";
import "./Home.css";

const categories = [
  {
    id: 1,
    title: "Espresso",
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "Latte",
    image:
      "https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Cappuccino",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    title: "Mocha",
    image:
      "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=400&q=80",
  },
];

const features = [
  { id: 1, icon: "🌱", title: "Premium Beans", description: "Sourced from the finest farms around the world." },
  { id: 2, icon: "☕", title: "Fresh Coffee", description: "Roasted in small batches for maximum freshness." },
  { id: 3, icon: "🚚", title: "Fast Delivery", description: "Your coffee delivered hot and fast, right to your door." },
  { id: 4, icon: "🛋️", title: "Cozy Atmosphere", description: "A warm, relaxing space to sip, work, and unwind." },
];

const testimonials = [
  { id: 1, name: "Emily Carter", review: "The best latte I've had in the city. So cozy and the staff are always friendly!", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80", stars: 5 },
  { id: 2, name: "James Miller", review: "Their espresso is rich and bold, exactly how I like it. My daily stop now.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80", stars: 5 },
  { id: 3, name: "Sophia Lee", review: "Fresh beans, fast service, and a beautiful space to relax. Highly recommend!", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80", stars: 4 },
];


const coffeeNames = ["Cappuccino", "Latte", "Espresso", "Mocha", "Americano", "Flat White"];
const coffeeDescriptions = [
  "Rich espresso topped with velvety steamed milk foam.",
  "Smooth espresso blended with silky steamed milk.",
  "Bold, concentrated shot of pure coffee flavor.",
  "A decadent mix of espresso, chocolate, and steamed milk.",
  "Classic espresso diluted with hot water for a light body.",
  "Espresso with a thin layer of micro-foam, smooth and strong.",
];

const coffeeImages = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600",
  "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=600",
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600",
  "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=600",
];

const Home = ({
  cartItems,
  setCartItems,
  search,
}) => {

  const [coffeeList, setCoffeeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredCoffee = coffeeList.filter((coffee) =>
  coffee.name.toLowerCase().includes((search || "").toLowerCase())
);

  useEffect(() => {
    const fetchCoffee = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("https://api.sampleapis.com/coffee/hot");
        console.log(response.data);
        const transformed = response.data.slice(0, 6).map((coffee, index) => ({
            
        id: coffee.id,
        name: coffee.title,
        description: coffee.description,
        image: coffeeImages[index],
        price: (Math.random() * 8 + 3).toFixed(2),
        rating: +(Math.random() * 1 + 4).toFixed(1),
}));
        setCoffeeList(transformed);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCoffee();
  }, []);

   const handleAddToCart = (coffee) => {
  const existingItem = cartItems.find((item) => item.id === coffee.id);

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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() === "") return;
    setSubscribed(true);
    setEmail("");
  };

  return (
     <PageTransition>
    <main className="bg-[#F8F5F2] dark:bg-[#121212] text-[#4B2E2B] dark:text-white font-sans">
      {/* ===================== HERO SECTION ===================== */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20 bg-[#F8F5F2] dark:bg-[#121212]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left: text content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-[#E8DCCB] dark:bg-[#2a2a2a] text-[#6F4E37] dark:text-[#C89B6D] font-medium text-sm tracking-wide px-4 py-1.5 rounded-full mb-5">
              Freshly Roasted, Daily
            </span>
            <h1 className="font-serif font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Your Perfect Cup of <span className="text-[#6F4E37]">Coffee</span> Starts Here
            </h1>
            <p className="text-base sm:text-lg text-[#4B2E2B]/70 dark:text-white/70 max-w-xl mx-auto lg:mx-0 mb-8">
              Handpicked beans, carefully roasted, and brewed with love. Come taste the difference in every single sip.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
             <a
  href="#popular-coffee"
  className="w-full sm:w-auto inline-block text-center bg-[#6F4E37] text-[#F8F5F2] font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:bg-[#4B2E2B] hover:scale-105 transition-all duration-300"
>
  Order Now
</a>
          <HashLink
            smooth
            to="/menu#full-menu"
            className="w-full sm:w-auto text-center border-2 border-[#6F4E37] text-[#6F4E37] font-semibold px-8 py-3.5 rounded-xl hover:bg-[#6F4E37] hover:text-[#F8F5F2] hover:scale-105 transition-all duration-300"
          >Explore Menu </HashLink>

            </div>
          </div>

          {/* Right: hero image */}
          <div className="flex-1 relative flex justify-center">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-[#E8DCCB] dark:bg-[#2a2a2a] rounded-full -z-10" />
            <img
              src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80"
              alt="Freshly brewed cup of coffee"
              className="w-72 sm:w-96 lg:w-[420px] rounded-3xl shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===================== CATEGORIES SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F8F5F2] dark:bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#4B2E2B] dark:text-white">Shop by Category</h2>
            <p className="text-[#4B2E2B]/70 dark:text-white/70 max-w-md mx-auto">
              Explore our favorite coffee styles, made fresh for every mood.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group bg-[#E8DCCB] dark:bg-[#2a2a2a] rounded-xl p-6 text-center cursor-pointer shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-serif font-semibold text-lg">{category.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== POPULAR COFFEE SECTION ===================== */}
      <section id="popular-coffee" className="py-16 px-6 md:px-12 lg:px-20 bg-[#E8DCCB] dark:bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#4B2E2B] dark:text-white">Our Popular Coffee</h2>
            <p className="text-[#4B2E2B]/70 dark:text-white/70 max-w-md mx-auto">
              Loved by our customers, brewed to perfection every single time.
            </p>
          </div>

          {/* Loading spinner */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="w-12 h-12 border-4 border-[#6F4E37]/30 border-t-[#6F4E37] rounded-full animate-spin" />
            </div>
          )}

          {/* Error message */}
          {!loading && error && (
            <div className="text-center py-20">
              <p className="text-[#4B2E2B]/70 dark:text-white/70 text-lg">Unable to load coffee. Please try again later.</p>
            </div>
          )}

          {/* Coffee cards */}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCoffee.map((coffee) => (
                
                <div
                  key={coffee.id}
                  className="bg-[#F8F5F2] dark:bg-[#2a2a2a] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={coffee.image}
                      alt={coffee.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif font-semibold text-xl">{coffee.name}</h3>
                      <span className="flex items-center gap-1 text-sm text-yellow-600 font-semibold">
                        ★ {coffee.rating.toFixed(1)}
                      </span>
                    </div>
                    <p className="text-[#4B2E2B]/70 dark:text-white/70 text-sm mb-4 leading-relaxed">{coffee.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-lg text-[#6F4E37]">${coffee.price}</span>
                     <button
                  onClick={() => handleAddToCart(coffee)}
                     className="bg-[#6F4E37] text-[#F8F5F2] text-sm font-semibold px-5 py-2.5 rounded-xl cursor-pointer hover:bg-[#4B2E2B] hover:scale-105 transition-all duration-300"
>
   Add to Cart
</button>

                    </div>
                  </div>
                </div>
              ))}
              
            </div>
            
          )}
          
        </div>
      </section>

      {/* ===================== WHY CHOOSE US SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F8F5F2] dark:bg-[#181818]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#4B2E2B] dark:text-white">Why Choose Us</h2>
            <p className="text-[#4B2E2B]/70 dark:text-white/70 max-w-md mx-auto">
              What makes our coffee shop the perfect spot for every coffee lover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-[#E8DCCB] dark:bg-[#2a2a2a] rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-serif font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-[#4B2E2B]/70 dark:text-white/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#E8DCCB] dark:bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#4B2E2B] dark:text-white">What Our Customers Say</h2>
            <p className="text-[#4B2E2B]/70 dark:text-white/70 max-w-md mx-auto">Real stories from the people who love our coffee.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#F8F5F2] dark:bg-[#2a2a2a] rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-yellow-600 mb-4">
                  {"★".repeat(testimonial.stars)}
                  {"☆".repeat(5 - testimonial.stars)}
                </div>
                <p className="text-[#4B2E2B]/80 dark:text-white/80 text-sm leading-relaxed mb-6 italic">"{testimonial.review}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover shadow-md"
                  />
                  <span className="font-serif font-semibold">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== NEWSLETTER SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#4B2E2B] dark:bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#F8F5F2]">Join Our Coffee Club</h2>
          <p className="text-[#F8F5F2]/70 mb-8">
            Subscribe to get special offers, new arrivals, and brewing tips straight to your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 max-w-sm px-5 py-3.5 rounded-xl bg-[#F8F5F2] text-[#4B2E2B] placeholder-[#4B2E2B]/50 focus:outline-none focus:ring-2 focus:ring-[#6F4E37] transition-all duration-300"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#6F4E37] text-[#F8F5F2] font-semibold px-8 py-3.5 rounded-xl hover:bg-[#E8DCCB] hover:text-[#4B2E2B] hover:scale-105 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>

          {subscribed && <p className="text-[#E8DCCB] mt-4 text-sm">Thanks for subscribing! ☕</p>}
        </div>
      </section>
    </main>
    </PageTransition>
  );
};

export default Home;
