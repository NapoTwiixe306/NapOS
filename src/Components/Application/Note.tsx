import React from "react";
import close from "../../img/close.svg";
import user from "../../img/Note/User.svg";
import folder from '../../img/Note/Folder.svg'
import Image from "next/image";

export default function Note() {
  return (
    <div className="Note_Container">
      <div className="Container">
        <div className="item">
          <div className="left">
            <div className="icon">
              <Image src={close as any} alt="close" />
            </div>
            <div className="shares">
              <Image src={user as any} alt="user" />
              <p>Partagées</p>
            </div>
            <div className="icloud">
              <h3>Icloud</h3>
              <div className="items">
                <div className="text">
                  <Image src={folder as any} alt="folder"/>
                  <p>Icloud (toutes)</p>
                </div>
                <div className="text">
                  <Image src={folder as any} alt="folder"/>
                  <p>Note</p>
                </div>
                <div className="text">
                  <Image src={folder as any} alt="folder"/>
                  <p>Items 1</p>
                </div>
                <div className="text">
                  <Image src={folder as any} alt="folder"/>
                  <p>Items 2</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mid">
            <p>mid</p>
          </div>
          <div className="right">
            <p>right</p>
          </div>
        </div>
      </div>
    </div>
  );
}
