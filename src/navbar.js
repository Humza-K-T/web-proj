import "./App.css";
import Dropdown from "./Dropdown";
export default function Navbar() {
 
  return (
    <>
      <nav className="navbar">
        <div className="navButtonDiv">
          <button>Dashboard</button>
        </div>
        <div className="navHeading">
          <p>PHARMACOTHERAPY FOR OBESITY MANAGEMENT</p>
        </div>
        <Dropdown />
      </nav>
    </>
  );
}
