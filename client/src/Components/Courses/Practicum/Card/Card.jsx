import React from "react";

import "./card.scss";
import "./media.card.scss"

import { Link } from "react-router-dom";

const Card = ({ src }) => {
  return (
    <div className="practicum__card">
      <Link to="/">
        <img src={src} alt="" />
      </Link>
    </div>
  );
};

export default Card;
