import "./regist.css";
import React from "react";
import Back from "./Back";
import Navbar from "./navbar";
import Radio from "./Radio";
import InputX from "./InputX";
import Check from "./Check";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import DashHeading from "./DashHeading";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [state, setState] = React.useState({
    name: "",
    dateOfBirth: new Date(),
    contactNo: "",
    height: "",
    gender: "",
    weight: "",
    hospitalId: "",
    randomGluLevel: "",
    fastingGluLevel: "",
    alcohlic: false,
    smoker: false,
    systolicBloodPressure: "",
    diastolicBloodPressure: "",
    kidneyDisease: "",
    familyHistory: "",
  });

  const [startDate, setStartDate] = React.useState(new Date());

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setState({
      ...state,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/dash");
    //navigate(-1)}
    console.log(state);
  }
  setTimeout(() => {
    this.yourFunction();
    }, 1000);

  return (
    <>
      <Navbar />
      <div className="Registration">
        <Back />
        <DashHeading name="Registration" />
        <div className="registFields">
          <form
            method="post"
            action="http://localhost/registration.php"
            onSubmit={handleSubmit}
          >
            
            <div className="registration-parentdiv">
              <div className="registration-indiv">
                <InputX name="name" fun={handleChange} />
                <br />
                {/* <InputX name="dateOfBirth" fun={handleChange} /> */}
                <div className="inputx">
                Date of Birth:
                <DatePicker className="in" name="dateOfBirth" selected={state.dateOfBirth} onChange={(date: Date) => setState({...state,
                  dateOfBirth:date} )
                  } />
                  </div>
                <br />
                <Radio name="gender" gender={state.gender} fun={handleChange} />
                <br />
                <InputX name="contactNo" fun={handleChange} />
                <br />
                <InputX name="height" fun={handleChange} />
                <br />

                <InputX name="weight" fun={handleChange} />
                <br />
                <InputX name="hospitalId" fun={handleChange} />
                <br />
              </div>

              <div className="registration-indiv">
                <InputX name="randomGluLevel" fun={handleChange} />
                <br />
                <InputX name="fastingGluLevel" fun={handleChange} />
                <br />
                <div className="check-buttons">
                  <Check
                    name="alcohlic"
                    checked={state.alcohlic}
                    fun={handleChange}
                  />
                  <br />
                  <Check
                    name="smoker"
                    checked={state.smoker}
                    fun={handleChange}
                  />
                </div>
                <br />

                <InputX name="systolicBloodPressure" fun={handleChange} />
                <br />
                <InputX name="diastolicBloodPressure" fun={handleChange} />
                <br />
                <InputX name="kidneyDisease" fun={handleChange} />

                <br />
                <InputX name="familyHistory" fun={handleChange} />
              </div>
            </div>
            <div className="register-button">
              <input
                type="submit"
                value="REGISTER"
                name="Register"
                
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
