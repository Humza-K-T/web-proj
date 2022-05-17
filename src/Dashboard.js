import "./Dash.css";
import Navbar from "./navbar";
export default function Dashboard() {
  return (
    <> 
      <Navbar/>
       <div className="DashButton">
       <img className="Dashpic" src="./images/Dashboard.png" />
        </div>

        <div>
        <table>
  <tr>
    <th>Sr No.</th>
    <th>ID</th>
    <th>Name</th>
    <th>Gender</th>
    <th>Visit Date</th>
  </tr>
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

        <div className="DashInput">
        <input type="text"  class="css-input" />
        </div>

        <div className="DashButtonDiv">
        <button type="button" class="DashmyButton">Register New Patient</button>
        </div>

    </>     
    
    

  );
}


