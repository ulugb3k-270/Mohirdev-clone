import React, { useState } from "react";

// Styles
import "./courses.scss";
import "./media.courses.scss";

// COMPONENTS
import Card from "./Card/Card";

// MUI
import { InputLabel, MenuItem, Select } from "@material-ui/core";

// DATA
import { allCourses } from "./data";
import { useEffect } from "react";

const Courses = () => {
  const [filter, setFilter] = useState("");
  const [courses, setCourses] = useState(allCourses);

  function sortByName(a, b) {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
  
    let comparison = 0;
    if (titleA > titleB) {
      comparison = 1;
    } else if (titleA < titleB) {
      comparison = -1;
    }
    return comparison;
  }
  

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);

    switch (e.target.value) {
      case "Yangi Kurslar":
        return setCourses(allCourses.sort((a, b) => a._id - b._id));

      case "Eski Kurslar":
        return setCourses(allCourses.sort((a, b) => b._id - a._id));

      case "Kurs nomi (A-Z)":
        return setCourses(allCourses.sort(sortByName));

      case "Kurs nomi (Z-A)":
        return setCourses(allCourses.sort(sortByName).reverse());

      default:
        return setCourses(allCourses);
    }
  };

  console.log(allCourses)

  return (
    <section className="courses" id="courses">
      <div className="courses__container container">
        <div className="courses__top">
          <h2>Courses</h2>
        </div>
        <p className="courses__title">
          Barcha kurslar <span>ro'yxati</span>
        </p>
        <div className="courses__filter">
          <InputLabel id="demo-simple-select-standard-label">
            Kurs Tanlash
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={filter}
            onChange={handleChangeFilter}
            label="Kursni Tanlash"
            name="course"
            className="contact__form-input"
          >
            <MenuItem value="Yangi Kurslar">Yangi Kurslar</MenuItem>
            <MenuItem value="Eski Kurslar">Eski Kurslar</MenuItem>
            <MenuItem value="Kurs nomi (A-Z)">Kurs nomi (A-Z)</MenuItem>
            <MenuItem value="Kurs nomi (Z-A)">Kurs nomi (Z-A)</MenuItem>
          </Select>
        </div>

        <div className="courses__list">
          {courses.map((course) => (
            <Card key={course._id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
