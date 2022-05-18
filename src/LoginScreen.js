import React from "react";
import "./App.css";
export default function LoginScreen() {

  const [state, updateState] = React.useState({
    username: "",
    password: "",
    return: 0
  });

  function onChangeValue(event) {
    updateState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
   
    console.log(state);
  }
  

  React.useState(
    () => {
      fetch("http://localhost/login.php")
      .then(res => res.text())
      .then(res => {
        updateState({
          ...state,
          return: res
        });
      });
    },
    [state.username]
  );
  


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
              {state.return}
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
