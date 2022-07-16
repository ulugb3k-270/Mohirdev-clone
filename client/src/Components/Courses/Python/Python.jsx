import React from "react";
import "./python.scss";
import "./media.python.scss";
import Card from "../Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";
const Python = ({ courses }) => {
  return (
    <div className="python container">
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

        <Card
          category="Anvar Narzullayev"
          paragraph="Dasturlash Asoslari. Python"
          author="Anvar Narzullayev"
          src="https://i0.wp.com/mohirdev.uz/wp-content/uploads/Pythonda-dasturlash-asoslari.jpg?resize=540%2C330&ssl=1"
          size="big"
        />
        <Card
          category="Anvar Narzullayev"
          paragraph="Django 3 – Pythonda Full stack Web Dasturlash"
          author="Anvar Narzullayev"
          src="https://i0.wp.com/mohirdev.uz/wp-content/uploads/Django-3-kursi.jpg?resize=540%2C330&ssl=1"
          size="big"
        />
      </div>
    </div>
  );
};

export default Python;
