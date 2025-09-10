import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
      <div className="footer-container">
        {/* Logo Section */}
        <div>
          <div className="footer-logo">
            <div className="logo">EC</div>
            <span style={{ fontWeight: 700, fontSize: "18px" }}>ShopMate</span>
          </div>
          <p style={{ color: "#94a3b8", fontSize: "14px" }}>
            Your trusted e-commerce partner for essentials and lifestyle products.
          </p>
          {/* Social Links */}
          <div className="social-links">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">🐦</a>
            <a href="#">📸</a>
          </div>
        </div>

        {/* Shop Section */}
        <div className="footer-section">
          <h4>Shop</h4>
          <a href="#">New Arrivals</a>
          <a href="#">Best Sellers</a>
          <a href="#">Discounts</a>
          <a href="#">Gift Cards</a>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Press</a>
        </div>

        {/* Help Section */}
        <div className="footer-section">
          <h4>Help</h4>
          <a href="#">Contact</a>
          <a href="#">Returns</a>
          <a href="#">FAQs</a>
          <a href="#">Shipping</a>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h4>Newsletter</h4>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 ShopMate. All rights reserved. | Privacy Policy | Terms
      </div>
    </footer>

        </div>
    )
}

export default Footer