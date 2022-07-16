import React from "react";
import "./testimonials.scss";
import "./media.testimonials.scss";
import Card from "./Card/Card";
import { testimonials } from "./testimonialsData";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="testimonials__paragraph">
          Minglab foydalanuvchilardan iborat hamjamiyat.
        </h2>
        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial._id}
              testimonial={testimonial.testimonial}
              author={testimonial.author}
              info={testimonial.info}
              size={testimonial?.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
