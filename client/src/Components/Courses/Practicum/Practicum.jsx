import React from "react";

//Styles
import "./practicum.scss";
import "./media.practicum.scss";

import Card from "./Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";

const Practicum = ({ courses }) => {
  return (
    <>
      <SectionHeader
        paragraph="Kasbga yo’naltirilgan Praktikumlar"
        title="6 oyda 0dan ish topish darajasiga chiqing. Boshlang’ich bilim talab qilinmaydi."
      />
      <div className="practicum">
        {courses.map((course) => (
          <Card key={course?._id} src={course?.src} />
        ))}
      </div>
    </>
  );
};

export default Practicum;
