"use client";
import close from "../../img/close.svg";
import Image from "next/image";
import { Finder_List } from "../List/Finder_List";
import {useEffect, useState} from "react";

export default function Finder() {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState<boolean>(true);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  useEffect(() => {
    // Mettez à jour la classe du body lors du changement du mode sombre
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <>
      <div className="finder">
        <div className="Container">
          <div className="items">
            <div className="left">
              <Image src={close as any} alt="close" className="close_img"/>
              <div className="content">
                <div className="Favorites">
                  <span>Favorites</span>
                  {Finder_List.filter((item) =>
                      ["Recents", "Desktop", "Documents", "Downloads"].includes(
                          item.name,
                      ),
                  ).map((item) => (
                      <p
                          key={item.name}
                          className={selectedTab === item.name ? "selected" : ""}
                          onClick={() => handleTabClick(item.name)}
                      >
                        {item.name}
                      </p>
                  ))}
                </div>
                <div className="Icloud">
                  <span>Icloud</span>
                  {Finder_List.filter(
                      (item) => item.name === "Icloud Drive",
                  ).map((item) => (
                      <p
                          key={item.name}
                          className={selectedTab === item.name ? "selected" : ""}
                          onClick={() => handleTabClick(item.name)}
                      >
                        {item.name}
                      </p>
                  ))}
                </div>
                <div className="Locations">
                  <span>Locations</span>
                  {Finder_List.filter((item) =>
                      ["Macintosh HD", "Network"].includes(item.name),
                  ).map((item) => (
                      <p
                          key={item.name}
                          className={selectedTab === item.name ? "selected" : ""}
                          onClick={() => handleTabClick(item.name)}
                      >
                        {item.name}
                      </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="sepa"></div>
            <div className={`right ${darkMode ? "dark" : ""}`}>
              <button onClick={toggleDarkMode}>
                {darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
