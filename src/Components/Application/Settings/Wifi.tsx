import Image from "next/image";
import icons from "../../../img/paint.svg";
import lock from "../../../img/lock.svg";

export default function Wifi() {
  return (
    <>
      <div className="Wifi">
        <div className="title">
          <p>Wifi</p>
        </div>
        <div className="network">
          <div className="connected">
            <h1>Wifi</h1>
          </div>
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
