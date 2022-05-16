import "./regist.css";
import React from "react";

export default function Radio() {
  const [state, updateState] = React.useState({
    selectedOption: "Male",
  });

  function onChangeValue(event) {
    return "";
  }

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
              // checked={this.state.selectedOption === "Male"}
              // onChange={this.onValueChange}
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
              // checked={this.state.selectedOption === "Female"}
              // onChange={this.onValueChange}
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
              // checked={this.state.selectedOption === "Other"}
              // onChange={this.onValueChange}
            />
            Other
          </label>
        </div>
      </div>
    </div>
  );
}
