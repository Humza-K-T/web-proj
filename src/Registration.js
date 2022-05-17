import "./regist.css";
import React from "react";
import Back from "./Back";
import Navbar from "./navbar";
import Radio from "./Radio";
import InputX from "./InputX";
import Check from "./Check";
import DashHeading from "./DashHeading";

export default function Registration() {

  const[state, setState] = React.useState({
    name: "",
    dateOfBirth: "",
    contactNo: "",
    height:"",
    gender:"",
    weight:"",
    hospitalId:"",
    randomGluLevel:"",
    fastingGluLevel:"",
    alcohlic: false,
    smoker: false,
    systolicBloodPressure: "",
    diastolicBloodPressure: "",
    kidneyDisease: "",
    familyHistory: ""
  });

  const handleChange = (event) => {
    
    const { name, value , type, checked} = event.target;
    setState({
      ...state,
      [name]: type === "checkbox" ? checked :  value
    });
  };
 
  function handleSubmit(event) {
    event.preventDefault();
    console.log(state);
  }



  return (  
    <>
      <Navbar />
      <div className="Registration">
        <Back />
        <DashHeading name="Registration" />
        <div className="registFields">
          <form method="post" action="http://localhost/registration.php" onSubmit={handleSubmit}>
            <div className="registration-parentdiv">
              <div className="registration-indiv">
                <InputX name="name" />
                <br />
                <InputX name="dateOfBirth" />
                <br />
                <Radio name="gender" gender={state.gender} fun={handleChange} />
                <br />
                <InputX name="contactNo" />
                <br />
                <InputX name="height" />
                <br />
                <InputX name="weight" />
                <br />
                <InputX name="hospitalID" />
                <br />
              </div>

              <div className="registration-indiv">
                <InputX name="randomGluLevel" />
                <br />
                <InputX name="fastingGluLevel" />
                <br />
                <div className="check-buttons">
                  <Check name="alcohlic" checked={state.alcohlic} fun={handleChange}/>
                  <br />
                  <Check name="smoker" checked={state.smoker} fun={handleChange} />
                </div>
                <br />

                <InputX name="systolicBloodPressure" />
                <br />
                <InputX name="diastolicBloodPressure" />
                <br />
                <InputX name="kidneyDisease" />

                <br />
                <InputX name="familyHistory" />
              </div>
            </div>
            <div className="register-button">
              <input type="submit" value="REGISTER" name="Register" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}