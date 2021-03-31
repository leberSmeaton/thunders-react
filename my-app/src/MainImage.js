import React from "react";
import BeachImage from "./BeachImage.svg"; // relative path to image

export default function MainImage() {
  return (
    <div className="MainImage">
      <img src={BeachImage} className="mainImage cropped w-100" alt={"two people on beach"} />
    </div>
  );
}

//<img src={BeachImage} className="mainImage cropped" alt={"logo"} />
