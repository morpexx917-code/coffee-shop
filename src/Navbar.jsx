import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  FaCoffee,
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import SearchBar from "./SearchBar";
import CartDropdown from "./CartDropdown";
import "./Navbar.css";

// Nav links shown in the center of the navbar
const navLinks = ["Home", "Menu", "About", "Contact"];

const Navbar = ({ cartItems, setCartItems, onSearch }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // On first load: restore theme only.
  // Cart is now owned and persisted by App.jsx, so Navbar no longer touches it.
// Restore theme on first load
useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === "dark";

  setIsDarkMode(isDark);

  document.documentElement.classList.toggle("dark", isDark);
  document.body.classList.toggle("dark", isDark);
}, []);

// Close the search bar when ESC is pressed
useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape") setIsSearchOpen(false);
  };

  window.addEventListener("keydown", handleEsc);

  return () => {
    window.removeEventListener("keydown", handleEsc);
  };
}, []);

// Switch between light and dark mode
const toggleTheme = () => {
  const newTheme = !isDarkMode;

  setIsDarkMode(newTheme);

  document.documentElement.classList.toggle("dark", newTheme);
  document.body.classList.toggle("dark", newTheme);

  localStorage.setItem("theme", newTheme ? "dark" : "light");
};

  // Send the typed search value up to App.jsx (which passes it to Home) in real time
 const handleSearchChange = (value) => {
  console.log("Navbar:", value);
  setSearchValue(value);
  if (onSearch) onSearch(value);
};

  // Total quantity across all cart items, shown on the badge
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Set active link and close mobile menu automatically
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* LEFT: Logo */}
          <div className="navbar-logo">
            <FaCoffee className="logo-icon" />
            <span className="logo-text">
              <span className="logo-coffee">Coffee</span>
              <span className="logo-shop">Shop</span>
            </span>
          </div>

          {/* CENTER: Nav links (hidden on mobile via CSS) */}
<ul className="navbar-links">
  {navLinks.map((link) => (
    <li key={link}>
      <NavLink
        to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
        end={link === "Home"}
        className={({ isActive }) =>
          `nav-link ${isActive ? "active" : ""}`
        }
      >
        {link}
      </NavLink>
    </li>
  ))}
</ul>

          {/* RIGHT: Search, Cart, Theme, Order Now, Hamburger */}
          <div className="navbar-actions">
            <button
              className="icon-btn"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <FaSearch />
            </button>

            <div className="cart-wrapper">
              <button
                className="icon-btn"
                onClick={() => setIsCartOpen(!isCartOpen)}
                aria-label="Cart"
              >
                <FaShoppingCart />
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </button>

              {isCartOpen && (
                <CartDropdown
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  onClose={() => setIsCartOpen(false)}
                />
              )}
            </div>

            <button
              className="icon-btn theme-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>

             <HashLink
              smooth
              to="/#popular-coffee"
              className="order-now-btn desktop-only"
            >
             Order Now
            </HashLink>

            {/* Hamburger - only visible on mobile via CSS */}
            <button
              className="icon-btn hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Animated search input, slides below navbar */}
        <SearchBar
          isOpen={isSearchOpen}
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
          onClose={() => setIsSearchOpen(false)}
        />
      </nav>

      {/* MOBILE MENU (slides in from the right) */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
       <ul className="mobile-links">
  {navLinks.map((link) => (
    <li key={link}>
      <NavLink
        to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
        className={({ isActive }) =>
          `nav-link ${isActive ? "active" : ""}`
        }
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {link}
      </NavLink>
    </li>
  ))}
</ul>
        <div className="mobile-extra">
          <button
            className="mobile-icon-btn"
            onClick={() => {
              setIsSearchOpen(true);
              setIsMobileMenuOpen(false);
            }}
          >
            <FaSearch /> Search
          </button>

          <button
            className="mobile-icon-btn"
            onClick={() => {
              setIsCartOpen(true);
              setIsMobileMenuOpen(false);
            }}
          >
            <FaShoppingCart /> Cart ({cartCount})
          </button>

          <HashLink
            smooth
            to="/#popular-coffee"
            className="order-now-btn full-width"
            onClick={() => setIsMobileMenuOpen(false)}
          >
           Order Now
         </HashLink>
        </div>
      </div>

      {/* Dark overlay behind the mobile menu, click to close */}
      {isMobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;