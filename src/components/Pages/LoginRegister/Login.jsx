import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { isLoggedInActions } from "../../../store/isLoggedIn-slice";

import { Link } from "react-router-dom";

import classes from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin, setUserLogin] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    // adminLogin(username, password);
    // if (username.trim().length < 1 || password.trim().length < 1) {
    //   alert("Make sure you have filled all the fields correctly!");
    //   return;
    // }

    // dispatch(isLoggedInActions.login({ userID: username }));

    // sessionStorage.setItem("isLoggedIn", true);
    // sessionStorage.setItem("userID", username);

    setTimeout(() => navigate("/admin-panel"), 1);

    // 9913 &lowcast
  };

  // const adminLogin = (username, password) => {

  //   axios
  //     .post("http://localhost:5555/api/user/login", {username,password})
  //     .then((response) => {
  //       console.log("user====",username);
  //       if(response.data.username !== username) {
  //         alert("User is not exit");
  //         return;
  //       }
  //       // dispatch(isLoggedInActions.login({ userID: username }));

  //       sessionStorage.setItem("isLoggedIn", true);
  //       sessionStorage.setItem("username", username);

  //       setTimeout(() => navigate("/admin-panel"), 1);
  //       setUserLogin([response.data, ...userLogin]);
  //     });
  // };

  // const adminLogin = async (username, password) => {
  //   try {
  //     const response = await axios.post("http://localhost:5555/api/user/login", {
  //       username: username,
  //       password: password,
  //     });
  //     console.log("sayali");
  //     console.log(response.data);

  //     // dispatch(isLoggedInActions.login({ userID: username }));

  //     sessionStorage.setItem("isLoggedIn", true);
  //     sessionStorage.setItem("username", username);

  //     setTimeout(() => navigate("/admin-panel"), 1);
  //     setUserLogin([response.data, ...userLogin]);
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  //   //
  //   setUsername("");
  //   setPassword("");
  // };
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={submitHandler}>
          <label htmlFor="username" className={classes.label}>
            Username*
          </label>
          <input
            type="text"
            id="username"
            className={classes.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password" className={classes.label}>
            Password*
          </label>
          <input
            type="password"
            id="password"
            className={classes.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* <p className={classes["password-msg"]}>
            Password must be 8 characters long.
          </p> */}

          <div className={classes["sign-in-btn"]}>
            <button className={classes["sign-in"]} type="submit">
              Log In
            </button>
          </div>
        </form>

        {/* <p className={classes["msg"]}>
          Not registered yet? &nbsp;&nbsp;<Link to="/register">Sign Up</Link>
        </p> */}
      </div>
    </section>
  );
};

export default Login;
