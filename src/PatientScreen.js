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
    gender:JSON.parse(localStorage.getItem('patient')).gender,
  }
  )

  console.log(state.gender)
  React.useEffect(()=>
    {
    $.ajax({
      type: "POST",
      url: "http://localhost/searchPatient.php",
      data: "search="+JSON.parse(localStorage.getItem("patient")).pid,
      success(data) {
        //console.log(data)
       // console.log(JSON.parse(data))
        console.log(JSON.parse(data).dat)
      
        updateState1(JSON.parse(data).dat);
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
              <th>RBC</th>
            </tr>

            {state1.map(function(state1,i){
        return(
          <>
          <tr>
            <td>{i}</td>
            <td>{JSON.parse(localStorage.getItem("patient")).pid}</td>
            <td>{JSON.parse(localStorage.getItem("patient")).name}</td>
            <td>{state1.rbc}</td>
          </tr>
          </>
        )
    })}
           
          </table>
        </div>
      </div>
    </>
  );
}
