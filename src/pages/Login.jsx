import React, { useContext } from "react";
import { WrapperContext } from "../App";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setIsLogin } = useContext(WrapperContext);

  const navigate = useNavigate();

  function login() {
    setIsLogin(true);
    navigate("/");
  }

  return (
    <div className="container p-5">
      <h2>Login Form</h2>
      <button className="btn btn-primary" onClick={login}>
        Login
      </button>
    </div>
  );
}

export default Login;
