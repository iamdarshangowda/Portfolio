import React from "react";

export default function About() {
  return (
    <div className="about-container">
      <div className="profile-img">
        <img
          src={`${process.env.PUBLIC_URL}/images/profile-pic.png`}
          alt="darshan profile photo"
          style={{ width: "300px", borderRadius: "14px" }}
        />
      </div>
      <div className="about-text">
        <h1>Nice to meet You!</h1>
        <p className="about-detail">
          I'm a Front End Web Developer with a passion for creating neat,
          responsive websites.
        </p>
        <p className="about-detail">
          A self-taught Developer with high vision and forward thinking.
          Committed to learning and self-development to achieve better results.
          Proficient with{" "}
          <mark>ReactJs, NextJs, Typescript and TailwindCSS.</mark> Always open
          to constructive feedback. Effective Problem-Solving skills with
          ability to work as an individual or in a team environment.
        </p>
        <p className="about-detail">Can't wait to work with you!</p>
        <p className="about-detail">
          Download my resume{" "}
          <a
            href="https://drive.google.com/file/d/1zE50SHT8uy6WjE2e8uEz6t8KSqaC60lt/view?usp=drive_link"
            target="_blank"
          >
            here
          </a>
        </p>
      </div>
    </div>
  );
}
