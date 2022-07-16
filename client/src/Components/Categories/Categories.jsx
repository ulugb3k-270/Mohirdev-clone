import React from "react";
import Card from "./Card/Card";
import { courses } from "./courses";
import "./categories.scss";
import "./media.categories.scss"

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        <h2 className="categories__paragraph">Mohir tanlovlarni kategoriyalarga ko’ra amalga oshiring</h2>
        <div className="categories__grid">
          {courses.map((course) => (
            <Card key={course._id} course={course.course} src={course.src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
