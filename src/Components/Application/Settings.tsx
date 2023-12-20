import Image from "next/image";
import React, { useState } from "react";
import close from "../../img/close.svg";
import avatar from "../../img/login/avatar.svg";

import { Settings_List } from "../List/Settings_List";
import { renderSelectedComponent } from "@/src/utils/SettingsImport";
export default function Settings() {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState<boolean>(true);

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <>
      <div className="Settings_Container">
        <div className="Container">
          <div className="item">
            <div className="left">
              <Image src={close} alt="close" />
              <div className="input">
                <input type="search" name="" id="" placeholder="Rechercher" />
              </div>
              <div className="user">
                <Image src={avatar} alt="avatar" width={50} height={50} />
                <div className="info">
                  <p>Users</p>
                  <p>Identifian Apple</p>
                </div>
              </div>
              <div className="maj">
                {showNotification && <div className="notific">1</div>}
                <p>Mise à jour logiciel disponible</p>
              </div>
              <div className="item">
                {Settings_List.map((tab) => (
                  <div key={tab.name} className={tab.name}>
                    <p
                      className={selectedTab === tab.name ? "selected" : ""}
                      onClick={() => handleTabClick(tab.name)}
                    >
                      {tab.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="sepa"></div>
            <div className="right">
              <div className="items">
                {renderSelectedComponent(selectedTab)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
