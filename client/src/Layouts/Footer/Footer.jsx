import React from "react";

// Styles
import "./footer.scss";
import "./media.footer.scss";

// React Router Dom
import { Link } from "react-router-dom";

// Data
import { footerCols } from "./data";

// Icons
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { MdRssFeed } from "react-icons/md";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__info">
            <p>
              Mohirdev ta'lim platformasi bilan o'zingizga qulay vaqtda,
              istalgan joyda, chegarasiz ta'lim oling!
            </p>
            <h4>
              <BsFillTelephoneFill />
              +998 91 005 66 00
            </h4>
            <h4>
              <AiOutlineMail /> info@mohirdev.uz
            </h4>
            <div className="footer__info-sm">
              <Link to="/">
                <FaFacebookF />
              </Link>
              <Link to="/">
                <AiOutlineInstagram />
              </Link>
              <Link to="/">
                <AiFillLinkedin />
              </Link>
              <Link to="/">
                <MdRssFeed />
              </Link>
              <Link to="/">
                <BsPinterest />
              </Link>
              <Link to="/">
                <AiFillYoutube />
              </Link>
            </div>
          </div>
          <div className="footer__col">
            <ul className="footer__col-list">
              <h2>Platforma</h2>
              {footerCols.platform.map((item) => (
                <li key={item._id} className="footer__col-item">
                  <Link to={item.href} className="footer__col-link">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="footer__col-list">
              <h2>Kompaniya</h2>
              {footerCols.company.map((item) => (
                <li key={item._id} className="footer__col-item">
                  <Link to={item.href} className="footer__col-link">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="footer__col-list">
            <h2>Praktikum</h2>
            {footerCols.practicum.map((item) => (
              <li key={item._id} className="footer__col-item">
                <Link to={item.href} className="footer__col-link">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="footer__col-list">
            <h2>Qo'llab-quvvatlash</h2>
            {footerCols.support.map((item) => (
              <li key={item._id} className="footer__col-item">
                <Link to={item.href} className="footer__col-link">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-container container">
          <p>2022 Mohirdev LLC. All Rights Reserved.</p>
          <div className="footer__bottom-payments">
            <p>To'lov usullari: </p>
            <img
              src="https://mohirdev.uz/wp-content/uploads/Frame-222-3.png"
              alt="payme"
            />
            <img
              src="https://mohirdev.uz/wp-content/uploads/Frame-223-3.png"
              alt="click"
            />
            <img
              src="https://mohirdev.uz/wp-content/uploads/visa-2.png"
              alt="visa"
            />
            <img
              src="https://mohirdev.uz/wp-content/uploads/mastercard-2.png"
              alt="mastercard"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
