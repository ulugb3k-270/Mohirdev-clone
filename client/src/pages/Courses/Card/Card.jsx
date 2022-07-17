import React from "react";

import "./card.scss";
import "./media.card.scss";

import { AiFillStar } from "react-icons/ai";

// REACT_ROUTER_DOM
import { Link } from "react-router-dom";

const Card = ({ course }) => {
  const { src, author, title, authorImage, price, type, lessons } = course;

  return (
    <div className="courses__page-card">
      <div className="courses__page-card-frame-box">
        <img src={src} className="courses__page-card-img" alt="" />
        <div className="card__header-frame">
          <button>Ko'rish</button>
          <button>{price === "Bepul" ? "Enroll now" : "Savatga solish"}</button>
        </div>
      </div>

      <div className="courses__page-card-right">
        <div className="courses__page-card-about">
          <p className="courses__page-card-about-featured">Featured</p>
          <Link to="/courses">{title}</Link>
          <p className="courses__page-card-about-type">
            <span>{type}</span> <span>{lessons} Darslar</span>
          </p>
          <div className="courses__page-card-about-author">
            <img src={authorImage} alt={author} />
            <p>{author}</p>
          </div>
        </div>

        <div className="courses__page-card-about-end">
          <h2>{price}</h2>
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
