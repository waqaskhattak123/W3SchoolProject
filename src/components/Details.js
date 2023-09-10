import React, { useState } from "react";
import img from "../images/logo.jpg";
import { useParams, NavLink } from "react-router-dom";

const Details = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTrue, setIsTrue] = useState(true);
  let { name } = useParams();
  let { cName } = useParams();
  const handleClick = () => {
    setIsVisible(!isVisible);
    setIsVisible(!isVisible);
    setIsTrue(!isTrue);
  };

  return (
    <div>
      {/* Header Started */}
      <div>
        <div className="container">
          <img src={img} alt="img" width="40px" height="40px" />
          <span onClick={handleClick} className="tutortials">
            Tutorials
          </span>
          <span>
            <NavLink>Exercies</NavLink>
          </span>
          <span>Get Certifeid</span>
          <span>Services</span>
          <span>BootCamps</span>
          <span>Spaces</span>
          <span>Login</span>
          <span>SignUp</span>
        </div>
      </div>
      {/* Header Ended */}
      {/* SideBar Started */}
      
      {/* SideBar Ended */}

      {/*HTML Details Page Started */}
      {name === "html" && (
        <div className="html_details_page">
          <h1>Hyper Text MarkUp Language</h1>
        </div>
      )}
      {/*HTML Details Page Ended */}


      {/*CSS Details Page Started Here */}
      {name === "css" && (
        <div>
          <h1>Cascading Style Sheet</h1>
        </div>
      )}

      {/*CSS Details Page Ended Here */}
      
    </div>
  );
};

export default Details;
