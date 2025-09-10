import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div>
      <header className="nav-wrap">
        <div className="container">
          <a className="brand" href="#">
            <div className="logo">EC</div>
            <div>
              <h1>ShopMate</h1>
              <p>Daily essentials</p>
            </div>
          </a>

          <nav>
            <div
              className={`nav-links ${menuOpen ? "active" : ""}`}
              ref={navRef}
            >
              <Link className="nav-list" to="/home">Home</Link>
              <Link className="nav-list" to="/shop">Shop</Link>
              <Link className="nav-list" to="/categories">Categories</Link>
              <Link className="nav-list" to="/deals">Deals</Link>
              <Link className="nav-list" to="/about">About</Link>
              <Link className="nav-list" to="/contact">Contact</Link>
            </div>
          </nav>

          <div className="actions">
            <form className="search">
              <input type="search" placeholder="Search products" />
            </form>
            <button className="icon-btn">❤</button>
            <button className="icon-btn cart">
              🛒<span className="badge">3</span>
            </button>
            <button className="icon-btn">👤</button>
            <button
              className={`icon-btn hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              ref={toggleRef}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <main style={{ padding: "40px", maxWidth: "1200px", margin: "auto" }}>
        <h2>Example content</h2>
        <p>This updated footer includes a newsletter form and social icons.</p>
      </main>
    </div>
  );
};

export default Navbar;
