import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="primary-nav">
      <a className="shop-title">CakeShop</a>
      <div className="links">
        <NavLink to="/" className="link">
          HOME
        </NavLink>
        <NavLink to="about-us" className="link">
          ABOUT US
        </NavLink>
        <NavLink to="shop" className="link">
          SHOP
        </NavLink>
      </div>

      <a>
        <FontAwesomeIcon icon={faCartShopping} className="icon" />
      </a>
    </nav>
  );
}
