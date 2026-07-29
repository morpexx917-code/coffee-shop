
import { FaTimes } from "react-icons/fa";
import "./Navbar.css";

const SearchBar = ({ isOpen, searchValue, onSearchChange, onClose }) => {
  return (
    <div className={`search-bar ${isOpen ? "open" : ""}`}>
      <input
        type="text"
        className="search-input"
        placeholder="Search coffee..."
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        autoFocus={isOpen}
      />
      <button
        className="search-close-btn"
        onClick={onClose}
        aria-label="Close search"
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default SearchBar;