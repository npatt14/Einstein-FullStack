import React from "react";
import imageSrc from "../Assets/einsteinlogo1.png";

const TabBar = () => {
  return (
    <div className="tab-bar">
      <div className="brand">
        <div className="logo">
          <img src={imageSrc} alt="Image" />
        </div>
        <div className="brandName">
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
