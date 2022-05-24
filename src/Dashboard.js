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
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Registration Date and Time</th>
          </tr>
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
