import React from "react";

export const Card = ({ item, buttonText }) => {
  return (
    <div className="project">
      <img
        src={item.image}
        style={{
          width: "300px",
          height: "170px",
          borderRadius: "8px",
        }}
        alt="project demo"
      />
      <h1>{item.name}</h1>
      <div className="about-project">
        <p>{item.about}</p>
        {item.skills && (
          <p>
            <span className="tag">Skills: </span>
            {item.skills}
          </p>
        )}
        {/*<p>
        <span className="tag">Tools: </span>
        {item.tools}
      </p>*/}
      </div>
      <a href={item.url} target="_blank">
        <button className="demo-btn">
          {buttonText ? buttonText : "LIVE PAGE"}
        </button>
      </a>
    </div>
  );
};
