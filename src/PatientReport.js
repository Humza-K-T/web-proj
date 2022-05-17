// import React from "react";
import "./PatientReport.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar";
import Back from "./Back";
const PatientReport = () => {
  return (
    <div>
      <Navbar />
      <Back />
      <div className="report--infobox">
        <FontAwesomeIcon
          icon={faUserCircle}
          size={"10x"}
          color={"white"}
          display={"center"}
          className="report--icon"
        />
        <div className="report--infobox-text">
          <table>
            <tr>
              <th>Name </th>
              <td> Bilal</td>
            </tr>
            <br></br>
            <tr>
              <th>ID </th>
              <td> 1234</td>
            </tr>
            <br></br>
            <tr>
              <th>DOB </th>
              <td> 12-03-1989</td>
            </tr>
            <br></br>
            <tr>
              <th>Visit Date</th>
              <td> 03-05-2021</td>
            </tr>
            <br></br>
          </table>
        </div>
      </div>
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
