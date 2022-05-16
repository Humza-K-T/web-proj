import "./regist.css";
import React from "react"
import Back from "./Back"
import Navbar from "./Navbar"
import Radio from "./Radio"
import InputX from "./InputX"
import Check from "./Check"




export default function Registration() {

 
  
  return (
    <div className="Registration">
    <Navbar />
     <Back />
     <div className="reigstFields">
    <form>
    <div className="registration-parentdiv" >
    <div className="registration-indiv">
    <InputX name="Name" />
    <br/>
    <InputX name="Date of Birth" />
    <br/>
    <Radio />
    <br/>
    <InputX name="Contact Number" />
    <br/>
    <InputX name="Height"/>
    <br/>
    <InputX name="Weight"/>
    <br/>
    <InputX name="HospitalID"/>
    <br/>
    
    </div>

    <div className="registration-outdiv">

    <InputX name="Random Glucose Level"/>
    <br/>
    <InputX name="Fasting Glucose Level" />
    <br/>
    <InputX name="Systolic Blood Pressure"/>
    <br/>
    <InputX name="Diastolic Blood Pressure" />
    <br/>
    <InputX name="Kidney Disease" />
    <br/>
    <Check name="Alcohlic"/>
    <br/>
    <Check name="Smoker" />
    <br/>
    <InputX name="Family History" />
    
    </div>
    </div>
      


    <input type="submit" value="REGISTER" name="Register"/>
    </form>

    </div>s
    </div>
  );
}
