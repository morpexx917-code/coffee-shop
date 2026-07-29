import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import PageTransition from "../PageTransition";

const whyChooseUs = [
  {
    id: 1,
    icon: "🌱",
    title: "Premium Beans",
    description: "Sourced from the finest farms around the world.",
  },
  {
    id: 2,
    icon: "👩‍🍳",
    title: "Expert Baristas",
    description: "Skilled hands crafting every cup with precision and care.",
  },
  {
    id: 3,
    icon: "☕",
    title: "Fresh Daily",
    description: "Beans roasted in small batches for maximum freshness.",
  },
  {
    id: 4,
    icon: "🛋️",
    title: "Cozy Atmosphere",
    description: "A warm, relaxing space to sip, work, and unwind.",
  },
];

const journeySteps = [
  {
    id: 1,
    icon: "🌾",
    title: "Select Beans",
    description: "We handpick premium beans from trusted growers worldwide.",
  },
  {
    id: 2,
    icon: "🔥",
    title: "Roast",
    description: "Small-batch roasting brings out rich, balanced flavor.",
  },
  {
    id: 3,
    icon: "☕",
    title: "Brew",
    description: "Precisely brewed to extract every note of aroma and taste.",
  },
  {
    id: 4,
    icon: "🍵",
    title: "Serve",
    description: "Delivered fresh and hot, exactly the way you like it.",
  },
];

const stats = [
  { id: 1, value: 10, suffix: "+", label: "Years Experience" },
  { id: 2, value: 50, suffix: "k+", label: "Happy Customers" },
  { id: 3, value: 100, suffix: "%", label: "Premium Beans" },
  { id: 4, value: 25, suffix: "+", label: "Coffee Varieties" },
];

const teamMembers = [
  {
    id: 1,
    name: "Daniel Reyes",
    position: "Head Barista",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    description: "Crafting specialty drinks with over 8 years of experience.",
  },
  {
    id: 2,
    name: "Olivia Bennett",
    position: "Roast Master",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
    description: "Perfecting every roast profile for the ultimate flavor.",
  },
  {
    id: 3,
    name: "Marcus Lee",
    position: "Shop Manager",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    description: "Ensuring every visit feels warm, smooth, and memorable.",
  },
];

// ===================== COMPONENT =====================

const About = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));


  useEffect(() => {
    const duration = 1500; 
    const frameRate = 30; 
    const steps = duration / frameRate;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);

      setCounts(stats.map((stat) => Math.floor(stat.value * progress)));

      if (progress === 1) clearInterval(interval);
    }, frameRate);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition>
    <main className="bg-[#F8F5F2] dark:bg-[#121212] text-[#4B2E2B] dark:text-white font-sans">
      {/* ===================== HERO SECTION ===================== */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20 bg-[#F8F5F2] dark:bg-[#121212]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left: text content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-[#E8DCCB] dark:bg-[#2a2a2a] text-[#6F4E37] dark:text-[#C89B6D] font-medium text-sm tracking-wide px-4 py-1.5 rounded-full mb-5">
              Our Story
            </span>
            <h1 className="font-serif font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Crafted With <span className="text-[#6F4E37]">Passion</span>,
              Served With Love
            </h1>
            <p className="text-base sm:text-lg text-[#4B2E2B]/70 dark:text-white/70 max-w-xl mx-auto lg:mx-0 mb-4">
              We started with one simple idea: a cup of coffee should feel
              like a moment worth savoring. Every bean, every brew, and every
              smile behind the counter reflects that belief.
            </p>
            <p className="text-base sm:text-lg text-[#4B2E2B]/70 dark:text-white/70 max-w-xl mx-auto lg:mx-0 mb-8">
              From humble beginnings to a beloved neighborhood spot, we're
              proud to bring you coffee made with care, consistency, and a
              genuine love for the craft.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                 href="#our-team"
                 className="w-full sm:w-auto inline-block text-center bg-[#6F4E37] text-[#F8F5F2] font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:bg-[#4B2E2B] hover:scale-105 transition-all duration-300"
              >
  Meet Our Team
</a>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="flex-1 relative flex justify-center">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-[#E8DCCB] dark:bg-[#2a2a2a] rounded-full -z-10" />
            <img
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"
              alt="Barista preparing fresh coffee"
              className="w-72 sm:w-96 lg:w-[420px] rounded-3xl shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===================== OUR STORY SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F8F5F2] dark:bg-[#121212]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-6 text-[#4B2E2B] dark:text-white">
            Our Story
          </h2>
          <p className="text-[#4B2E2B]/70 dark:text-white/70 text-base sm:text-lg leading-relaxed">
            What began as a small counter with a handful of recipes has grown
            into a place our community calls home. Our passion for great
            coffee drives everything we do — from sourcing fresh, ethically
            grown beans to perfecting every pour. We believe the best cup
            comes from genuine care, and that same care shapes the experience
            we create for every customer who walks through our door.
          </p>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#E8DCCB] dark:bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#4B2E2B] dark:text-white">
              Why Choose Us
            </h2>
            <p className="text-[#4B2E2B]/70 dark:text-white/70 max-w-md mx-auto">
              What makes our coffee shop the perfect spot for every coffee
              lover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.id}
                className="bg-[#F8F5F2] dark:bg-[#2a2a2a] rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-[#4B2E2B]/70 dark:text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== COFFEE JOURNEY / PROCESS SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F8F5F2] dark:bg-[#181818]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#4B2E2B] dark:text-white">
              Our Coffee Journey
            </h2>
            <p className="text-[#4B2E2B]/70 dark:text-white/70 max-w-md mx-auto">
              From farm to cup, every step is handled with intention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((step, index) => (
              <div
                key={step.id}
                className="group bg-[#E8DCCB] dark:bg-[#2a2a2a] rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#6F4E37] text-[#F8F5F2] text-xl font-serif font-bold group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="font-serif font-semibold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-[#4B2E2B]/70 dark:text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STATISTICS SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#4B2E2B] dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={stat.id}>
                <p className="font-serif font-extrabold text-4xl sm:text-5xl text-[#F8F5F2] mb-2">
                  {counts[index]}
                  {stat.suffix}
                </p>
                <p className="text-[#F8F5F2]/70 text-sm sm:text-base tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TEAM SECTION ===================== */}
      <section id="our-team" className="scroll-mt-24 py-16 px-6 md:px-12 lg:px-20 bg-[#E8DCCB] dark:bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#4B2E2B] dark:text-white">
              Meet Our Team
            </h2>
            <p className="text-[#4B2E2B]/70 dark:text-white/70 max-w-md mx-auto">
              The passionate people behind every cup we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-[#F8F5F2] dark:bg-[#2a2a2a] rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-md"
                />
                <h3 className="font-serif font-semibold text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-[#6F4E37] dark:text-[#C89B6D] text-sm font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-[#4B2E2B]/70 dark:text-white/70 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#4B2E2B] dark:bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#F8F5F2]">
            Experience the Perfect Cup Today
          </h2>
          <p className="text-[#F8F5F2]/70 mb-8">
            Visit us, taste the difference, and become part of our coffee
            story.
          </p>
        <HashLink
         smooth
         to="/#popular-coffee"
         className="scroll-mt-24 bg-[#6F4E37] text-[#F8F5F2] font-semibold px-8 py-3.5 rounded-xl hover:bg-[#E8DCCB] hover:text-[#4B2E2B] hover:scale-105 transition-all duration-300"
        >
  Order Now
</HashLink>
        </div>
      </section>
    </main>
    </PageTransition>
  );
};

export default About;
