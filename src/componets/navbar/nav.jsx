import React, { useState, useContext } from "react";
import "./nav.css";
import { FiMenu, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../pages/cartcontext";


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
   const { cartItems } = useContext(CartContext);
  return (
    <>
      <div className="top-banner">
        Sign up and get 20% off to your first order. <a href="#">Sign Up Now</a>
      </div>
      <nav className="navbar">
        <button className="menu-icon mobile-only" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu/>
        </button>
        <div className="logo">SHOP.CO</div>
        <div className="nav-icons mobile-only">
          <FiSearch className="icon" />
          <FiShoppingCart className="icon" />
          <FiUser className="icon" />
        </div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to={'/'}>
          <a href="#">Shop</a>
          </Link>
         
          <a href="#">On Sale</a>
          <a href="#">New Arrivals</a>
          <a href="#">Brands</a>
        </div>
        <div className="desktop-extra desktop-only">
          <input type="text" placeholder="Search for products..." />
         
          <Link to={'/cart'}> 
          <div style={{ position: "relative", cursor: "pointer" }} onClick={() => navigate("/cart")}>
        <FaShoppingCart size={25}  className="icon"/>
        {cartItems.length > 0 && (
          <span style={{
            position: "absolute",
            top: -8,
            right: -8,
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px"
          }}>
            {cartItems.length}
          </span>
        )}
      </div>
      </Link>

          <FiUser className="icon" />
        </div>
      </nav>
    </>
  );
};

export default Nav;

