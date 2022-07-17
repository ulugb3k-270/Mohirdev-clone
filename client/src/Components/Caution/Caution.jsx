import React from "react";
import { Link } from "react-router-dom";
import "./caution.scss";
const Caution = () => {
  return (
    <div className="caution">
      <p>
        Bu Mohirdev saytining clone versiyasi. Mohirdev saytiga kirish uchun
        quyidagi havolaga o'ting{" "}
        <Link to="https://mohirdev.uz" target="_blank">Mohirdev saytiga o'tish</Link>
      </p>
    </div>
  );
};

export default Caution;
