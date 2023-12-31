import Image from "next/image";
import icon from "../img/icons/icons.png";
import battery from "../img/icons/Battry.svg";
import search from "../img/icons/Search.svg";
import wifi from "../img/icons/Wifi.svg";
import test from "../img/icons/utils.png";
import { Topbar_List_Default } from "./List/Topbar_List_default";

export default function Topbar() {
  return (
    <header className="Topbar_Container">
      <div className="Topbar">
        <div className="icon">
          <Image src={icon} width={20} height={20} alt="icon from NapOS" />
        </div>
        <div className="list">
          {Topbar_List_Default.map((item, index) => (
            <div key={index}>
              {item.title && <strong>{item.title}</strong>}
              {item.name && (
                <div className="dropdown">
                  <button className="dropbtn">{item.name}</button>
                  <div className="dropdown-content">
                    <p className="dropdown-options">Option 1</p>
                    <p className="dropdown-options">Option 1</p>
                    <p className="dropdown-options">Option 1</p>
                    <p className="dropdown-options">Option 1</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="icons_topbar">
          <Image src={battery as any} alt="Battry" />
          <Image src={search as any} alt="Battry" />
          <Image src={wifi as any} alt="Battry" />
          <Image src={test as any} alt="Battry" width={20} height={20} />
          <p className="date">Je. 7 Déc. 11:24</p>
        </div>
      </div>
    </header>
  );
}
