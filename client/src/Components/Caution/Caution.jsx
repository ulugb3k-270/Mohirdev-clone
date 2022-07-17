import React from "react";
import { Link } from "react-router-dom";
import "./caution.scss";
const Caution = () => {
  return (
    <div className="caution">
      <p>
        Bu Mohirdev saytining clone versiyasi. Mohirdev saytiga kirish uchun
        quyidagi havolaga o'ting{" "}
        <a href="https://mohirdev.uz" rel="noreferrer" target="_blank">Mohirdev saytiga o'tish</a>
      </p>
    </div>
  );
};

export default Caution;
