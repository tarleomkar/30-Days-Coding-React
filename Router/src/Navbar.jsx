import React from "react";
import { Link } from "react-router-dom";
import "./App.css"

const Navbar = () => {
  return (
    <header>
        <span><Link to="/">Logo</Link></span>
  <nav>
    {/* <Link  to="/">Home</Link> */}
    <ul>
        <li>
        <Link  to="/">Home</Link>
        </li>
        <li>
            <Link  to="/contact">Contact</Link>
        </li>
        <li>
            <Link  to="/about">About</Link>
        </li>
        <li>
            <Link  to="/login"><button>Login</button></Link>
        </li>
    </ul>
  </nav>
  </header>
  )
};

export default Navbar;
