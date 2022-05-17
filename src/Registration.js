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
                <InputX name="name" fun={handleChange} />
                <br />
                <InputX name="dateOfBirth" fun={handleChange} />
                <br />
                <Radio name="gender" gender={state.gender} fun={handleChange} />
                <br />
                <InputX name="contactNo" fun={handleChange} />
                <br />
                <InputX name="height" fun={handleChange}/>
                <br />
                <InputX name="weight" fun={handleChange}/>
                <br />
                <InputX name="hospitalID" fun={handleChange} />
                <br />
              </div>

              <div className="registration-indiv">
                <InputX name="randomGluLevel"  fun={handleChange} />
                <br />
                <InputX name="fastingGluLevel" fun={handleChange} />
                <br />
                <div className="check-buttons">
                  <Check name="alcohlic" checked={state.alcohlic} fun={handleChange}/>
                  <br />
                  <Check name="smoker" checked={state.smoker} fun={handleChange} />
                </div>
                <br />

                <InputX name="systolicBloodPressure" fun={handleChange} />
                <br />
                <InputX name="diastolicBloodPressure" fun={handleChange} />
                <br />
                <InputX name="kidneyDisease" fun={handleChange} />

                <br />
                <InputX name="familyHistory"  fun={handleChange} />
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