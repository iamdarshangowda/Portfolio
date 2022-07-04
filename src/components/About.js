import React from "react";

export default function About() {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/profile-pic.jpg`}
        alt="darshan profile photo"
        style={{ width: "300px", borderRadius: "18px" }}
      />
      <div>
        <h1>Nice to meet You!</h1>
        <p>
          I'm a Front End Web Developer with a passion for creating neat,
          responsive websites.
        </p>
        <p>
          A self-taught aspiring Front-End Web Developer with high vision and
          forward thinking. Committed to learning and self-development to
          achieve better results. Proficient with HTML, CSS and JavaScript.
          Always open to constructive feedback. Effective Problem-Solving skills
          with ability to work as an individual or in a team environment.
        </p>
        <p>Can't wait to work with you!</p>
      </div>
    </div>
  );
}
