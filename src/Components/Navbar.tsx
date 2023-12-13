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
      <Image src={Finder} alt="" />
      <Image src={Launch} alt="" />
      <Image src={Safari} alt="" />
      <Image src={Imessage} alt="" />
      <Image src={Mail} alt="" />
      <Image src={Maps} alt="" />
      <Image src={Photo} alt="" />
      <Image src={Facetime} alt="" />
      <Image src={Calendar} alt="" />
      <Image src={Contact} alt="" />
      <Image src={AppleTV} alt="" />
      <Image src={Settings} alt="" />
      <Image src={Note} alt="" />
      <Image src={Music} alt="" />
      
      {/* Separator */}
      <div className="separator"></div>
      
      <Image src={Visual} alt="" />
      <Image src={Folder} alt="" />
      <Image src={Trash} alt="" />
    </footer>
  );
}
