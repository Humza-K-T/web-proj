// import React from "react";
import "./PatientReport.css";
import Navbar from "./navbar";
import Back from "./Back";
import PatientHeader from "./PatientHeader";
import "./Recommendation.css";
import RecommendationTable from "./RecommendationTable";
import ReportTable from "./ReportTable";



const Recommendation = () => {
    return (
        <div>
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
            </div>
            <div className="recommendation--flexContainer">
                <RecommendationTable title="Current Medication" />
                < ReportTable title="Lab Results" />
                <RecommendationTable title="Physician Prescribed Medicine" />
            </div>
            <div className="recommendation--flexContainer">
                <RecommendationTable title="System Prescribed Medication" />
                <div className="box5">
                    <div className="top">
                        <h4> Comments</h4>
                    </div>
                    <div className="bottom">
                        <button className="report--button">DELETE REPORT</button>
                        <button className="report--button">SAVE REPORT</button>
                        <br></br>
                        <button className="report--button">SAVE REPORT</button>
                    </div>
                </div>
                <div className="box6">
                    <div className="imgDiv">
                        <img src="https://www.oecd.org/media/oecdorg/directorates/directorateforemploymentlabourandsocialaffairs/46049624Graph%201.PNG" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Recommendation;