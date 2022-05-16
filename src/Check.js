import "./regist.css";
import React from "react"

export default function Check(props) {
  return (
    <div className="check" >
      <label className="label" >
      {props.name}
      <input type="checkbox" className="check-input" name={props.name} />
    </label>
    </div>
  );
  }
