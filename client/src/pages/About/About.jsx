import React from "react";

import "./about.scss";
import "./media.about.scss";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about container">
      <div className="courses__top">
        <h2>Biz Haqimizda</h2>
      </div>

      <div className="about__us">
        <img
          src="https://i0.wp.com/mohirdev.uz/wp-content/uploads/TDV_M16_05-1.png?ssl=1"
          alt="about-img"
        />
        <div className="about__us-right">
          <h3>Uydan chiqmasdan o’rganing.</h3>
          <p>
            <b>Mohirdev.uz </b> - har kimga, hamma joyda ilm olish imkoniyatini
            beruvchi ta’lim platformasidir. Saytga qo’yilgan kurslar{" "}
            <Link to="#">mobil, </Link>
            <Link to="#">Web dasturlash, </Link>
            <Link to="#">axborot xavfsizligi, </Link>
            <Link to="#">ma’lumotlar bazasi bilan ishlash, </Link>
            <Link to="#"> suniy intellekt, </Link> kabi mavzularni o'z ichiga
            qamrab olgan. Hozirda platformada 1500 dan ortiq foydalanuvchi
            ro'yxatdan o'tgan
            <br />
            <br />
            <Link to="#">Dasturlash kurslari</Link>dagi tillar:{" "}
            <Link to="#">Python,</Link> <Link to="#">Javascript,</Link>{" "}
            <Link to="#">HTML,</Link> <Link to="#">CSS,</Link>{" "}
            <Link to="#">Bootstrap,</Link> <Link to="#">Flutter,</Link>{" "}
            <Link to="#">C++</Link> va boshqalar.
            <br />
            <br />
            Bizning platformamizga qo’yilgan har bir kurs{" "}
            <Link to="#">tajribali mutaxasislar </Link> tomonidan tayyorlanadi.
            Ularning bir nechtasi xususiy va davlat ta’lim muassasalarida
            o’qituvchi bo’lib, yoshlarga bilim berib kelishmoqda.
            <br />
            <br />
            <b>Manzil:</b> Toshkent shahar, Yunusobod tumani Bog’ishamol
            ko‘chasi, 90 uy. STIR 308980674, THSHT 152, DBIBT 79994, IFUT 63120,
          </p>
        </div>
      </div>

      <div className="about__publication">
        <h2>Nashrlar biz haqimizda</h2>
        <p>
          Azon.uz:{" "}
          <Link
            target="_blank"
            to="https://azon.uz/content/views/mohirdev-platformasi-500-000-investiciy"
          >
            <b>“Mohirdev” platformasi $500 000 investitsiya jalb qildi!</b>
          </Link>
        </p>
        <p>
          Spot.uz:{" "}
          <Link
            target="_blank"
            to="https://www.spot.uz/oz/2022/02/05/mohirdev/"
          >
            <b>
              Mohirdev: qanday qilib Malayziya universiteti o’qituvchisi o’zbek
              tilidagi ta’lim startapini ishga tushirdi va $500 000 investitsiya
              jalb etdi
            </b>
          </Link>
        </p>
        <p>
          Kun.uz:{" "}
          <Link
            target="_blank"
            to="https://kun.uz/uz/news/2021/12/06/ozbekistonlik-dasturchilar-yaratgan-talim-platformasi-mukofot-jamgarmasi-500-ming-dollarlik-xalqaro-tanlov-finaliga-chiqdi"
          >
            <b>
              O‘zbekistonlik dasturchilar yaratgan ta’lim platformasi mukofot
              jamg‘armasi 500 ming dollarlik xalqaro tanlov finaliga chiqdi
            </b>
          </Link>
        </p>
      </div>

      <div className="about__practicum">
        <h2>Mohirdev Praktikum</h2>

        <div className="about__practicum-team">
          <img
            src="https://i0.wp.com/mohirdev.uz/wp-content/uploads/Mohirdev-Praktikum-jamoasi-1.jpg?resize=1024%2C379&ssl=1"
            alt="mohirdev-team"
          />
          <small>Mohirdev Praktikum kurslari o’qituvchilari</small>
        </div>

        <p>
          Odatiy <Link to="#">dasturlash kurslari</Link>dan tashqari,{" "}
          <strong>Mohirdev</strong> platformasida Praktikum kurslari ham yo’lga
          qo’yildi. <strong>Praktikum darslari</strong> bir nechta kurslardan
          tashkil topgan bo’lib, o’rganuvchilarni 0 dan junior darajasidagi
          mutaxasislar qilib tayyorlaydi. Kurslar o’rtacha 4 oydan 6 oygacha
          davom etib, har hafta mentor va o’qituvchilar bilan zoom orqali
          uchrashuvlar tashkil qilinadi.
          <br />
          <br />
          Hozirda davom etayotgan Praktikumlar ro’yxati:
          <br />
          <br />– <Link to="#">Data Science va Suniy Intellekt</Link> – Dr.
          Anvar Narzullaev va Mansurbek Abdullayev
          <br />– <Link to="#">Digital marketing praktikum</Link> – Muhammad
          Xalil va Muslim Rahmonov
          <br />– <Link to="#">Frontend Praktikum </Link> – Muhammadjavohir
          Sur’atov
          <br />– <Link to="#">Python Praktikum</Link> – Jahongir Rahmonov
          <br />– <Link to="#">MERN Praktikum</Link> – Samar Badriddinov
          <br />– <Link to="#">Go Praktikum</Link> – Saud Abdulwaheed
          <br />– <Link to="#">iOS Development</Link> – Yunus Sadullaev
          <br />– <Link to="#">Android Development</Link> – Maxmudjon Qalandarov
          <br />– <Link to="#">Full Stack Java</Link> – G’ayratjon Rayimjonov va
          Azizbek Husenov
          <br />– <Link to="#">English for IT</Link> – Madiyor Fatilloev
          <br />
          <br />
          <b>Dasturlash olamiga Mohirdev bilan sayohat qiling.</b>
        </p>
      </div>
    </div>
  );
};

export default About;
