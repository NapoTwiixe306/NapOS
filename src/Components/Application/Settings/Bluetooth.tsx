import React from "react";
import Image from "next/image";
import lock from "@/src/img/lock.svg";
import icons from "@/src/img/paint.svg";

export default function Bluetooth() {
  return (
      <>
        <div className="Bluetooth">
          <div className="network">
            <div className="hotspots">
              <h1>My Device</h1>
              <div className="cadre">
                <div className="one">
                  <p>Airpods Pro de Julien</p>
                  <Image src={icons as any} alt="icons" />

                </div>
              </div>
            </div>
            <div className="knows">
              <h1>Réseaux Connus</h1>
              <div className="cadre">
                <div className="one">
                  <p><strong>Airpods Pro</strong></p>
                  <Image src={icons as any} alt="icons" />
                </div>
                <div className="one">
                  <p><strong>Iphone 15 pro max</strong></p>
                  <Image src={icons as any} alt="icons" />
                </div>
                <div className="one">
                  <p><strong>Airpods Pro</strong></p>
                  <Image src={icons as any} alt="icons" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
