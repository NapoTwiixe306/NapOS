import Image from "next/image";
import icons from "../../../img/paint.svg";
import lock from "../../../img/lock.svg";
import wifisi from "../../../img/svg_apple/wifi-signal.svg";
import selock from "../../../img/svg_apple/secure-lock.svg";

export default function Wifi() {
  return (
    <>
      <div className="Wifi">
        <div className="network">
          <div className="hotspots">
            <h1>Personal Hotspots</h1>
            <div className="cadre">
              <div className="one">
                <p>First’s Personal Hotspot</p>
                <Image src={lock} alt="icons" />
              </div>
            </div>
          </div>
          <div className="knows">
            <h1>Réseaux Connus</h1>
            <div className="cadre">
              <div className="one">
                <p>Orange-edfa8</p>
                <Image src={icons} alt="icons" />
              </div>
              <div className="one">
                <p>Orange-edfa8</p>
                <Image src={icons} alt="icons" />
              </div>
              <div className="one">
                <p>Orange-edfa8</p>
                <Image src={icons} alt="icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
