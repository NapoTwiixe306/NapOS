"use client";
import React, { useState } from "react";
import Image from "next/image";
import moi from "../../img/Shape.png";
import bg from "../../img/Suggestions/suggestion.png";
import Portfolio from "./Portfolio";
export default function Safari() {
  const suggestions = [
    "Desktop UI library for building applications.",
    "Desktop UI library for building applications.",
    "Desktop UI library for building applications.",
    "Desktop UI library for building applications.",
    "Desktop UI library for building applications.",
    "Desktop UI library for building applications.",
  ];
  const [isFavoritesVisible, setFavoritesVisible] = useState(true);
  const [isPrivacyVisible, setPrivacyVisible] = useState(true);
  const [isSiriVisible, setSiriVisible] = useState(true);
  const [isPortfolioVisible, setPortfolioVisible] = useState(false);

  function handlePortfolioClick() {
    setFavoritesVisible(false);
    setPrivacyVisible(false);
    setSiriVisible(false);
    setPortfolioVisible(!isPortfolioVisible);
  }

  function handlePortfolioClose() {
    setFavoritesVisible(true);
    setPrivacyVisible(true);
    setSiriVisible(true);
    setPortfolioVisible(false);
  }
  const inputPlaceholder = isPortfolioVisible
  ? "julienmilants.fr"
  : "Search or enter website name";
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
            placeholder={inputPlaceholder}
          />
          
        </div>
        <div className="port_open">
        {isPortfolioVisible && (
            <div className="port-open">
                <div className="content">
                  <p>julienmilants.fr </p>
                  <button className="close" onClick={handlePortfolioClose}>x</button>
                </div>
            </div>
          )}
        </div>
        <div className="safari_content">
          {isPortfolioVisible && <Portfolio onClose={handlePortfolioClose} />}

          <div className="content">
            {isFavoritesVisible && (
              <div className="favorites">
                <h1>Favorites</h1>
                <div className="img">
                  <Image
                    src={moi}
                    alt="moi"
                    onClick={handlePortfolioClick}
                    width={70}
                    height={85}
                    style={{ cursor: "pointer", borderRadius: "5px" }}
                  />
                  <p>julienmilants.fr</p>
                </div>
              </div>
            )}
            {isPrivacyVisible && (
              <div className="privacy">
                <h1>Privacy Repport</h1>
                <div className="box">
                  <p className="Number">13</p>
                  <p>
                    In the last seven days, Safari has prevented 13 trackers
                    from profiling you.
                  </p>
                </div>
              </div>
            )}
            {isSiriVisible && (
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}
