import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";

import classes from "./Register.module.css";

const Register = () => {
  const [users, setUsers] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {});

  const confirmPasswordBlurHandler = () => {
    if (password !== confirmPassword) {
      alert("Password do not match and must be 8 characters long");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let id = Math.floor(Math.random() * 10000);

    let existingUsers = JSON.parse(localStorage.getItem("users"));

    // console.log(existingUsers);

    if (existingUsers === null) {
      setUsers([]);
    } else {
      const existingUser = existingUsers.filter(
        (user) => user.username === username.trim()
      );

      // console.log(existingUser);

      if (existingUser.length !== 0) {
        alert("This username is taken");

        setUsername("");
        setPassword("");
        setConfirmPassword("");

        return;
      }
    }

    // console.log(existingUsers);

    if (
      username !== "" &&
      password.length >= 8 &&
      password === confirmPassword
    ) {
      setUsers((prev) => [
        ...prev,
        {
          id,
          username,
          password
        }
      ]);

      // console.log({
      //   id,
      //   username,
      //   password
      // });

      localStorage.setItem(
        "users",
        JSON.stringify([
          ...users,
          {
            id,
            username,
            password
          }
        ])
      );

      alert("New user registered");

      setUsername("");
      setPassword("");
      setConfirmPassword("");
      return;
    } else {
      alert(
        "Check credentials, either passwords do not match or not 8 characters long"
      );

      return;
    }
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={submitHandler}>
          <label htmlFor="username" className={classes.label}>
            Username
          </label>
          <input
            type="text"
            id="username"
            className={classes.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className={classes.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={classes.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirm-password" className={classes.label}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            className={classes.input}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={confirmPasswordBlurHandler}
          />
          <p className={classes["password-msg"]}>
            Password must be 8 characters long.
          </p>

          <div className={classes["register-btn"]}>
            <button className={classes["sign-up"]} type="submit">
              Sign Up
            </button>
          </div>
        </form>

        <p className={classes.msg}>
          Already registered? &nbsp;&nbsp;<Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
