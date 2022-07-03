import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  const style = { fontSize: "1.75em", color: "#588157" };
  return (
    <div className="home">
      <h1>Hi! I'm Darshan Gowda</h1>
      <p>I'm a Front End Web Developer!</p>
      <div className="icons">
        <a href="https://github.com/iamdarshangowda">
          <FaGithub style={style} />
        </a>
        <a href="https://www.linkedin.com/in/darshan-gowda-8405b4153/">
          <FaLinkedinIn style={style} />
        </a>
      </div>
    </div>
  );
}
