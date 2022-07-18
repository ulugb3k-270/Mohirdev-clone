import React, { useState } from "react";
import "./caution.scss";
import "./media.caution.scss";

const Caution = () => {
  const [activeClass, setActiveClass] = useState("active");

  return (
    <div className={`caution ${activeClass}`}>
      <p>
        Bu Mohirdev saytining clone versiyasi. Mohirdev saytiga kirish uchun
        quyidagi havolaga o'ting{" "}
        <a href="https://mohirdev.uz" rel="noreferrer" target="_blank">
          Mohirdev saytiga o'tish
        </a>
      </p>

      <button className="caution__button" onClick={() => setActiveClass("")}>
        Yopish
      </button>
    </div>
  );
};

export default Caution;
