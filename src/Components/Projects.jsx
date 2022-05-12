import React from "react";

function Projects() {
  return (
    <div className="section">
      <div className="slide">
        <div className="mySection Projects">
          <div className="section-div">
            <span className="section-label">Comix</span>
            <a
              href="https://github.com/gahnsei/Comix"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Github
            </a>
            <p>
              Comix is a personal project I created to help new coming Marvel
              fans to immerse themselves into the Marvel universe. Comix is an
              extension of the Marvel database that gives users the ability to
              save their favorite comic series and characters to their created
              accounts. This project was created to display my understanding of
              ReactJS, HTML5, CSS3, SQL, PostgreSQL, and ExpressJS. I used the
              Marvel api to compile data on each character and comic series
              within the Marvel universe.
            </p>
          </div>
          <div className="section-div">
            <iframe
              title="Comix Demo"
              src="https://www.youtube.com/embed/tQ3lTeP62TI"
              allowfullscreen="true"
              className="project-demo"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="mySection Projects">
          <div className="section-div">
            <span className="section-label">MyVy</span>
            <a
              href="https://github.com/gahnsei/MyVy"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Github
            </a>
            <p>
              MyVy is a personal project that I created to display my
              understanding of JavaScript, HTML5, CSS3, SQL, Postgres, and SASS.
              Multiple APIs where used to create my database; Spotify API, and
              Coverr API. The concept of MyVy is an e-commerce website that
              combines a vinyl store with the UX of a music streaming
              application. Users are given the opportunity to search our
              extensive database to find music that fits their needs. Each
              artist within our database has a artist page with various
              information pertaining to the artist. Users are given the
              opportunity to not only scour for vinyls, but to also discover new
              artists.
            </p>
          </div>
          <div className="section-div">
            <iframe
              title="MyVy Demo"
              src="https://www.youtube.com/embed/I7phA_0PQtw"
              allowfullscreen="true"
              className="project-demo"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
