import { Component } from "react";
import "./App.css";
import "./Dropdown.css";

export default function Dropdown() {

  return (
    <>

      <div className="navImgDiv">
        <div className="NavButtonContainer">

          <div class="dropdown">
            <button class="dropbtn">  <img className="Navbutton" src="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
              alt="" /></button>
            <div class="dropdown-content">
              <a href="#">Dr. Bilal</a>
              <a href="#">Account</a>
              <a href="#">Log Out</a>
            </div>    
          </div>
        </div>
      </div>
    </>
  );
}
