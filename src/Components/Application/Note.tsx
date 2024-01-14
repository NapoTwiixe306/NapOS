import React from "react";
import Image from "next/image";

import close from "../../img/close.svg";
import user from "../../img/Note/User.svg";
import folder from '../../img/Note/Folder.svg'
import pin from '../../img/Note/pin.svg'
import trash from '../../img/Note/trash.svg'
import NoteProps from "../Props/NoteProps";
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
            <div className="icon">
            <Image src={trash as any} alt="pin icons" width={16} height={16}/>

            </div>
            <div className="note">
              <div className="ping">
                <Image src={pin as any} alt="pin icons"/>
                <p>Épingler</p>
              </div>
              <span className="sep"></span>

              <div className="list">
                <NoteProps text="Note 1" description="description"/>
                
                <NoteProps text="Note 2" description="description"/>
                <NoteProps text="Note 3" description="description"/>
                <NoteProps text="Note 4" description="description"/>
                <NoteProps text="Note 5" description="description"/>
                <NoteProps text="Note 6" description="description"/>
                <NoteProps text="Note 7" description="description"/>
                <NoteProps text="Note 8" description="description"/>
              </div>
            </div>
          </div>
          <div className="right">
            <p>right</p>
          </div>
        </div>
      </div>
    </div>
  );
}
