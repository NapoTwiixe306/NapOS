import Image from "next/image";
import icon from "../img/icons/icons.png";
import battery from "../img/icons/Battry.svg";
import search from '../img/icons/Search.svg'
import wifi from '../img/icons/Wifi.svg'
import { Topbar_List_Default } from "./Topbar_List_default";

export default function Topbar() {
  return (
    <div className="Topbar_Container">
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
          <Image
            src={battery}
            alt="Battry"
          />
          <Image
            src={search}
            alt="Battry"
          />
          <Image
            src={wifi}
            alt="Battry"
          />
          <p className="date">Jeu. 7 Déc. 11:24</p>
        </div>
      </div>
    </div>
  );
}
