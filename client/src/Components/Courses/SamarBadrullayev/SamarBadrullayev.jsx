import React from "react";
import "./SamarBadrullayev.scss";
import "./media.SamarBadrullayev.scss";

import Card from "../Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";
const SamarBadrullayev = ({ courses }) => {
  return (
    <section id="samar-badrullayev-courses" className="sam container">
      <SectionHeader courses="Samar Badrullayev " paragraph="kurslari" />
      <div className="sam__grid">
        {courses.map((course) => (
          <Card
            key={course?._id}
            author={course?.author}
            paragraph={course?.paragraph}
            isFree={course?.isFree}
            price={course?.price}
            src={course?.src}
            size={course?.size}
            category={course?.category}
          />
        ))}
      </div>
    </section>
  );
};

export default SamarBadrullayev;
