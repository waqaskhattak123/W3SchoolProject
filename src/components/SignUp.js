import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [getValue, setGetValue] = useState({
    fname: "",
    lname: "",
  });
  const [display, setDisplay] = useState(false);
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setGetValue({
      ...getValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(true);
  };
  return (
    <div>
      {display && (
        <b>
          Thanks for the Registration, Your Credentials is Username'
          {getValue.fname}' Password '{getValue.lname}'
        </b>
      )}
      <section>
        <form className="signin" onSubmit={handleSubmit}>
          <div className="content">
            <h2>Sign Up</h2>
            <div className="form">
              <div className="inputBox">
                <input
                  type="text"
                  required=""
                  name="fname"
                  value={getValue.fname}
                  onChange={handleOnchange}
                />{" "}
                <i>Username</i>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  required=""
                  value={getValue.lname}
                  name="lname"
                  onChange={handleOnchange}
                />{" "}
                <i>Password</i>
              </div>
              <div className="links">
                {" "}
                <NavLink>Forgot Password</NavLink>
                <NavLink to={"/login"}>Login</NavLink>
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

export default SignUp;
