import React from "react";
import { FaFreeCodeCamp } from "react-icons/fa";
import { TbPentagon } from "react-icons/tb";
import { GrCertificate } from "react-icons/gr";

export default function Skills() {
  return (
    <div class="skill-container">
      <h1>Developer Skills:</h1>
      <ul className="list">
        <li>HTML</li>
        <li>CSS</li>
        <li>BootStrap</li>
        <li>JavaScript</li>
        <li>GIT and GitHub</li>
        <li>Responsive Web Development</li>
        <li>ReactJs</li>
      </ul>
      <div className="certify">
        <h1>Certification</h1>
        <div className="certify-links">
          <a
            href="https://www.freecodecamp.org/certification/iamdarshangowda/responsive-web-design"
            target="_blank"
          >
            <span className="web">
              <FaFreeCodeCamp />
              FreeCodeCamp:{" "}
            </span>
            Responsive Web Design (HTML and CSS)
          </a>
          <a
            href="https://www.freecodecamp.org/certification/iamdarshangowda/javascript-algorithms-and-data-structures"
            target="_blank"
          >
            <span className="web">
              <FaFreeCodeCamp />
              FreeCodeCamp:{" "}
            </span>
            JavaScript Data Structures and Algorithms
          </a>
          <a
            href="https://triplebyte.com/tb/darshan-gowda-ezclzmz/certificate"
            target="_blank"
          >
            <span className="web">
              <TbPentagon />
              TripleByte:{" "}
            </span>
            Frontend and ReactJs
          </a>
        </div>
      </div>
    </div>
  );
}
