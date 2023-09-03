import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsCaretDownFill } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Header.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="left">
        <Link className="navTitle" to="/"><h2>e-Marketplace</h2></Link>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
        </div>
      </div>

        {/* right  */}
      <div className="right">
        <Link to="/search"><IoSearchOutline/></Link>
        <Link to="/Cart"><AiOutlineShoppingCart/></Link>
        <Link to="/login"><BiUser/></Link>
      </div>
    </div>
  );
};

export default Navbar;
