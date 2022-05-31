// import React from "react";
import "./PatientReport.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar";
import Back from "./Back";
import PatientHeader from "./PatientHeader";
import ReportTable from "./ReportTable";
import ReportTable2 from "./ReportTable2";
import React from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

// import { ReportTable, ReportTable2 } from './ReportTable.js';
const PatientReport = () => {
  const navigate = useNavigate();

  const [state, updateState]=React.useState({
    pid:JSON.parse(localStorage.getItem("patient")).pid,
    name:JSON.parse(localStorage.getItem("patient")).name,
    dob:JSON.parse(localStorage.getItem("patient")).dob,
    vdate:JSON.parse(localStorage.getItem("patient")).vdate,
    gender:JSON.parse(localStorage.getItem('patient')).gender
  }
  )

  function handleSubmit(event){
    const form = $(event.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        console.log(data)
        console.log('test')
      }
    });
    event.preventDefault();
    navigate("/patientScreen");
    //navigate(-1)}
    console.log(state);
  }

  return (
    <div>
      <Navbar />
      <Back />
      <PatientHeader
        name={state.name}
        ID={state.pid}
        DOB={state.dob}
        VisitDate={state.vdate}
        gender={state.gender}
      />
      <form method="POST" action="http://localhost/Report.php" onSubmit={handleSubmit}>
      <div className="maindiv">
        <div className="leftdiv">

          <input type="hidden" name="id" value={JSON.parse(localStorage.getItem("patient")).pid} />

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
            inp1="DC-Neutrophil"
            inp2="DC-Lymphocytes"
            inp3="DC-Monocytes"
            inp4="DC-Eosinophils"
            inp5="DC-Uric-Acid"
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
       
        <input type="submit"
          className="report--button"
          value="Submit"
       />
         
      </div>
      </form>
    </div>

  );
};
export default PatientReport;
