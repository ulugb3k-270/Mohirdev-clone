import React, { useState } from "react";

// Styles
import "./mobileNavbar.scss";

// React Router Dom
import { Link } from "react-router-dom";

// Icons
import { VscHome } from "react-icons/vsc";
import { CgMenu } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { BsGrid } from "react-icons/bs";

// Compoents
import MobileModal from "../MobileModal/MobileModal";

const MobileNavbar = () => {
  return (
    <nav className="mobile__nav">
      <ul className="mobile__nav-list">
        <li className="mobile__nav-item">
          <Link to="#home" className="mobile__nav-link" itemID="home">
            <VscHome />
            <p>Home</p>
          </Link>
        </li>
        <li className="mobile__nav-item">
          <Link to="#category" className="mobile__nav-link">
            <MobileModal text="Category" />
            <BsGrid />
            <p>Category</p>
          </Link>
        </li>
        <li className="mobile__nav-item">
          <Link to="#search" className="mobile__nav-link" name="search">
            <MobileModal text="Search" />
            <IoIosSearch />
            <p>Search</p>
          </Link>
        </li>
        <li className="mobile__nav-item">
          <Link to="#menu" className="mobile__nav-link" name="menu">
            <MobileModal text="Menu" />
            <CgMenu />
            <p>Menu</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
