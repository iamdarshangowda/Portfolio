import React from "react";
import { Card } from "./common/card";

export default function Blogs() {
  const blogDetails = {
    id: 1,
    image: `${process.env.PUBLIC_URL}/images/blog1.png`,
    name: "How to configure NextJS app",
    about:
      "Basic step by step guide to setup your Nextjs App with Typescript and Material UI",
    //skills: "ReactJs, JavaScript, CSS Flexbox",
    //tools: "VS Code, GIT and Github",
    url: "https://www.notion.so/NextJs-Initial-Setup-c63a99735c1545aa90798ddf83d739fb",
  };
  return (
    <div className="about-container">
      <Card item={blogDetails} buttonText={"Read Blog"} />
    </div>
  );
}
