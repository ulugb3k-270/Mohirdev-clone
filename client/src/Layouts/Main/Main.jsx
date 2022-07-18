import React, { useState } from "react";

import "./main.scss";

import {
  Practicum,
  FreeTutorials,
  SamarBadrullayev,
  Python,
  PaidCourses,
  Contact,
  Categories,
  Banner,
  Testimonials,
} from "../../Components";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCourses } from "../../actions/courses";

import Typed from "react-typed";

const Main = () => {
  const { allCourses } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  // GET ALL COURSES WHEN PAGE LOADS
  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  return (
    <main className="main">
      {allCourses?.courses && (
        <>
          <Practicum courses={allCourses?.courses?.practicum} />
          <FreeTutorials courses={allCourses?.courses?.freeTutorials} />
          <SamarBadrullayev courses={allCourses?.courses?.samarBadrullayev} />
          <Python courses={allCourses?.courses?.python} />
          <h2 className="main__animatedText">
            Mohir{" "}
            <Typed
              strings={["Dasturchi", "Injiner", "Olim"]}
              typeSpeed={70}
              backSpeed={70}
              loop
            />
            ilk qadamlar
          </h2>
          <PaidCourses courses={allCourses?.courses?.paidCourses} />
          <Contact />
          <Categories />
          <Banner />
          <Testimonials />
        </>
      )}
    </main>
  );
};

export default Main;
