import { useNavigate } from "react-router-dom";
import "./back.css";

export default function Back() {
  const navigate = useNavigate();
  return (
    <>
      <div className="Back">
        <div className="Back-div" onClick={() => navigate(-1)}>
          <img className="Back-arrow" src="./images/Icon.png" />
        </div>
      </div>
    </>
  );
}
