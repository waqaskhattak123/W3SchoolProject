import React, { useState } from "react";
import img from "../images/logo.jpg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBarCompo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTrue, setIsTrue] = useState(true);
  const handleClick = () => {
    setIsVisible(!isVisible);

    setIsTrue(!isTrue);
  };
  return (
    <div>
      <div className="uppernavbarone">
        <img src={img} alt="img" width="40px" height="40px" />

        <NavLink onClick={handleClick}>Tutorials</NavLink>
        <NavLink onClick={handleClick}>Exercies</NavLink>

        <NavLink onClick={handleClick}>Get Certifeid</NavLink>

        <NavLink onClick={handleClick}>Top Tutorials</NavLink>
        <NavLink to={"/react/introduction"}>Become FrontEnd Developer</NavLink>
        <NavLink to={"/Php/introduction"}>Backend Progg</NavLink>
        <NavLink>Login</NavLink>
        <NavLink>SignUp</NavLink>
        <NavLink></NavLink>
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
                <NavLink
                  className="under_tutorials_span"
                  to={"/Html/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"/Html/introduction"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                CSS{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"/cssdetails/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"/cssdetails/introduction"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                RWD{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"/rwddetails/rwd"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"/rwddetails/rwd"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                BOOTSTRAPE{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"/BootstrapeComponentdetails/bootstrapeintroduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"/BootstrapeComponentdetails/bootstrapeintroduction"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                W3.CSS{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"/BootstrapeComponentdetails/w3cssintroduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                SASS{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"/BootstrapeComponentdetails/sassintro"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"/BootstrapeComponentdetails/sassintro"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                COLORS{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"/cssdetails/colors"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"/cssdetails/colors"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                ICONS{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"/cssdetails/icons"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"/cssdetails/icons"}
                >
                  Reference
                </NavLink>
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
                <span>Learn</span>JAVASCRIPT
                <NavLink
                  className="under_tutorials_span"
                  to={"/learnJavaScript/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"/learnJavaScript/introduction"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                REACT{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"react/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"react/introduction"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                JQUERY{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"jquery/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"jquery/introduction"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                VUE{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"react/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"react/introduction"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                ANGULAR{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"react/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"react/introduction"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                JSON{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"react/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"react/introduction"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                AJAX{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"react/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"react/introduction"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                APPMIL{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"react/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"react/introduction"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                W3.JS{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"react/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"react/introduction"}
                >
                  Reference
                </NavLink>
              </span>
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
                <NavLink
                  className="under_tutorials_span"
                  to={"/phython/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"/phython/introduction"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                SQL{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"sql/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"sql/introduction"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                MYSQL{" "}
                <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                PHP{" "}
                <NavLink className="under_tutorials_span">Tutorials</NavLink>
                <NavLink className="under_tutorials_span">Reference</NavLink>
              </span>
              <span>
                JAVA{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"Java/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"Java/introduction"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                C{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"C++/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"C++/introduction"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                C++{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"C++/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"C++/introduction"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                C#{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"C++/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"C++/introduction"}
                >
                  Reference
                </NavLink>
              </span>
              <span>
                R{" "}
                <NavLink
                  className="under_tutorials_span"
                  to={"C++/introduction"}
                >
                  Tutorials
                </NavLink>
                <NavLink
                  className="under_tutorials_span"
                  to={"C++/introduction"}
                >
                  Reference
                </NavLink>
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
    </div>
  );
};

export default NavBarCompo;
