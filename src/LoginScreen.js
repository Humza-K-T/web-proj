import React from "react";
import "./App.css";
export default function LoginScreen() {
  return (
    <div className="loginBody">
      <div className="outerDiv">
        <div className="imageDiv">
          <img
            src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </div>
        <div className="loginDiv">
          <div className="titleDiv">
            <h1 className="loginTitle">
              Pharmacotherapy for Obesity Management
            </h1>
          </div>
          <div className="loginDetailsDiv">
            <h2 className="title2">Welcome,</h2>
          </div>
          <div className="loginFieldsDiv">
            <h3>Username</h3>
            <input type="text" />
            <h3>Password</h3>
            <input type="password" />
          </div>
          <div className="loginButtonDiv">
            <button title="Login">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
