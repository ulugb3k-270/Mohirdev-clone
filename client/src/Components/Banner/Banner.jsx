import React from "react";

import "./banner.scss";
import "./media.banner.scss";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Banner = () => {
  return (
    <section id="banner" className="banner">
      <div className="banner__container container">
        <div className="banner__left">
          <h2>
            Har joyda, istalgan vaqtda dasturlashni o’rganing. <br />
            <span> Bepul dasturlash kurslari </span>
            orqali o’z sayohatingizni boshlang
          </h2>
        </div>
        <div className="banner__right">
          <button>
            <BsFillArrowRightCircleFill /> Boshlash
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
