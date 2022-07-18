import React from "react";
import "./python.scss";
import "./media.python.scss";
import Card from "../Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";
const Python = ({ courses }) => {
  return (
    <section id="python-courses" className="python container">
      <SectionHeader courses="Python" paragraph=" kurslari" />
      <div className="python__grid">
        {courses.map((course) => (
          <Card
            key={course._id}
            category={course?.category}
            paragraph={course?.paragraph}
            author={course?.author}
            src={course?.src}
            size={course?.size}
            isFree={course?.isFree}
            price={course?.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Python;
