import React, { useState } from "react";
import img from "../images/logo.jpg";
import facebook from "../images/facebook.PNG";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import NavBarCompo from "./NavBarCompo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpperNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTrue, setIsTrue] = useState(true);
  const [isfocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <>
     {/* SideBarStarted */}
    <NavBarCompo/>
     {/* Sidebar Ended */}

      <div className="learn_to_code">
        <h1>Learn To Coding </h1>
        <h2 style={{ marginTop: "70px", color: "yellow" }}>
          With The Worlds Largest Web Developer Site
        </h2>
        <input
          type="text"
          placeholder="Search Our Tutorials e.g HTML"
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            width: "380px",
            height: "50px",
            borderRadius: "20px",
            fontSize: "20px",
            paddingLeft: "10px",
            backgroundColor: "white",
          }}
        />

        <h2
          style={{
            textDecoration: "underline",
            paddingTop: "30px",
            fontSize: "40px",
          }}
        >
          <NavLink
            to={"Html/introduction"}
            style={{ color: "white", paddingLeft: "10px" }}
          >
            Not Sure Where To Begin? Click Here
          </NavLink>
        </h2>
      </div>
      {/* Second Div Ended */}
      {/* 3rd Div is Started */}

      <div style={{ backgroundColor: "#D9EEE1" }} className="Third_div">
        <div
          style={{
            gridColumn: "2",
            display: "grid",
            gridTemplateRows: "100px 100px auto",
            gridGap: "30px",
          }}
        >
          <h1 style={{ fontSize: "80px" }}>HTML</h1>
          <h3>The Language For Building Web Pages</h3>
          <NavLink to={"Html/introduction"}>
            <Button
              className="square bg-primary rounded-pill"
              style={{ width: "150px" }}
            >
              Learn HTML
            </Button>
          </NavLink>

          <NavLink to={"Html/introduction"}>
            <Button
              className="square bg-primary rounded-pill"
              style={{ width: "150px" }}
            >
             Video Tutorials
            </Button>
          </NavLink>
          <NavLink to={"Html/introduction"}>
            <Button
              className="square bg-primary rounded-pill"
              style={{ width: "150px" }}
            >
             HTML Reference
            </Button>
          </NavLink>
          <NavLink to={"Html/introduction"}>
            <Button
              className="square bg-primary rounded-pill"
              style={{ width: "150px" }}
            >
             Get Certifeid
            </Button>
          </NavLink>
        </div>

        <div
          style={{
            backgroundColor: "#E7E9EB",
            width: "360px",
            height: "auto",
            paddingLeft: "40px",
            paddingTop: "30px",
          }}
          className="Third_div_second_div"
        >
          <h2>HTML Example</h2>
          <div style={{ width: "200px" }}>
            <textarea
              style={{ width: "300px", height: "400px" }}
              placeholder="<!DOCTYPE html>
                <html lang= en>
                <head>
                    <meta charset= UTF-8>
                    <meta name= viewport content= width=device-width, initial-scale=1.0>
                    <title>Document</title>
                </head>
                <body>
                    
                </body>
                </html>"
            />
          </div>
         
        </div>
      </div>

      {/* 3rd Div is Ended */}
      {/* 3rd div for css block startd */}
      <div style={{ backgroundColor: "#FFF4A3" }} className="Third_div">
        <div
          style={{
            gridColumn: "2",
            display: "grid",
            gridTemplateRows: "100px 100px auto",
            gridGap: "30px",
          }}
        >
          <h1 style={{ fontSize: "80px" }}>CSS</h1>
          <h3>The Language For Styling Web Pages</h3>
          <NavLink to={"cssdetails/introduction"}>
            <Button
              className="square bg-primary rounded-pill"
              style={{ width: "150px" }}
            >
              Learn CSS
            </Button>
          </NavLink>

          <Button
            className="square bg-primary rounded-pill"
            style={{ width: "150px" }}
          >
            Video Tutorials
          </Button>
          <Button
            className="square bg-primary rounded-pill"
            style={{ width: "150px" }}
          >
            CSS Reference
          </Button>
          <Button
            className="square bg-primary rounded-pill"
            style={{ width: "150px" }}
          >
            Get Certifeid
          </Button>
        </div>

        <div
          style={{
            backgroundColor: "#E7E9EB",
            width: "360px",
            height: "auto",
            paddingLeft: "40px",
            paddingTop: "30px",
          }}
          className="Third_div_second_div"
        >
          <h2>CSS Example</h2>
          <div style={{ width: "200px" }}>
            <textarea
              style={{ width: "300px", height: "400px" }}
              placeholder="body {
                background-color: lightblue;
              }
              
              h1 {
                color: white;
                text-align: center;
              }
              
              p {
                font-family: verdana;
              }"
            />
          </div>
         
        </div>
      </div>
      {/* 3rd div for css block ended */}
      {/* 3rd div for JavaScript block Started */}
      <div style={{ backgroundColor: "black" }} className="Third_div">
        <div
          style={{
            gridColumn: "2",
            display: "grid",
            gridTemplateRows: "100px 100px auto",
            gridGap: "30px",
            color: "white",
          }}
        >
          <h1 style={{ fontSize: "80px" }}>JAVASCRIPT</h1>
          <h3>The Language For Programming Web Pages</h3>
          <NavLink to={"learnJavaScript/introduction"}>
            <Button
              className="square bg-primary rounded-pill"
              style={{ width: "150px" }}
            >
              Learn JavaScript
            </Button>
          </NavLink>

          <NavLink to={"learnJavaScript/introduction"}>
            <Button
              className="square bg-primary rounded-pill"
              style={{ width: "150px" }}
            >
              Vedio Tutorials
            </Button>
          </NavLink>
          <NavLink to={"learnJavaScript/introduction"}>
            <Button
              className="square bg-primary rounded-pill"
              style={{ width: "150px" }}
            >
              Reference
            </Button>
          </NavLink>
          <NavLink to={"learnJavaScript/introduction"}>
            <Button
              className="square bg-primary rounded-pill"
              style={{ width: "150px" }}
            >
              Get Certifeid
            </Button>
          </NavLink>
        </div>

        <div
          style={{
            backgroundColor: "#E7E9EB",
            width: "360px",
            height: "auto",
            paddingLeft: "40px",
            paddingTop: "30px",
            color: "black",
          }}
          className="Third_div_second_div"
        >
          <h2>JavaScript Example</h2>
          <div style={{ width: "200px" }}>
            <textarea
              style={{ width: "300px", height: "400px" }}
              placeholder="<button onclick=myFunction()>Click Me!</button>

              <script>
              function myFunction() {
                let x = document.getElementById(demo);
                x.style.fontSize = 25px;
                x.style.color = red;
              }
              </script>"
            />
          </div>
         
        </div>
      </div>
      {/* 3rd div for JavaScript block Ended */}
      {/* 3rd div for Phyton block Started */}
      <div style={{ backgroundColor: "#F3ECEA" }} className="Third_div">
        <div
          style={{
            gridColumn: "2",
            display: "grid",
            gridTemplateRows: "100px 100px auto",
            gridGap: "30px",
            color: "black",
          }}
        >
          <h1 style={{ fontSize: "80px" }}>Phyton</h1>
          <h3>The popular Programming Language</h3>
          <NavLink to={"/phython/introduction"}>
            <Button
              className="square bg-primary rounded-pill"
              style={{ width: "150px" }}
            >
              Learn Phyton
            </Button>
          </NavLink>

          <Button
            className="square bg-primary rounded-pill"
            style={{ width: "150px" }}
          >
            Video Tutorials
          </Button>
          <Button
            className="square bg-primary rounded-pill"
            style={{ width: "150px" }}
          >
            Phyton Reference
          </Button>
          <Button
            className="square bg-primary rounded-pill"
            style={{ width: "150px" }}
          >
            Get Certifeid
          </Button>
        </div>

        <div
          style={{
            backgroundColor: "#E7E9EB",
            width: "360px",
            height: "auto",
            paddingLeft: "40px",
            paddingTop: "30px",
            color: "black",
          }}
          className="Third_div_second_div"
        >
          <h2>Phyton Example</h2>
          <div style={{ width: "200px" }}>
            <textarea
              style={{ width: "300px", height: "400px" }}
              placeholder="if 5 > 2:
              print(Five is greater than two!)"
            />
          </div>
         
        </div>
      </div>
      {/* 3rd div for Phyton block Ended */}
      {/* 3rd div for SQL block Started */}
      <div style={{ backgroundColor: "#96D4D4" }} className="Third_div">
        <div
          style={{
            gridColumn: "2",
            display: "grid",
            gridTemplateRows: "100px 100px auto",
            gridGap: "30px",
            color: "black",
          }}
        >
          <h1 style={{ fontSize: "80px" }}>SQL</h1>
          <h3>A Language for Accessing Database</h3>
          <NavLink to={"sql/introduction"}>
            <Button
              className="square bg-primary rounded-pill"
              style={{ width: "150px" }}
            >
              Learn SQL
            </Button>
          </NavLink>

          <NavLink to={"sql/introduction"}>
            <Button
              className="square bg-primary rounded-pill"
              style={{ width: "150px" }}
            >
              Video tutorial
            </Button>
          </NavLink>
          <NavLink to={"sql/introduction"}>
            <Button
              className="square bg-primary rounded-pill"
              style={{ width: "150px" }}
            >
              SQL Reference
            </Button>
          </NavLink>
          <NavLink to={"sql/introduction"}>
            <Button
              className="square bg-primary rounded-pill"
              style={{ width: "150px" }}
            >
              get Certifeid
            </Button>
          </NavLink>
        </div>

        <div
          style={{
            backgroundColor: "#E7E9EB",
            width: "360px",
            height: "auto",
            paddingLeft: "40px",
            paddingTop: "30px",
            color: "black",
          }}
          className="Third_div_second_div"
        >
          <h2>SQL Example</h2>
          <div style={{ width: "200px" }}>
            <textarea
              style={{ width: "300px", height: "400px" }}
              placeholder="SELECT * FROM Customers
              WHERE Country='Mexico';"
            />
          </div>
         
        </div>
      </div>
      {/*  div for PHP block Started */}
      <div className="php_div">
        <div className="php_div_commonClass">
          <h1>PHP</h1>
          <h4>A Web Server Programming Language</h4>
          <NavLink to={"Php/introduction"}>
            <Button>Learn PHP</Button>
          </NavLink>
        </div>
        <div
          className="php_div_commonClass"
          style={{ backgroundColor: "#FFF4A3" }}
        >
          <h1>JQUERY</h1>
          <h4>A JavaScript Library For Building Web Pages</h4>
          <NavLink to={"Jquery/introduction"}>
            <Button>Learn JQUERY</Button>
          </NavLink>
        </div>
        <div
          className="php_div_commonClass"
          style={{ backgroundColor: "#fff" }}
        >
          <h1>JAVA</h1>
          <h4>A Programming Language</h4>
          <NavLink to={"Java/introduction"}>
            <Button>Learn JAVA</Button>
          </NavLink>
        </div>
        <div
          className="php_div_commonClass"
          style={{ backgroundColor: "#D9EEE1" }}
        >
          <h1>C++</h1>
          <h4>A Programming Language</h4>
          <NavLink to={"C++/introduction"}>
            <Button>Learn C++</Button>
          </NavLink>
        </div>
        <div
          className="php_div_commonClass"
          style={{ backgroundColor: "#96D4D4" }}
        >
          <h1>W3.CSS</h1>
          <h4>A CSS Framework for Faster and Better Responsive Webpages</h4>
          <NavLink to={"BootstrapeComponentdetails/w3cssintroduction"}>
            <Button>Learn W3.CSS</Button>
          </NavLink>
        </div>
        <div
          className="php_div_commonClass"
          style={{ backgroundColor: "#E7E9EB" }}
        >
          <h1>BOOTSTRAPE</h1>
          <h4>A CSS Framework For Better Webpages</h4>
          <NavLink to={"BootstrapeComponentdetails/bootstrapeintroduction"}>
            <Button>Learn bootstrap</Button>
          </NavLink>
        </div>
      </div>
      {/*  div for PHP block Ended */}
      <hr />
      {/* Social Media Platorm Started */}
      <div className="social_media">
        <h2>Follow Us</h2>
        <NavLink to={"#"}>
          <img src={facebook} width={"50px"} height={"30px"} />
        </NavLink>
        <NavLink to={"#"}>
          <img src={instagram} width={"50px"} height={"30px"} />
        </NavLink>
        <NavLink to={"#"}>
          <img src={twitter} width={"50px"} height={"30px"} />
        </NavLink>
      </div>
      {/* Social Media Platorm Ended */}
      <hr />
      {/* Footer Started */}

      <div className="footer_container">
        <div className="footer_container_top_tutorials">
          <h2>Top Tutorials</h2>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"Html/introduction"}
            >
              HTML
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"cssdetails/introduction"}
            >
              CSS
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"learnJavaScript/introduction"}
            >
              JavaScript
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"Html/introduction"}
            >
              How To
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"sql/introduction"}
            >
              SQL
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"phython/introduction"}
            >
              Phyton
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"BootstrapeComponentdetails/w3cssintroduction"}
            >
              W3.CSS
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"BootstrapeComponentdetails/bootstrapeintroduction"}
            >
              BOOTSTRAPE
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"Java/introduction"}
            >
              JAVA
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"C++/introduction"}
            >
              C++
            </NavLink>
          </span>
        </div>
        <div
          style={{
            gridColumn: "2/2",
          }}
          className="footer_container_top_tutorials"
        >
          <h2>Top Reference</h2>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"Html/introduction"}
            >
              HTML
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"cssdetails/introduction"}
            >
              CSS
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"learnJavaScript/introduction"}
            >
              JavaScript
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"Html/introduction"}
            >
              How To
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"sql/introduction"}
            >
              SQL
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"phython/introduction"}
            >
              Phyton
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"BootstrapeComponentdetails/w3cssintroduction"}
            >
              W3.CSS
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"BootstrapeComponentdetails/bootstrapeintroduction"}
            >
              BOOTSTRAPE
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"Java/introduction"}
            >
              JAVA
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"C++/introduction"}
            >
              C++
            </NavLink>
          </span>
        </div>
        <div
          style={{
            gridColumn: "3/3",
          }}
          className="footer_container_top_tutorials"
        >
          <h2>Top Example</h2>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"Html/introduction"}
            >
              HTML
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"cssdetails/introduction"}
            >
              CSS
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"learnJavaScript/introduction"}
            >
              JavaScript
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"Html/introduction"}
            >
              How To
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"sql/introduction"}
            >
              SQL
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"phython/introduction"}
            >
              Phyton
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"BootstrapeComponentdetails/w3cssintroduction"}
            >
              W3.CSS
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"BootstrapeComponentdetails/bootstrapeintroduction"}
            >
              BOOTSTRAPE
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"Java/introduction"}
            >
              JAVA
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"C++/introduction"}
            >
              C++
            </NavLink>
          </span>
        </div>
        <div
          style={{
            gridColumn: "4/4",
          }}
          className="footer_container_top_tutorials"
        >
          <h2>Get Certifeid</h2>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"Html/introduction"}
            >
              HTML
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"cssdetails/introduction"}
            >
              CSS
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"learnJavaScript/introduction"}
            >
              JavaScript
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"Html/introduction"}
            >
              How To
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"sql/introduction"}
            >
              SQL
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"phython/introduction"}
            >
              Phyton
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"BootstrapeComponentdetails/w3cssintroduction"}
            >
              W3.CSS
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"BootstrapeComponentdetails/bootstrapeintroduction"}
            >
              BOOTSTRAPE
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"Java/introduction"}
            >
              JAVA
            </NavLink>
          </span>
          <span>
            <NavLink
              className={"footer_container_top_tutorials_links"}
              to={"C++/introduction"}
            >
              C++
            </NavLink>
          </span>
        </div>
      </div>

      {/* Footer Ended */}
    </>
  );
};
export default UpperNavbar;
