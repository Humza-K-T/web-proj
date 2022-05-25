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
          <ReportTable
            inp1="CBC-WBC"
            inp2="CBC-Platelets"
            inp3="CBC-Hemoglobin"
            inp4="Creatinine"
            inp5="eGFR"
            inp6="AST"
            inp7="ALT"


          />
          <ReportTable
            inp1="HDL"
            inp2="BUN"
            inp3="Protein"
            inp4="GGT"
            inp5="Albumin"
            inp6="Triglyceride"
            inp7="Cholesterol" />
        </div>
        <div className="rightdiv">
          <ReportTable2
            inp1="DC-Segmented Neutrophil"
            inp2="DC-Lymphocytes"
            inp3="DC-Monocytes"
            inp4="DC-Eosinophils"
            inp5="DC-Uric Acid"
            inp6="CBC-Hematocrit"
            inp7="HBA1c"
            inp8="LDL"
            inp9="DC-Basophils"
            inp10="CBC-RBC"
            inp11="Bioimpedence"
          />
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
