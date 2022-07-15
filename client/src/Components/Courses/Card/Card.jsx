import React from "react";

import "./Card.scss";
import "./media.Card.scss";

import { AiOutlineArrowRight, AiFillStar } from "react-icons/ai";

import { Link } from "react-router-dom";

const Card = ({ isFree = true, paragraph, author, src, price, size = "", category }) => {
  return (
    <div className={`card ${size}`}>
      <div className="card__header">
        <img src={src} alt="" />
        <div className="card__header-frame">
          <button>{isFree ? "Enroll Now" : "Add to card"}</button>
        </div>
      </div>
      <div className="card__main">
        <div className="card__main-rating">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>{paragraph}</h2>
        <p>
          By <span>{author}</span> in <br />{" "}
          <span>{category}</span>
        </p>
      </div>

      <div className="card__footer">
        <h3>{isFree ? "Bepul" : price}</h3>
        <Link to="" className="card__footer-btn">
          <AiOutlineArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Card;
