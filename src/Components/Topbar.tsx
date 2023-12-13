import Image from "next/image";
import icon from "../img/icons/icons.png";
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
            <p key={index}>
              {item.title && <strong>{item.title}</strong>}
              {item.name && <span>{item.name}</span>}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
