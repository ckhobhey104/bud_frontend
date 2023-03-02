import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate, useLocation } from "react-router-dom";
import { login } from "../../redux/calls/usersApiCalls";
import CircularProgress from "@mui/material/CircularProgress";
import "./login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state.from.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  const user = useSelector((state) => state.user);
  const visibility = user.isFetching ? "" : "invisible";
  // console.log(user);
  // console.log(location.state?.from?.pathname);

  return (
    <div className="container">
      <div className="wrapper">
        <div className={`circle ${visibility}`}>
          <CircularProgress />
        </div>

        <h1 className="title">Login</h1>
        <form className="loginForm" onSubmit={handleLogin}>
          <input
            type="type"
            placeholder="Username"
            className="input"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="Password"
            placeholder="Password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
