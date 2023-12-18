"use client";
import React, { useState } from "react";
import Image from "next/image";
import moi from "../../img/Shape.png";
import bg from "../../img/Suggestions/suggestion.png";
import close from '../../img/close.svg'
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
          <Image 
            src={close}
            alt="close"
            
          />
          
          <input
            type="search"
            name=""
            id=""
            placeholder={inputPlaceholder}
          />
          
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
