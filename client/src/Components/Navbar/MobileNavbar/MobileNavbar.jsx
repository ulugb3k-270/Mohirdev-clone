import React, { useState } from "react";

// Styles
import "./mobileNavbar.scss";

// React Router Dom
import { Link, NavLink } from "react-router-dom";

// Icons
import { VscHome } from "react-icons/vsc";
import { CgMenu } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { BsGrid } from "react-icons/bs";
import {AiOutlineInfoCircle} from 'react-icons/ai'

const MobileNavbar = () => {
  return (
    <nav className="mobile__nav">
      <ul className="mobile__nav-list">
        <li className="mobile__nav-item">
          <NavLink to="/" className="mobile__nav-link" itemID="home">
            <VscHome />
            <p>Home</p>
          </NavLink>
        </li>
        <li className="mobile__nav-item">
          <NavLink to="/courses" className="mobile__nav-link">
            <BsGrid />
            <p>Courses</p>
          </NavLink>
        </li>
        <li className="mobile__nav-item">
          <NavLink to="/about" className="mobile__nav-link" name="search">
            <AiOutlineInfoCircle />
            <p>About</p>
          </NavLink>
        </li>
        <li className="mobile__nav-item">
          <Link to="/" className="mobile__nav-link" name="menu">
            <CgMenu />
            <p>Menu</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
