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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
              asperiores dolorum, eos facilis nisi eaque dolorem aliquam minus
              dolor accusamus tempora doloribus? Illo, eveniet. Quisquam a
              deleniti numquam aliquam consectetur! Eum, ex. Rem atque earum
              placeat, unde qui libero quasi eos nam perspiciatis molestiae
              aliquam praesentium maxime veritatis deserunt eligendi non dolores
              aliquid autem ipsam maiores error. In, corrupti. Deserunt. Nulla
              ullam praesentium veritatis repudiandae ut sint nihil, modi fugiat
              suscipit sit consectetur doloribus rerum aspernatur odit eum
              ducimus vero beatae expedita sequi corporis ad. Rerum recusandae
              vitae alias illum.
            </p>
          </div>
          <iframe
            title="Comix Demo"
            src="https://www.youtube.com/embed/tQ3lTeP62TI"
            allowfullscreen="true"
            className="project-demo"
          ></iframe>
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
              MyVy is a personal project that i created to display my
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
          <iframe
            title="MyVy Demo"
            src="https://www.youtube.com/embed/I7phA_0PQtw"
            allowfullscreen="true"
            className="project-demo"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Projects;
