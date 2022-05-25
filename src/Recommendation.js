// import React from "react";
import "./PatientReport.css";
import Navbar from "./navbar";
import Back from "./Back";
import PatientHeader from "./PatientHeader";
import "./Recommendation.css";
import RecommendationTable from "./RecommendationTable";
import ReportTable from "./ReportTable";
import { useNavigate } from "react-router-dom";
import React from "react";

import LineChart from "./LineChart";

const Recommendation = () => {
  const navigate = useNavigate();

  const [state, updateState]=React.useState({
    pid:JSON.parse(localStorage.getItem("patient")).pid,
    name:JSON.parse(localStorage.getItem("patient")).name,
    dob:JSON.parse(localStorage.getItem("patient")).dob,
    vdate:JSON.parse(localStorage.getItem("patient")).vdate,
    gender:JSON.parse(localStorage.getItem('patient')).gender
  }
  )

  return (
    <div>
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
      </div>
      <div className="recommendation-body">
        <div className="recommendation--flexContainer">
          <RecommendationTable
            title="Current Medication"
            inp1="LIRAGLUTUDE"
            inp2="NALTREXONE-BUPORPION"
            inp3="ORLISTAT"
            inp4="PHENTERMINE"
            inp5="TOPIRAMATE"
          />
          <ReportTable
            title="Lab Results"
            inp1="WBC"
            inp2="CREATININE"
            inp3="HEMOGLOBIN"
            inp4="eGFR"
            inp5="PLATELETS"
            inp6="AST"
            inp7="ALT"
          />
          <RecommendationTable
            title="Physician Prescribed Medicine"
            inp1="LIRAGLUTUDE"
            inp2="NALTREXONE-BUPORPION"
            inp3="ORLISTAT"
            inp4="PHENTERMINE"
            inp5="TOPIRAMATE"
          />
        </div>
        <div className="recommendation--flexContainer">
          <RecommendationTable
            title="System Prescribed Medication"
            inp1="LIRAGLUTUDE"
            inp2="NALTREXONE-BUPORPION"
            inp3="ORLISTAT"
            inp4="PHENTERMINE"
            inp5="TOPIRAMATE"
          />
          <div className="box5">
            <div className="top">
              <h4> Comments</h4>
              <input></input>
            </div>
            <div className="bottom">
              <div className="recommendation--inline-buttons">
                <button
                  className="rec-report--button"
                  onClick={() => navigate("/patientScreen")}
                >
                  Approve Recommendation
                </button>
                <button
                  className="rec-report--button"
                  onClick={() => navigate("/patientScreen")}
                >
                  Change Recommendation
                </button>
              </div>

              <div className="recommendation--button">
                <button
                  className="rec-report--button"
                  onClick={() => navigate("/patientScreen")}
                >
                  Explanation
                </button>
              </div>
            </div>
          </div>
          <div className="box6">
            <select>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
            </select>
            <div className="imgDiv">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recommendation;
