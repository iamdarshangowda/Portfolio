import React from "react";
import { Card } from "../common/card";
import projects from "./Data";

export default function ProjectList() {
  return (
    <>
      <div className="projects-container">
        {projects.map((item) => {
          return <Card item={item} />;
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
