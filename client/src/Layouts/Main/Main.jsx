import React, { useState } from "react";

import "./main.scss";

import {
  Practicum,
  FreeTutorials,
  SamarBadrullayev,
  Python,
  PaidCourses,
  Contact,
} from "../../Components";

const Main = () => {
  const [courses, setCourses] = useState({
    practicum: [
      {
        _id: 1,
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/data_science-1.jpg?ssl=1",
      },
      {
        _id: 2,
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/full_stack_python-1.jpg?ssl=1",
      },
      {
        _id: 3,
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/MERN-1.jpg?ssl=1",
      },
      {
        _id: 4,
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/frontend-1.jpg?ssl=1",
      },
      {
        _id: 5,
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/java-1.jpg?ssl=1",
      },
      {
        _id: 6,
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/smm-1-1.jpg?ssl=1",
      },
      {
        _id: 7,
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/go-2.jpg?ssl=1",
      },
      {
        _id: 8,
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/candpython-1.jpg?ssl=1",
      },
      {
        _id: 9,
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/digital_marketing-1.jpg?ssl=1",
      },
    ],
    freeTutorials: [
      {
        _id: 1,
        category: "Bepul Kurslar",
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/htmlda-dasturlash.jpg?resize=540%2C330&ssl=1",
        author: "Ulug'bek Samigjonov",
        paragraph: "HTMLda dasturlash",
      },
      {
        _id: 2,
        category: "Bepul Kurslar",
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/CSS-boyicha-mukammal-kurs.jpg?resize=540%2C330&ssl=1",
        author: "Ulug'bek Samigjonov",
        paragraph: "CSS bo’yicha mukammal kurs",
      },
      {
        _id: 3,
        category: "Bepul Kurslar",
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/Bootstrap-boyicha-mukammal-kurs.jpg?resize=540%2C330&ssl=1",
        author: "Ulug'bek Samigjonov",
        paragraph: "Bootstrap 5 bo’yicha mukammal kurs",
      },
      {
        _id: 4,
        category: "Bepul Kurslar",
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/45-minutda-HTML.jpg?resize=540%2C330&ssl=1",
        author: "Zokir Rakhimov",
        paragraph: "45 Minutda HTML5",
      },
    ],
    samarBadrullayev: [
      {
        _id: 1,
        author: "Samar Badrullayev",
        paragraph:
          "ReactJS, Redux, NextJS & GraphQL To’liq Kurs. Real Loyihalar",
        isFree: false,
        price: "247,000 UZS",
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/Toliq-ReactJS-kursi.jpg?resize=540%2C330&ssl=1",
        size: "big",
        category: "React.JS",
      },
      {
        _id: 2,
        author: "Samar Badrullayev",
        paragraph: "JavaScript To’liq Kurs – “From 0 to Hero",
        isFree: true,
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/Javascript-toliq-kursi.jpg?resize=540%2C330&ssl=1",
        size: "big",
        category: "Javascript",
      },
    ],
    python: [
      {
        _id: 1,
        category: "Anvar Narzullayev",
        paragraph: "Maʼlumotlar tuzilmasi va algoritmlar",
        author: "Anvar Narzullayev",
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/Malumotlar-tuzilmasi-va-algoritmlar.jpg?resize=540%2C330&ssl=1",
        size: "big",
      },
      {
        _id: 2,
        category: "Anvar Narzullayev",
        paragraph: "Dasturlash Asoslari. Python",
        author: "Anvar Narzullayev",
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/Pythonda-dasturlash-asoslari.jpg?resize=540%2C330&ssl=1",
        size: "big",
      },
      {
        _id: 3,
        category: "Anvar Narzullayev",
        paragraph: "Django 3 – Pythonda Full stack Web Dasturlash",
        author: "Anvar Narzullayev",
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/Django-3-kursi.jpg?resize=540%2C330&ssl=1",
        size: "big",
      },
      {
        _id: 4,
        category: "Anvar Narzullayev",
        paragraph: "Mukammal Telegram Bot",
        author: "Anvar Narzullayev",
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/Frame-48.jpg?resize=540%2C330&ssl=1",
        size: "big",
        isFree: false,
        price: "247,000 UZS",
      },
    ],
    paidCourses: [
      {
        _id: 1,
        author: "Bexruz Xolmuminov",
        category: "Backend dasturlash",
        paragraph: "Professional Node.JS. Noldan e’lonlar saytini yaratamiz",
        isFree: false,
        price: "247,000 UZS",
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/Frame-49-2.jpg?resize=540%2C330&ssl=1",
        size: "medium",
      },
      {
        _id: 2,
        author: "Anvar Narzullaev",
        category: "Anvar Narzullaev",
        paragraph: "Mukammal Telegram Bot",
        isFree: false,
        price: "247,000 UZS",
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/Frame-48.jpg?resize=540%2C330&ssl=1",
        size: "medium",
      },
      {
        _id: 3,
        author: "Ahmadjon Xashimov",
        category: "Backend dasturlash",
        paragraph: "PHP dasturlash asoslari",
        isFree: false,
        price: "247,000 UZS",
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/Frame-48.jpg?resize=540%2C330&ssl=1",
        size: "medium",
      },
      {
        _id: 4,
        author: "Muhammadrasul",
        category: "Pullik Kurslar",
        paragraph: "HTML, CSS, Bootstrap, JS 7+ loyiha",
        isFree: false,
        price: "247,000 UZS",
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/versatka-kursi.jpg?resize=540%2C330&ssl=1",
        size: "medium",
      },
      {
        _id: 5,
        author: "Mohirdev",
        category: "Foundation",
        paragraph: "C++ dasturlash asoslari",
        isFree: false,
        price: "347,000 UZS",
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/C-dasturlash-asoslari.jpg?resize=540%2C330&ssl=1",
        size: "medium",
      },
      {
        _id: 6,
        author: "Samar Badriddinov",
        category: "JavaScript",
        paragraph: "JavaScript To’liq Kurs – “From 0 to Hero”",
        isFree: false,
        price: "247,000 UZS",
        src: "https://i0.wp.com/mohirdev.uz/wp-content/uploads/Javascript-toliq-kursi.jpg?resize=540%2C330&ssl=1",
        size: "medium",
      },
    ],
  });

  return (
    <main className="main">
      <Practicum courses={courses.practicum} />
      <FreeTutorials courses={courses.freeTutorials} />
      <SamarBadrullayev courses={courses.samarBadrullayev} />
      <Python courses={courses.python} />
      <h2 className="main__animatedText">
        Mohir <span>Dasturchi</span> bo’lish uchun ilk qadamlar
      </h2>
      <PaidCourses courses={courses.paidCourses} />
      <Contact />
    </main>
  );
};

export default Main;
