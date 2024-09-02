import React from "react";
import Logo from "./Logo";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Error from "./Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RouterExample = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        {/* <Route path="/" element={<div>Home</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/about" element={<div>About</div>}></Route> */}
        <Route path="/logo" element={<Logo />}></Route>
        <Route path="/" element={Home}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<div>Login</div>}></Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterExample;
