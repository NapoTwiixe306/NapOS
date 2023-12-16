"use client";
import React, { useState } from "react";
import Image from "next/image";
import Finder from "../img/Navbar/Finder.png";
import Launch from "../img/Navbar/Launchpad.png";
import Safari from "../img/Navbar/safari.png";
import Imessage from "../img/Navbar/Imessage.png";
import Mail from "../img/Navbar/Mail.png";
import Maps from "../img/Navbar/Maps.png";
import Photo from "../img/Navbar/photo.png";
import Facetime from "../img/Navbar/facetime.png";
import Calendar from "../img/Navbar/calendar.png";
import Contact from "../img/Navbar/contact.png";
import AppleTV from "../img/Navbar/apple.png";
import Settings from "../img/Navbar/settings.png";
import Note from "../img/Navbar/note.png";
import Music from "../img/Navbar/spotify.png";
import Visual from "../img/Navbar/Visual.png";
import Folder from "../img/Navbar/Folder.png";
import Trash from "../img/Navbar/Trash.png";

import SafariComponent from "./Application/Safari";
import SettingsComponent from "./Application/Settings";

export default function Navbar() {
  const [showSafariComponent, setShowSafariComponent] = useState(false);
  const [showSettingsComponent, setShowSettingsComponent] = useState(false);

  const [isActiveSafari, setIsActiveSafari] = useState(false);
  const [isActiveSettings, setIsActiveSettings] = useState(false);

  const handleSafariClick = () => {
    setShowSafariComponent(!showSafariComponent);
    setShowSettingsComponent(false);
    setIsActiveSafari(!isActiveSafari);
    setIsActiveSettings(false);
  };

  const handleSettingsClick = () => {
    setShowSettingsComponent(!showSettingsComponent);
    setShowSafariComponent(false);
    setIsActiveSettings(!isActiveSettings);
    setIsActiveSafari(false);
  };

  return (
    <>
      {showSafariComponent && <SafariComponent />}
      {showSettingsComponent && <SettingsComponent />}

      <footer className="footer">
        <Image
          src={Finder}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Launch}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Safari}
          alt=""
          layout="responsive"
          onClick={handleSafariClick}
          className={isActiveSafari ? "active" : ""}
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Imessage}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Mail}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Maps}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Photo}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Facetime}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Calendar}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Contact}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={AppleTV}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Settings}
          alt=""
          layout="responsive"
          onClick={handleSettingsClick}
          className={isActiveSettings ? "active" : ""}
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Note}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Music}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />

        {/* Separator */}
        <div className="separator"></div>

        <Image
          src={Visual}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Folder}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Trash}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
      </footer>
    </>
  );
}
