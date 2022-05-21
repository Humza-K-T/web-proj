import "./App.css";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="navButtonDiv">
          <button onClick={() => navigate("/dash")}>Dashboard</button>
        </div>
        <div className="navHeading">
          <p>PHARMACOTHERAPY FOR OBESITY MANAGEMENT</p>
        </div>
        <Dropdown />
      </nav>
    </>
  );
}
