import "./regist.css";
import React from "react"

export default function InputX(props) {
  return (
    <div className="inputx">
      <label  className="label">{props.name}
    <input type="text" className="in" name={props.name} value=""/>
    </label>
    </div>
  );
  }