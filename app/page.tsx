import Image from "next/image";
import avatar from "../src/img/login/avatar.svg";
import "../src/scss/App.scss";
export default function page() {
  return (
    <>
      <div className="login_view">
        <div className="Date_Hour">
          <p className="date">Wednesday Dec 6</p>
          <p className="hour">14:32</p>
        </div>
        <div className="login_form">
          <div className="avatar"></div>
          <div className="input">
            <Image src={avatar} width={50} height={50} alt="Avatar" />
            <form action="">
              <input type="text" placeholder="Enter Password..." />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
