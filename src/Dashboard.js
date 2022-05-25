import "./Dash.css";
import DashHeading from "./DashHeading";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import React from "react"

export default function Dashboard() {
  const navigate = useNavigate();

  var [alldata,updateAllData]=React.useState([{}]);
  var x=1;
  
  var [state, updateState] = React.useState({
    id:1,
    name:"",
    gender:"",
    registration:""
    
  });

  

  React.useEffect(() => {
    fetch("http://localhost/login.php")
      .then(res => res.json())
      .then(res => {
      //  console.log(res);
      
      updateAllData(res.data);
       //console.log(res.data)
       console.log(alldata)
        //console.log(alldata.length)
        state.id=2
        x=2
        
      });
  }, [x]);



  
  return (
    <>
      <Navbar />
      <div className="DashBody">
        <DashHeading name="DashBoard" />

        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Registration Date and Time</th>
          </tr>
          
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
            <td>{alldata['Registration Date']}</td>
          </tr>
          </>
        )
    })}

          </tbody>
        </table>

        <div className="DashInput">
          <form
            action="http://localhost/search.php"
            onSubmit={() => navigate("/search")}
          >
            <input type="text" className="css-input" name="search" />

            <input type="submit" value="Submit" />
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
