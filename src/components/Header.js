import react from "react";
import "remixicon/fonts/remixicon.css";
import staff from "./imgs/staff.png";
import "./style.css";

export default function Header() {
  return (
    <>
      <div className="mini-header">
        <div className="mini-header-container">
          <i class="ri-notification-2-line"></i>
          <div className="staff-imag">
            <ul className="ul-staff">
              <li className="staff-list">
                <img src={staff} alt="Staff" className="staff-icon" />
                Staff
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
