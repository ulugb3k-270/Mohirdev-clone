import React from "react";
import "./card.scss";
import "./media.card.scss";

const Card = ({ size = "", testimonial, author, info }) => {
  return (
    <div className={`testimonials__card ${size}`}>
      <p className="testimonials__message">“{testimonial}“</p>
      <div className="testimonials__author">
        <h3 className="testimonials__author-name">{author}</h3>
        <p className="testimonials__author-info">{info}</p>
      </div>
    </div>
  );
};

export default Card;
