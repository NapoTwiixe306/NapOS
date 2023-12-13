import React from "react";
import Image from "next/image";
import Finder from '../img/Navbar/Finder.png'
import Launch from '../img/Navbar/Launchpad.png'
import Safari from '../img/Navbar/safari.png'
import Imessage from "../img/Navbar/Imessage.png"
import Mail from "../img/Navbar/Mail.png"
import Maps from "../img/Navbar/Maps.png"
import Photo from "../img/Navbar/photo.png"
import Facetime from "../img/Navbar/facetime.png"
import Calendar from "../img/Navbar/calendar.png"
import Contact from "../img/Navbar/contact.png"
import AppleTV from "../img/Navbar/apple.png"
import Settings from "../img/Navbar/settings.png"
import Note from "../img/Navbar/note.png"
import Music from "../img/Navbar/spotify.png"
import Visual from '../img/Navbar/Visual.png'
import Folder from '../img/Navbar/Folder.png'
import Trash from '../img/Navbar/Trash.png';

export default function Navbar() {
  return (
    <footer className="footer">
      <Image src={Finder} alt="" layout="responsive" />
      <Image src={Launch} alt="" layout="responsive" />
      <Image src={Safari} alt="" layout="responsive" />
      <Image src={Imessage} alt="" layout="responsive" />
      <Image src={Mail} alt="" layout="responsive" />
      <Image src={Maps} alt="" layout="responsive" />
      <Image src={Photo} alt="" layout="responsive" />
      <Image src={Facetime} alt="" layout="responsive" />
      <Image src={Calendar} alt="" layout="responsive" />
      <Image src={Contact} alt="" layout="responsive" />
      <Image src={AppleTV} alt="" layout="responsive" />
      <Image src={Settings} alt="" layout="responsive" />
      <Image src={Note} alt="" layout="responsive" />
      <Image src={Music} alt="" layout="responsive" />
      
      {/* Separator */}
      <div className="separator"></div>
      
      <Image src={Visual} alt="" layout="responsive" />
      <Image src={Folder} alt="" layout="responsive" />
      <Image src={Trash} alt="" layout="responsive" />
    </footer>
  );
}
