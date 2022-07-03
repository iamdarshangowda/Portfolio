import React from "react";
import projects from "./Data";

export default function ProjectList() {
  return (
    <div className="projects-container">
      {projects.map((item) => {
        return (
          <div className="project">
            <img
              src={item.image}
              style={{ width: "300px" }}
              alt="project demo"
            />
            <h1>{item.name}</h1>
            <p>{item.about}</p>
            <p>
              <span>Skills:</span>
              {item.skills}
            </p>
            <p>
              <span>Tools:</span>
              {item.tools}
            </p>
            <a href={item.url}>LIVE DEMO</a>
          </div>
        );
      })}
    </div>
  );
}
