import React from "react";
import "./App.css";
import $ from "jquery";

export default function LoginScreen() {

  const [state, updateState] = React.useState({
    username: "",
    password: "",
    message : "afra"
  });

  function onChangeValue(event) {
    updateState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = $(e.target);
    $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: form.serialize(),
        success(data) {
            updateState(
              {
                ...state,
                message: data
              }
            );
        },
    });
};
  

  // React.useState(
  //   () => {
  //     fetch("http://localhost/login.php")
  //     .then(res => res.text())
  //     .then(res => {
  //       updateState({
  //         ...state,
  //         return: res
  //       });
  //     });
  //   },
  //   [state.username]
  // );
  


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
              {state.message}
            </h1>
          </div>
          <div className="loginDetailsDiv">
            <h2 className="title2">Welcome,</h2>
          </div>
          <form method="post" action="http://localhost/login.php" onSubmit={handleSubmit}>  
          <div className="loginFieldsDiv">
            <h3>Username</h3>
            <input type="text" name="username" onChange={onChangeValue} />
            <h3>Password</h3>
            <input type="password" name="password" onChange={onChangeValue} />
          </div>
          
          <div className="loginButtonDiv">
            <button title="Login">Login</button>
          </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}