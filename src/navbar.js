import "./App.css";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "./App";

export default function Navbar() {
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  return (
    <>
      <nav className="navbar">
        <div className="navButtonDiv">
          <button onClick={() => navigate("/dash")}>Dashboard</button>
        </div>
        <div className="navHeading">
          <p>PHARMACOTHERAPY FOR OBESITY MANAGEMENT</p>
        </div>
        {/* <Dropdown /> */}

        <div className="navButtonDiv">
          <button
            onClick={() => {
              console.log(1);
              setUser({
                loggedIn: false,
              });
              console.log(2);

              localStorage.setItem(
                "user",
                JSON.stringify({ loggedIn: false, name: "afra" })
              );
              console.log(3);

              // localStorage.clear();
              // navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}
