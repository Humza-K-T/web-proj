import { Navigate, useNavigate } from "react-router-dom";
import Back from "./Back";
import DashHeading from "./DashHeading";
import "./error.css";

export default function ErrorScreen() {
  const navigate = useNavigate();
  return (
    <>
      <div className="Main-Error-Div">
        <Back />
        <DashHeading name="Page Not Found." />
        <button className="error-return-button" onClick={() => navigate("/")}>
          Return to login
        </button>
      </div>
    </>
  );
}
