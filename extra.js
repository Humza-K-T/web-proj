import { useNavigate } from "react-router-dom";
import Back from "./Back";
import Navbar from "./navbar";
import PatientHeader from "./PatientHeader";
import "./PatientScreen.css";
import React from "react"
import $ from "jquery";
export default function PatientScreen() {


  const navigate = useNavigate();
  var x=1;

  console.log(JSON.parse(localStorage.getItem("patient")));

  var [state1, updateState1]=React.useState([{}]);

  const [state, updateState]=React.useState({
    pid:JSON.parse(localStorage.getItem("patient")).pid,
    name:JSON.parse(localStorage.getItem("patient")).name,
    dob:JSON.parse(localStorage.getItem("patient")).dob,
    vdate:JSON.parse(localStorage.getItem("patient")).vdate,
    gender:JSON.parse(localStorage.getItem('patient')).gender
  }
  )
  React.useEffect(()=>
    {
    $.ajax({
      type: "POST",
      url: "http://localhost/Dashboard.php",
      data: "search="+JSON.parse(localStorage.getItem("patient")).pid,
      success(data) {
        //console.log(data)
        console.log(JSON.parse(data))
        console.log(JSON.parse(data).data)
        
        updateState1(JSON.parse(data).data);
        console.log(state1);
        
        x=2;
     
        //console.log(state1);
      },
    });
  },[x]);
  

  return (
    <>
      <Navbar />

      <Back />

      <PatientHeader
        name={state.name}
        ID={state.pid}
        DOB={state.dob}
        VisitDate={state.vdate}
        gender={state.gender}
      />
      <div className="buttondiv">
        <button
          className="report--button"
          onClick={() => navigate("/recommendation")}
        >
          Add Recommendation
        </button>
        <button className="report--button" onClick={() => navigate("/report")}>
          Add Lab Report
        </button>
      </div>
      <div>
        <div className="Heading">Patient History</div>
        <div className="table-div">
          <table>
            <tr>
              <th>Sr No.</th>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Visit Date</th>
            </tr>

            {state1.map(function(state1){
        return(
          <>
          <tr>
            <td>{state1.Id}</td>
            <td>{state1.name}</td>
            <td>{state1.gender}</td>
            <td>{state1.Registration_Date}</td>
          </tr>
          </>
        )
    })}
            <tr>
              <td>1.</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2.</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
