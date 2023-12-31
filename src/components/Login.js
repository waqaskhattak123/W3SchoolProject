import React, { useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [getValue, setGetValue] = useState({
    fname: "",
    lname: "",
  });
  const [display, setDisplay] = useState(false);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setGetValue({
      ...getValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(getValue.fname, getValue.lname);
    setDisplay(true);
  };

  return (
    <div>
      {display && (
        <b>
          {" "}
          You have been signed in as' {getValue.fname} with Username '{getValue.fname}' and password is ''{getValue.lname}'
        </b>
      )}
      <section>
        <form className="signin" onSubmit={handleSubmit}>
          <div className="content">
            <h2>Login</h2>
            <div className="form">
              <div className="inputBox">
                <input
                  type="text"
                  required=""
                  onChange={handleOnChange}
                  value={getValue.fname}
                  name="fname"
                />{" "}
                <i>Username</i>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  required=""
                  onChange={handleOnChange}
                  value={getValue.lname}
                  name="lname"
                />{" "}
                <i>Password</i>
              </div>
              <div className="links">
                <NavLink>Forgot Password</NavLink>
                <NavLink to={"/signup/"}>Signup</NavLink>
              </div>
              <div className="inputBox">
                <input type="submit" defaultValue="Login" />
              </div>
            </div>
          </div>
        </form>{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />
      </section>{" "}
      {/* partial */}
    </div>
  );
};

export default Login;
