import "./Dash.css";
import DashHeading from "./DashHeading";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import React from "react"
import $ from "jquery";
import userEvent from "@testing-library/user-event";

export default function Dashboard() {
  const navigate = useNavigate();

  var [alldata,updateAllData]=React.useState([{}]);
  var x=1;
  
  var [state, updateState] = React.useState({
    pid:1,
    name:"",
    gender:"",
    vdate:"",
    dob:"",
    message:"error"
    
  });



   
  console.log(JSON.parse(localStorage.getItem("user")));
  

  React.useEffect(() => {
    fetch("http://localhost/Dashboard.php")
      .then(res => res.json())
      .then(res => {
      //  console.log(res);
      
      updateAllData(res.data);
       //console.log(res.data)
       console.log(res.data)
        console.log(alldata)
        state.id=2
        x=2
        
      });
  }, [x]);

  function handleSubmit(event) {
    // event.stopImmediatePropagation() 
    
    event.preventDefault();
    console.log(state);
  
    const form = $(event.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        console.log(data)
        console.log('test')
        
        updateState({
          ...state,
          message: data,
        }
        );
       
        console.log(state.message);
      
      
       

          if( state.message !== "error"){
           
            console.log(state.message);
            localStorage.setItem(
              "patient",  
              JSON.stringify({ pid:state.message, name:state.name, gender:state.gender, dob:state.dob, vdate:state.vdate})
            );
            navigate("/patientScreen");
          }
          else{
            console.log(state.message);
            navigate("/dash");
          }
      
        

        //src https://www.youtube.com/watch?v=2lJuOh4YlGM
        //    https://github.com/lesterfernandez/redirect-react-router-tutorial
        

        
        

        // state.message === "Welcome" ? navigate("./dash") : navigate("/");
      },
    });
  };




  
  return (
    <>
      <Navbar />
      <div className="DashBody">
        <DashHeading name="DashBoard" />

        <table>
          
          <tbody>
            <tr>
              
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Visit Date</th>
            </tr>

            {alldata.map(function(alldat){
        return(
          <>
          <tr>
            <td>{alldat.Id}</td>
            <td>{alldat.name}</td>
            <td>{alldat.gender}</td>
            <td>{alldat.Registration_Date}</td>
          </tr>
          </>
        )
    })}

          </tbody>
        </table>

        <div className="DashInput">
          <form
            method="post"
            action="http://localhost/search.php"
            onSubmit={handleSubmit}
          >
            <input type="text" className="css-input" name="search" />

            <input type="submit" value="Submit"  />
          </form>
        </div>

        <div className="DashButtonDiv">
          <button
            type="button"
            className="DashmyButton"
            onClick={() => navigate("/reg")}
          >
            Register New Patient
          </button>
        </div>
      </div>
    </>
  );

}
