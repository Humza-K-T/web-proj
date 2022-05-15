import { Component } from "react";
import "./App.css";

export default function Dropdown() {
  return (
    <>
      <div className="navImgDiv">
        <div className="NavButtonContainer">
          <button type="button" className="Navbutton">
            <img
              src="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
              alt=""
            />
          </button>

          {/* <div className="NavImgDropdown">
            <ul>
              <li>DR Bilal</li>
              <li>Account</li>
              <li>Logout</li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
}
