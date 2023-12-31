import React from "react";
import Image from "next/image";
import icons from "@/src/img/icons/right-line.svg";

export default function Network() {
  return (
      <>
        <div className="Network_Container">
          <div className="network_content">
            <div className="hotspots">
              <h1>Network</h1>
              <div className="knows">
                <div className="cadre">
                  <div className="one">
                    <p>Wi-fi</p>
                    <Image src={icons as any} alt="icons"/>
                  </div>
                  <div className="one">
                    <p>Vpn</p>
                    <Image src={icons as any} alt="icons"/>
                  </div>
                  <div className="one">
                    <p>Coupe-Feu</p>
                    <Image src={icons as any} alt="icons"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="knows">
              <h1>Autre Services</h1>
              <div className="cadre">
                <div className="one">
                  <p>Ethernet</p>
                  <Image src={icons as any} alt="icons"/>
                </div>
                <div className="one">
                  <p>Pont Thunderbolt</p>
                  <Image src={icons as any} alt="icons"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
