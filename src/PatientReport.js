// import React from "react";
import "./PatientReport.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar";
import Back from "./Back";
import PatientHeader from "./PatientHeader";
import ReportTable from "./ReportTable";
import ReportTable2 from "./ReportTable2";
import { useNavigate } from "react-router-dom";

// import { ReportTable, ReportTable2 } from './ReportTable.js';
const PatientReport = () => {
  const navigate = useNavigate();
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
      <div className="maindiv">
        <div className="leftdiv">
          <ReportTable />
          <ReportTable />
        </div>
        <div className="rightdiv">
          <ReportTable2 />
        </div>
      </div>
      <div className="buttondiv">
        <button
          className="report--button"
          onClick={() => navigate("/patientScreen")}
        >
          DELETE REPORT
        </button>
        <button
          className="report--button"
          onClick={() => navigate("/patientScreen")}
        >
          SAVE REPORT
        </button>
      </div>
    </div>
  );
};
export default PatientReport;
