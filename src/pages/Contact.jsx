import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const contactInfo = [
  {
    id: 1,
    icon: "📍",
    title: "Address",
    lines: ["Coffee Street 25", "New York, NY 10001"],
  },
  {
    id: 2,
    icon: "📞",
    title: "Phone",
    lines: ["+1 (555) 123-4567"],
  },
  {
    id: 3,
    icon: "✉",
    title: "Email",
    lines: ["hello@coffeeshop.com"],
  },
  {
    id: 4,
    icon: "🕒",
    title: "Opening Hours",
    lines: ["Monday - Friday: 8:00 AM - 8:00 PM", "Saturday - Sunday: 9:00 AM - 10:00 PM"],
  },
];

const faqs = [
  {
    id: 1,
    question: "How can I place an order?",
    answer:
      "You can order directly at our counter, through our website menu, or by calling us at the phone number listed above.",
  },
  {
    id: 2,
    question: "Do you offer takeaway?",
    answer:
      "Yes! All of our drinks and desserts are available for takeaway, packaged fresh and ready to go.",
  },
  {
    id: 3,
    question: "Do you have free Wi-Fi?",
    answer:
      "Absolutely. We offer free high-speed Wi-Fi for all our customers, perfect for work or study sessions.",
  },
  {
    id: 4,
    question: "Can I reserve a table?",
    answer:
      "Yes, tables can be reserved by calling us directly or sending a message through the contact form above.",
  },
];

const socialLinks = [
  { id: 1, icon: FaFacebookF, label: "Facebook", href: "#" },
  { id: 2, icon: FaInstagram, label: "Instagram", href: "#" },
  { id: 3, icon: FaTwitter, label: "Twitter", href: "#" },
  { id: 4, icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { id: 5, icon: FaGithub, label: "GitHub", href: "#" },
];

const Contact = () => {
  // Contact form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Update a single form field as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle contact form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  // Handle newsletter submission
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() === "") return;
    setNewsletterSubscribed(true);
    setNewsletterEmail("");
  };

  return (
    <main className="bg-[#F8F5F2] dark:bg-[#121212] text-[#4B2E2B] dark:text-white font-sans">
      {/* ===================== HERO SECTION ===================== */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#E8DCCB] to-[#F8F5F2] dark:from-[#2a2a2a] dark:to-[#121212]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#E8DCCB] dark:bg-[#2a2a2a] text-[#6F4E37] dark:text-[#C89B6D] font-medium text-sm tracking-wide px-4 py-1.5 rounded-full mb-5">
            Get In Touch
          </span>
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-[#4B2E2B] dark:text-white">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-[#4B2E2B]/70 dark:text-white/70 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have questions, feedback,
            or want to place a special order, we're here to help.
          </p>
        </div>
      </section>

      {/* ===================== CONTACT INFORMATION SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F8F5F2] dark:bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => (
              <div
                key={item.id}
                className="bg-[#E8DCCB] dark:bg-[#2a2a2a]
rounded-xl p-8 text-center
shadow-md
transform
transition duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
hover:-translate-y-2
hover:shadow-2xl"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                {item.lines.map((line, index) => (
                  <p
                    key={index}
                    className="text-[#4B2E2B]/70 dark:text-white/70 text-sm leading-relaxed"
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONTACT FORM SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#E8DCCB] dark:bg-[#1e1e1e]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#4B2E2B] dark:text-white">
              Send Us a Message
            </h2>
            <p className="text-[#4B2E2B]/70 dark:text-white/70 max-w-md mx-auto">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#F8F5F2] dark:bg-[#2a2a2a] rounded-xl shadow-md p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* First Name */}
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full px-5 py-3.5 rounded-xl bg-[#F8F5F2] dark:bg-[#181818] text-[#4B2E2B] dark:text-white placeholder-[#4B2E2B]/50 dark:placeholder-white/50 border border-[#E8DCCB] dark:border-[#3a3a3a] focus:outline-none focus:ring-2 focus:ring-[#6F4E37] transition-all duration-300"
              />

              {/* Last Name */}
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-full px-5 py-3.5 rounded-xl bg-[#F8F5F2] dark:bg-[#181818] text-[#4B2E2B] dark:text-white placeholder-[#4B2E2B]/50 dark:placeholder-white/50 border border-[#E8DCCB] dark:border-[#3a3a3a] focus:outline-none focus:ring-2 focus:ring-[#6F4E37] transition-all duration-300"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-5 py-3.5 rounded-xl bg-[#F8F5F2] dark:bg-[#181818] text-[#4B2E2B] dark:text-white placeholder-[#4B2E2B]/50 dark:placeholder-white/50 border border-[#E8DCCB] dark:border-[#3a3a3a] focus:outline-none focus:ring-2 focus:ring-[#6F4E37] transition-all duration-300"
              />

              {/* Phone Number */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-5 py-3.5 rounded-xl bg-[#F8F5F2] dark:bg-[#181818] text-[#4B2E2B] dark:text-white placeholder-[#4B2E2B]/50 dark:placeholder-white/50 border border-[#E8DCCB] dark:border-[#3a3a3a] focus:outline-none focus:ring-2 focus:ring-[#6F4E37] transition-all duration-300"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full mb-6 px-5 py-3.5 rounded-xl bg-[#F8F5F2] dark:bg-[#181818] text-[#4B2E2B] dark:text-white placeholder-[#4B2E2B]/50 dark:placeholder-white/50 border border-[#E8DCCB] dark:border-[#3a3a3a] focus:outline-none focus:ring-2 focus:ring-[#6F4E37] transition-all duration-300"
            />

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              rows="5"
              className="w-full mb-6 px-5 py-3.5 rounded-xl bg-[#F8F5F2] dark:bg-[#181818] text-[#4B2E2B] dark:text-white placeholder-[#4B2E2B]/50 dark:placeholder-white/50 border border-[#E8DCCB] dark:border-[#3a3a3a] focus:outline-none focus:ring-2 focus:ring-[#6F4E37] transition-all duration-300 resize-none"
            />

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#6F4E37] text-[#F8F5F2] font-semibold px-8 py-3.5 rounded-xl shadow-md hover:bg-[#4B2E2B] hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>

            {/* Success message */}
            {formSubmitted && (
              <p className="mt-4 text-[#6F4E37] dark:text-[#C89B6D] font-medium text-sm">
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* ===================== MAP SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F8F5F2] dark:bg-[#181818]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#4B2E2B] dark:text-white">
              Find Us
            </h2>
            <p className="text-[#4B2E2B]/70 dark:text-white/70 max-w-md mx-auto">
              Come visit us in person, we'd love to serve you a fresh cup.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <iframe
              title="New York Coffee Shop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0983204691!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ===================== FAQ SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#E8DCCB] dark:bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#4B2E2B] dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-[#4B2E2B]/70 dark:text-white/70 max-w-md mx-auto">
              Answers to the questions we get asked the most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-[#F8F5F2] dark:bg-[#2a2a2a] rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-serif font-semibold text-lg mb-2">
                  {faq.question}
                </h3>
                <p className="text-[#4B2E2B]/70 dark:text-white/70 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SOCIAL MEDIA SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F8F5F2] dark:bg-[#121212]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#4B2E2B] dark:text-white">
            Follow Us
          </h2>
          <p className="text-[#4B2E2B]/70 dark:text-white/70 max-w-md mx-auto mb-8">
            Stay connected and follow our journey on social media.
          </p>

          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E8DCCB] dark:bg-[#2a2a2a] text-[#6F4E37] dark:text-[#C89B6D] shadow-md hover:bg-[#6F4E37] hover:text-[#F8F5F2] hover:scale-110 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== NEWSLETTER SECTION ===================== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#4B2E2B] dark:bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[#F8F5F2]">
            Join Our Coffee Club
          </h2>
          <p className="text-[#F8F5F2]/70 mb-8">
            Subscribe to get special offers, new arrivals, and brewing tips
            straight to your inbox.
          </p>

          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
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

          {newsletterSubscribed && (
            <p className="text-[#E8DCCB] mt-4 text-sm">
              Thanks for subscribing! ☕
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Contact;
