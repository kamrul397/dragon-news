import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-4">
      <h2>QZone Component</h2>
      <div className="space-y-8">
        <img src={swimmingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;
