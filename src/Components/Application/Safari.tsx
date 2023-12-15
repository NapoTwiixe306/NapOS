import React from "react";

export default function Safari() {

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
            <circle
              cx="46"
              cy="6"
              r="6"
              fill="#5FCF65"
              style={{ cursor: "pointer" }}
              onClick={test}
            />
            <circle cx="26" cy="6" r="6" fill="#F8CE52" />
            <circle cx="6" cy="6" r="6" fill="#F96057" />
            <circle
              cx="6"
              cy="6"
              r="5.75"
              stroke="black"
              strokeOpacity="0.1"
              strokeWidth="0.5"
              style={{ mixBlendMode: "luminosity" }}
            />
            <circle
              cx="26"
              cy="6"
              r="5.75"
              stroke="black"
              strokeOpacity="0.1"
              strokeWidth="0.5"
              style={{ mixBlendMode: "luminosity" }}
            />
            <circle
              cx="46"
              cy="6"
              r="5.75"
              stroke="black"
              strokeOpacity="0.1"
              strokeWidth="0.5"
              style={{ mixBlendMode: "luminosity" }}
            />
          </svg>
        </div>
        <div className="safari_content">
          <p>lorem*500</p>
        </div>
      </div>
    </>
  );
}
