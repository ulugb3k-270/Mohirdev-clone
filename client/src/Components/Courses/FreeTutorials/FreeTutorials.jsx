import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Card from "../Card/Card";

import "./freeTutorials.scss";
import "./media.freeTutorials.scss";

const FreeTutorials = ({ courses }) => {
  return (
    <section id="free-tutorials" className="free__tutorials container">
      <SectionHeader
        courses="HTML, CSS, Bootstrap"
        href="/"
        paragraph="ni bepul o’rganing"
      />
      <div className="freeTutorials__grid">
        {courses.map((course) => (
          <Card
            key={course?._id}
            category={course?.category}
            src={course?.src}
            author={course?.author}
            paragraph={course?.paragraph}
          />
        ))}
      </div>
    </section>
  );
};

export default FreeTutorials;
