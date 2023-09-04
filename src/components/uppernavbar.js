import React from "react";
import img from "../images/logo.jpg";

const UpperNavbar = () => {
  return (
    <div className="wrapper">
      <div className="image-div">
        <img src={img} />
        <b>Changes made to uppernavbar</b>
      </div>
    </div>
  );
};
export default UpperNavbar;
