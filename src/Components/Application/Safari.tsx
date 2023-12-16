import React from "react";
import Image from "next/image";
import moi from "../../img/Shape.png";
import bg from "../../img/Suggestions/suggestion.png";
export default function Safari() {
  const suggestions = [
    "Desktop UI library for building applications.",
    "Desktop UI library for building applications.",
    "Desktop UI library for building applications.",
    "Desktop UI library for building applications.",
    "Desktop UI library for building applications.",
    "Desktop UI library for building applications.",
  ];
  function test() {
    alert("test");
  }

  return (
    <>
      <div className="safari_container">
        <div className="safari_topbar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="12"
            viewBox="0 0 52 12"
            fill="none"
            style={{ cursor: "pointer" }}
            onClick={test}
          >
            {Array.from({ length: 3 }, (_, index) => (
              <circle
                key={index}
                cx={index * 20 + 6}
                cy="6"
                r="6"
                fill={
                  index === 0 ? "#F96057" : index === 1 ? "#F8CE52" : "#5FCF65"
                }
                style={{ cursor: "pointer" }}
                onClick={test}
              />
            ))}
            {Array.from({ length: 3 }, (_, index) => (
              <circle
                key={index}
                cx={index * 20 + 6}
                cy="6"
                r="5.75"
                stroke="black"
                strokeOpacity="0.1"
                strokeWidth="0.5"
                style={{ mixBlendMode: "luminosity" }}
              />
            ))}
          </svg>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search or enter website name"
          />
        </div>

        <div className="safari_content">
          <div className="content">
            <div className="favorites">
              <h1>Favorites</h1>
              <div className="img">
                <Image src={moi} alt="moi" />
                <p>julienmilants.fr</p>
              </div>
            </div>
            <div className="privacy">
              <h1>Privacy Repport</h1>
              <div className="box">
                <p className="Number">13</p>
                <p>
                  In the last seven days, Safari has prevented 13 trackers from
                  profiling you.
                </p>
              </div>
            </div>
            <div className="siri">
              <h1>Siri Suggestions</h1>
              <div className="suggestion_content">
                {suggestions.map((text, index) => (
                  <div className="img" key={index}>
                    <p>{text}</p>
                    <Image src={bg} alt="alt" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
