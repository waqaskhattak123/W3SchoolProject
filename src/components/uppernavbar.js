import React, { useState } from "react";
import img from "../images/logo.jpg";
import facebook from "../images/facebook.PNG";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpperNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTrue, setIsTrue] = useState(true);
  const [isfocus, setIsFocus] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
    setIsVisible(!isVisible);
    setIsTrue(!isTrue);
  };
  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <>
      <div className="container">
        <img src={img} alt="img" width="40px" height="40px" />
        <span onClick={handleClick} className="tutortials">
          Tutorials
        </span>
        <span>Exercies</span>
        <span>Get Certifeid</span>
        <span>Services</span>
        <span>BootCamps</span>
        <span>Spaces</span>
        <span>Login</span>
        <span>SignUp</span>
      </div>
      {isVisible && (
        // HTML COURSE
        <div className="tutorials-div">
          <span style={{ fontSize: "50px" }}>
            Tutorials
            <div className="under-tutorials">
              <h1>FRONT END</h1>
              <span>
                <span>Learn</span> HTML{" "}
                <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                CSS <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                RWD <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                BOOTSTRAPE{" "}
                <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                W3.CSS <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                SASS <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                COLORS <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                ICONS <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                SVG <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                CANVAS <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                GRAPHICS <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                HOW TO <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <h3>Data Analytics</h3>
              <span>
                <span>Learn</span> AI{" "}
                <NavLink className="under_tutorials_span">Tutorials</NavLink>
              </span>
              <span>
                <span>Learn</span> GENERATIVE AI{" "}
                <NavLink className="under_tutorials_span">Tutorials</NavLink>
              </span>
              <span>
                <span>Learn</span> CHAT GPT 3.5{" "}
                <NavLink className="under_tutorials_span">Tutorials</NavLink>
              </span>
              <span>
                <span>Learn</span> CHAT GPT 4{" "}
                <NavLink className="under_tutorials_span">Tutorials</NavLink>
              </span>
            </div>
          </span>
          <span>
            <input
              type="text"
              style={{
                borderRadius: "40px",
                width: "282px",
                height: "44px",
              }}
              placeholder="Search Tutorials"
            />
            {/* Front End */}
            <div className="under-tutorials1">
              <h1>Front End Programming</h1>
              <span>
                <span>Learn</span> JAVASCRIPT{" "}
                <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                REACT <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                JQUERY <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                VUE <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                ANGULAR <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                JSON <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                AJAX <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                APPMIL <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                W3.JS <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <h3>Web Building</h3>
              <span>Create a Website</span>
              <span>Create a Server</span>
              <span>Where to Start</span>
              <span>Web Templates</span>
              <span>Web Statistics</span>
              <span>Web Certificates</span>
            </div>
          </span>

          <span>
            <select>
              <option value={"Sort by"}>Sort by</option>
              <option>Alphabatically</option>
              <option>Popularity</option>
            </select>
            {/* Backend Tutorials */}

            <div className="under-tutorials1">
              <h1>Backend</h1>
              <span>
                <span>Learn</span> PHYTON{" "}
                <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                SQL <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                MYSQL <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                PHP <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                JAVA <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                C <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                C++ <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                C# <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                R <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                KOTLIN <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
            </div>
          </span>

          <span>
            <FontAwesomeIcon
              icon="fa-solid fa-x"
              size="lg"
              onClick={handleClick}
              className="cross"
            />
          </span>
        </div>
      )}
      {/* Second Div Started */}
      {isTrue && (
        <div className="second-div">
          <span> HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
          <span>SQL</span>
          <span>PHYTON</span>
          <span>JAVA</span>
          <span>PHP</span>
          <span>HOW TO</span>
          <span>W3.CSS</span>
          <span>C</span>
          <span>C++</span>
          <span>C#</span>
          <span>JQUERY</span>
          <span>EXCEL</span>
          <span>XML</span>
          <span>DJANGO</span>
          <span>NODEJS</span>
          <span>R</span>
          <span>TYPSCRIPT</span>
          <span>ANGULAR</span>
        </div>
      )}
      <div className="second_div_Two">
        <h1>Learn To Coding</h1>
        <h2 style={{ marginTop: "70px", color: "yellow" }}>
          With The Worlds Largest Web Developer Site
        </h2>
        <input
          type="text"
          placeholder="Search Our Tutorials e.g HTML"
          style={{
            width: "380px",
            height: "34px",
            borderRadius: "20px",
            fontSize: "20px",
            paddingLeft: "10px",
            backgroundColor: "white",
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <h2
          style={{
            textDecoration: "underline",
            paddingTop: "30px",
            fontSize: "40px",
          }}
        >
          <NavLink style={{ color: "white", paddingLeft: "10px" }}>
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
          <Button
            className="square bg-primary rounded-pill"
            style={{ width: "150px" }}
          >
            Learn HTML
          </Button>
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
            HTML Reference
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
          <Button
            className="square bg-primary rounded-pill mx-2"
            color="success"
            style={{ width: "150px", color: "danger" }}
          >
            Try It Yourself
          </Button>
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
          <Button
            className="square bg-primary rounded-pill"
            style={{ width: "150px" }}
          >
            Learn CSS
          </Button>
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
          <Button
            className="square bg-primary rounded-pill mx-2"
            color="success"
            style={{ width: "150px", color: "danger" }}
          >
            Try It Yourself
          </Button>
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
          <Button
            className="square bg-primary rounded-pill"
            style={{ width: "150px" }}
          >
            Learn JavaScript
          </Button>
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
            JavaScript Reference
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
          <Button
            className="square bg-primary rounded-pill mx-2"
            color="success"
            style={{ width: "150px", color: "danger" }}
          >
            Try It Yourself
          </Button>
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
          <Button
            className="square bg-primary rounded-pill"
            style={{ width: "150px" }}
          >
            Learn Phyton
          </Button>
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
          <Button
            className="square bg-primary rounded-pill mx-2"
            color="success"
            style={{ width: "150px", color: "danger" }}
          >
            Try It Yourself
          </Button>
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
          <Button
            className="square bg-primary rounded-pill"
            style={{ width: "150px" }}
          >
            Learn SQL
          </Button>
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
            SQL Reference
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
          <h2>SQL Example</h2>
          <div style={{ width: "200px" }}>
            <textarea
              style={{ width: "300px", height: "400px" }}
              placeholder="SELECT * FROM Customers
              WHERE Country='Mexico';"
            />
          </div>
          <Button
            className="square bg-primary rounded-pill mx-2"
            color="success"
            style={{ width: "150px", color: "danger" }}
          >
            Try It Yourself
          </Button>
        </div>
      </div>
      {/*  div for PHP block Started */}
      <div className="php_div">
        <div className="php_div_commonClass">
          <h1>PHP</h1>
          <h4>A Web Server Programming Language</h4>
          <Button>Learn PHP</Button>
        </div>
        <div
          className="php_div_commonClass"
          style={{ backgroundColor: "#FFF4A3" }}
        >
          <h1>JQUERY</h1>
          <h4>A JavaScript Library For Building Web Pages</h4>
          <Button>Learn JQUERY</Button>
        </div>
        <div
          className="php_div_commonClass"
          style={{ backgroundColor: "#fff" }}
        >
          <h1>JAVA</h1>
          <h4>A Programming Language</h4>
          <Button>Learn JAVA</Button>
        </div>
        <div
          className="php_div_commonClass"
          style={{ backgroundColor: "#D9EEE1" }}
        >
          <h1>C++</h1>
          <h4>A Programming Language</h4>
          <Button>Learn C++</Button>
        </div>
        <div
          className="php_div_commonClass"
          style={{ backgroundColor: "#96D4D4" }}
        >
          <h1>W3.CSS</h1>
          <h4>A CSS Framework for Faster and Better Responsive Webpages</h4>
          <Button>Learn W3.CSS</Button>
        </div>
        <div
          className="php_div_commonClass"
          style={{ backgroundColor: "#E7E9EB" }}
        >
          <h1>BOOTSTRAPE</h1>
          <h4>A CSS Framework For Better Webpages</h4>
          <Button>Learn bootstrap</Button>
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
            <NavLink className={'footer_container_top_tutorials_links'}>HTML</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>CSS</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>JavaScript</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>How To</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>SQL</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>Phyton</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>W3.CSS</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>BOOTSTRAPE</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>JAVA</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>C++</NavLink>
          </span>
        </div>
        <div
          style={{
            gridColumn: "2/2",
          }}
          className="footer_container_top_tutorials">
          <h2>Top Reference</h2>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>HTML</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>CSS</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>JavaScript</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>How To</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>SQL</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>Phyton</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>W3.CSS</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>BOOTSTRAPE</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>JAVA</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>C++</NavLink>
          </span>
        </div>
        <div
          style={{
            gridColumn: "3/3",
          }}
          className="footer_container_top_tutorials">
          <h2>Top Example</h2>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>HTML</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>CSS</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>JavaScript</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>How To</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>SQL</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>Phyton</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>W3.CSS</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>BOOTSTRAPE</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>JAVA</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>C++</NavLink>
          </span>
        </div>
        <div  style={{
            gridColumn: "4/4",
          }} className="footer_container_top_tutorials">
          <h2>Get Certifeid</h2>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>HTML</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>CSS</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>JavaScript</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>How To</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>SQL</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>Phyton</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>W3.CSS</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>BOOTSTRAPE</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>JAVA</NavLink>
          </span>
          <span>
            <NavLink className={'footer_container_top_tutorials_links'}>C++</NavLink>
          </span>
        </div>
        
      </div>
      
      {/* Footer Ended */}
    </>
  );
};
export default UpperNavbar;
