import React from "react";

// Styles
import "./navbar.scss";
import "./media.navbar.scss";

// React Router Dom
import { Link } from "react-router-dom";

// Icons
import { RiArrowDownSFill } from "react-icons/ri";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav__left">
          <Link to="/" className="nav__logo">
            <img
              src="https://mohirdev.uz/wp-content/uploads/Untitled-1-1.png"
              alt="logo"
            />
          </Link>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Tezkor Kurslar
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Praktikuk Kurslar
              </Link>
              <RiArrowDownSFill />
              <ul className="nav__item-dropdown">
                <li className="nav__item-dropdown-item">
                  <Link to="/">Ilk Qadam: C va Python asoslari</Link>
                </li>
                <li className="nav__item-dropdown-item">
                  <Link to="/">Data Science</Link>
                </li>
                <li className="nav__item-dropdown-item">
                  <Link to="/">Full Stack Python</Link>
                </li>
                <li className="nav__item-dropdown-item">
                  <Link to="/">Frontend</Link>
                </li>
                <li className="nav__item-dropdown-item">
                  <Link to="/">Goolang</Link>
                </li>
                <li className="nav__item-dropdown-item">
                  <Link to="/">IOS Developer</Link>
                </li>
                <li className="nav__item-dropdown-item">
                  <Link to="/">Android Developer</Link>
                </li>
                <li className="nav__item-dropdown-item">
                  <Link to="/">Java Developer</Link>
                </li>
                <li className="nav__item-dropdown-item">
                  <Link to="/">Digital Marketing</Link>
                </li>
              </ul>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Biz Haqimizda
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav__right">
          <div className="nav__right-wrapper">
            <Link to="#modal-login">Kirish | </Link>
            <Link to="#modal-register">Ro'yxatdan o'tish</Link>
          </div>
        </div>
      </nav>
      <MobileNavbar />
    </>
  );
};

export default Navbar;