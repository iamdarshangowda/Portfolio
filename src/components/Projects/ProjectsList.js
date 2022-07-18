import React from "react";
import projects from "./Data";

export default function ProjectList() {
  return (
    <>
      <div className="projects-container">
        {projects.map((item) => {
          return (
            <div className="project">
              <img
                src={item.image}
                style={{ width: "300px", height: "170px", borderRadius: "8px" }}
                alt="project demo"
              />
              <h1>{item.name}</h1>
              <div className="about-project">
                <p>{item.about}</p>
                <p>
                  <span className="tag">Skills: </span>
                  {item.skills}
                </p>
                {/*<p>
                  <span className="tag">Tools: </span>
                  {item.tools}
                </p>*/}
              </div>
              <a href={item.url} target="_blank">
                <button className="demo-btn">LIVE PAGE</button>
              </a>
            </div>
          );
        })}
      </div>
      <div className="git">
        <a
          href="https://github.com/iamdarshangowda?tab=repositories"
          target="_blank"
        >
          <button className="demo-btn more-btn">More Projects</button>
        </a>
      </div>
    </>
  );
}
