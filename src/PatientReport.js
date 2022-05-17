// import React from "react";
import "./PatientReport.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar";
import Back from "./Back";
import PatientHeader from "./PatientHeader";
const PatientReport = () => {
  return (
    <div>
      <Navbar />
      <Back />
      <PatientHeader
        name="Afra Siyab"
        ID="12534"
        DOB="10-1-2000"
        VisitDate="10-1-2022"
        gender="female"
      />
      <div className="report--maindiv">
        <div className="report--box3">
          <form>
            <label className="report--label">CBC-WBC:</label>
            <input type="text" className="report--input" />
            <br></br> <br></br>
            <label className="report--label">CBC-Platelets</label>
            <input type="text" className="report--input" />
            <br></br> <br></br>
            <label className="report--label">CBC-Hemoglobin:</label>
            <input type="text" className="report--input" />
            <br></br> <br></br>
            <label className="report--label">CBC-Creatinine</label>
            <input type="text" className="report--input" />
            <br></br> <br></br>
            <label className="report--label">eGFR:</label>
            <input type="text" className="report--input" />
            <br></br> <br></br>
            <label className="report--label">AST</label>
            <input type="text" className="report--input" />
            <br></br> <br></br>
            <label className="report--label">ALT</label>
            <input type="text" className="report--input" />
            <br></br> <br></br>
            <label className="report--label">ALT222</label>
            <input type="text" className="report--input" />
            <br></br> <br></br>
            <label className="report--label">ALT222</label>
            <input type="text" className="report--input" />
            <br></br> <br></br>
            <label className="report--label">ALT222</label>
            <input type="text" className="report--input" />
            <br></br> <br></br>
            <label className="report--label">ALT222</label>
            <input type="text" className="report--input" />
          </form>
        </div>
        <div className="report--box1">
          <form>
            <label className="report--label">CBC-WBC:</label>
            <input type="text" className="report--input" />
            <label className="report--label">CBC-Platelets</label>
            <input type="text" className="report--input" />
            <br></br> <br></br>
            <label className="report--label">CBC-Hemoglobin:</label>
            <input type="text" className="report--input" />
            <label className="report--label">CBC-Creatinine</label>
            <input type="text" className="report--input" />
            <br></br> <br></br>
            <label className="report--label">eGFR:</label>
            <input type="text" className="report--input" />
            <label className="report--label">AST</label>
            <input type="text" className="report--input" />
            <br></br> <br></br>
            <label className="report--label">AL11111T</label>
            <input type="text" className="report--input" />
          </form>
        </div>
        <div className="report--box2">
          <form>
            <label className="report--label">CBC-WBC:</label>
            <input type="text" className="report--input" />
            <label className="report--label">CBC-Platelets</label>
            <input type="text" className="report--input" />
            <br></br> <br></br>
            <label className="report--label">CBC-Hemoglobin:</label>
            <input type="text" className="report--input" />
            <label className="report--label">CBC-Creatinine</label>
            <input type="text" className="report--input" />
            <br></br> <br></br>
            <label className="report--label">eGFR:</label>
            <input type="text" className="report--input" />
            <label className="report--label">AST</label>
            <input type="text" className="report--input" />
            <br></br> <br></br>
            <label className="report--label">ALT</label>
            <input type="text" className="report--input" />
          </form>
        </div>
      </div>
      <span>
        <button className="report--button">DELETE REPORT</button>
        <button className="report--button2">SAVE REPORT</button>
      </span>
    </div>
  );
};
export default PatientReport;
