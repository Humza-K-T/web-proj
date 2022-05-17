import "./regist.css";
import React from "react";

export default function Radio(props) {
  // const [state, updateState] = React.useState({
  //   selectedOption: "Male",
  // });

  // function onChangeValue(event) {
  //   return "";
  // }

  
  return (
    <div className="gender-container ">
      <div>
        <label className="label">Gender</label>
      </div>
      <div className="Radio-Buttons">
        <div className="radio" float="left">
          <label>
            <input
              type="radio"
              value="Male"
              name="gender"
              // checked={props.gender === "Male"}
               onChange={props.fun}
            />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Female"
              name="gender"
               //checked={props.gender === "Female"}
               onChange={props.fun}
            />
            Female
          </label>
        </div>
        <br />
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Other"
              name="gender"
              // checked={props.gender === "Other"}
               onChange={props.fun}
            />
            Other
          </label>
        </div>
      </div>
    </div>
  );
}
