import "./Dash.css";
import DashHeading from "./DashHeading";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="DashBody">
        <DashHeading name="DashBoard" />

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

        <div className="DashInput">
          <form action="http://localhost/search.php" onSubmit={() => navigate("/login")} >
          <input type="text" class="css-input" name="search"/>

          <input type="submit" value="Submit" />
          </form>
        </div>

        <div className="DashButtonDiv">
          <button
            type="button"
            class="DashmyButton"
            onClick={() => navigate("/reg")}
          >
            Register New Patient
          </button>
        </div>
      </div>
    </>
  );
}
