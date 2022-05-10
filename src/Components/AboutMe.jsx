import React from "react";
import myPicture from "../kob9325.jpg";

function AboutMe() {
  return (
    <div className="section">
      <div className="mySection AboutMe">
        <div className="about-name-pic">
          <span className="about-job">Software Developer</span>
          <img className="about-picture" src={myPicture} alt="Sei Gahn" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
