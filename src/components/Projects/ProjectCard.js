import React from "react";
import QuizzApp from "./images/QuizzApp";

export default function ProjectCard() {
  return (
    <div>
      <img href={QuizzApp} alt="quiz app" />
      <h2>Quizz App</h2>
      <p>
        A color selector app where the user has the option to change the
        background from 4 preselected colors in the simple list item or get
        infinite random colors using the hex list tab.
      </p>
      <p>
        <span>skills:</span> CSS3, HTML5, Flexbox, JavaScript
      </p>
      <p>
        <span>Tools:</span> GitHub, Chrome DevTools
      </p>
    </div>
  );
}
