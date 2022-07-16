import React from "react";
import "./PaidCourses.scss";
import "./media.PaidCourses.scss";

import Card from "../Card/Card";

const PaidCourses = ({ courses }) => {
  return (
    <section id="paid-courses" className="paid__courses container">
      <h2 className="paid__courses-paragraph">
        Mohirlar taklif qilayotgan pullik kurslar
      </h2>
      <div className="paid__courses-grid">
        {courses.map((course) => (
          <Card
            key={course._id}
            author={course?.author}
            category={course?.category}
            paragraph={course?.paragraph}
            isFree={course?.isFree}
            price={course?.price}
            src={course?.src}
            size={course?.size}
          />
        ))}
      </div>
    </section>
  );
};

export default PaidCourses;
