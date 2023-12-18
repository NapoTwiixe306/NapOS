import Image from "next/image";
import React from "react";
import close from "../../img/close.svg";

export default function Settings() {
  return (
    <>
      <div className="Settings_Container">
        <div className="Container">
          <div className="item">
            <div className="left">
              <Image src={close} alt="close" />
              <p>left</p>
            </div>
            <div className="right">right</div>
          </div>
        </div>
      </div>
    </>
  );
}
