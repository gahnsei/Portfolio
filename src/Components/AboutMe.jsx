import React from "react";
import myPicture from "../kob9325.jpg";

function AboutMe() {
  return (
    <div className="section">
      <div className="mySection AboutMe">
        <div className="section-div">
          <span className="section-label">Software Developer</span>
          <img className="about-picture" src={myPicture} alt="Sei Gahn" />
        </div>
        <div className="section-div">
          <span className="section-label">About Me</span>
          <p className="about-description">
            What started off as a childhood interest has now grown into a full
            blown profession. Software Development is the driving force for the
            future of technology and being a part of this history brings me
            great joy. The joys of bringing ideas to life was an experience felt
            every day as I learned the languages of computers. In order to truly
            feel like a force that drove the wheels of progress, gaining an
            understanding of all aspects of Software Development was the bare
            minimum. From front-end development, UX, Design, back-end
            development, and databases; I gained a full understanding of what it
            takes to become a full-stack Developer. As a product of Devmountain,
            a development bootcamp based in Utah, becoming a full-stack
            developer was just the beginning of my journey. I look forward to
            experiencing the next part of that journey with you; whoever and
            wherever you are.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
