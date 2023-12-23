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
import FinderComponent from './Application/Finder'
export default function Navbar() {
  const [showSafariComponent, setShowSafariComponent] = useState(false);
  const [showSettingsComponent, setShowSettingsComponent] = useState(false);
  const [showFinderComponent, setShowFinderComponent] = useState(false);

  const [isActiveSafari, setIsActiveSafari] = useState(false);
  const [isActiveSettings, setIsActiveSettings] = useState(false);
  const [isActiveFinder, setIsActiveFinder] = useState(false);

  const handleSafariClick = () => {
    setShowSafariComponent(!showSafariComponent);
    setShowSettingsComponent(false);
    setShowFinderComponent(false);

    setIsActiveSafari(!isActiveSafari);
    setIsActiveSettings(false);
    setIsActiveFinder(false);
  };

  const handleSettingsClick = () => {
    setShowSettingsComponent(!showSettingsComponent);
    setShowSafariComponent(false);
    setShowFinderComponent(false);
    setIsActiveSettings(!isActiveSettings);
    setIsActiveFinder(false);
    setIsActiveSafari(false);
  };

  const handleFinderClick = () => {
    setShowFinderComponent(!showFinderComponent);
    setShowSafariComponent(false);
    setShowSettingsComponent(false);
    setIsActiveFinder(!isActiveFinder);
    setIsActiveSafari(false);
    setIsActiveSettings(false);
  };


  return (
    <>
      {showSafariComponent && <SafariComponent />}
      {showSettingsComponent && <SettingsComponent />}
      {showFinderComponent && <FinderComponent />}

      <footer className="footer">
        <Image
          src={Finder as any}
          alt=""
          layout="responsive"
          onClick={handleFinderClick}

          style={{ cursor: "pointer" }}
        />
        <Image
          src={Launch as any}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Safari as any}
          alt=""
          layout="responsive"
          onClick={handleSafariClick}
          className={isActiveSafari ? "active" : ""}
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Imessage as any}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Mail as any}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Maps as any}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Photo as any}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Facetime as any}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Calendar as any}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Contact as any}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={AppleTV as any}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Settings as any}
          alt=""
          layout="responsive"
          onClick={handleSettingsClick}
          className={isActiveSettings ? "active" : ""}
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Note as any}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Music as any}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />

        {/* Separator */}
        <div className="separator"></div>

        <Image
          src={Visual as any}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Folder as any}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
        <Image
          src={Trash as any}
          alt=""
          layout="responsive"
          style={{ cursor: "pointer" }}
        />
      </footer>
    </>
  );
}
