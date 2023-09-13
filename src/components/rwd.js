import React, { useState } from "react";
import img from "../images/logo.jpg";
import { Button } from "react-bootstrap";

import { useParams, NavLink } from "react-router-dom";

const Rwd = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTrue, setIsTrue] = useState(true);
  const [isfocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { name } = useParams();
  const handleClick = () => {
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
    <div>
      {/* Header Started */}
      <div>
        <div className="uppernavbarone">
          <img src={img} alt="img" width="40px" height="40px" />
          <NavLink onClick={handleClick}>Tutorials</NavLink>
          <NavLink>Exercies</NavLink>

          <NavLink>Get Certifeid</NavLink>

          <NavLink>Services</NavLink>
          <NavLink>BootCamps</NavLink>
          <NavLink>Spaces</NavLink>
          <NavLink>Login</NavLink>
          <NavLink>SignUp</NavLink>
        </div>
      </div>
      {/* Header Ended */}
      {/* sidebarStarted */}
      <div className="side_bar_contents">
        <h5>RWD Tutorials</h5>
      </div>
      {/* sidebar Ended */}

      {/* CSS introduction started */}
      {name === "rwd" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Responsive Web design</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            ></div>

            <div>
              <p>
                Responsive web design makes your web page look good on all
                devices. Responsive web design uses only HTML and CSS.
                Responsive web design is not a program or a JavaScript. Web
                pages can be viewed using many different devices: desktops,
                tablets, and phones. Your web page should look good, and be easy
                to use, regardless of the device. Web pages should not leave out
                information to fit smaller devices, but rather adapt its content
                to fit any device:Web pages can be viewed using many different
                devices: desktops, tablets, and phones. Your web page should
                look good, and be easy to use, regardless of the device. Web
                pages should not leave out information to fit smaller devices,
                but rather adapt its content to fit any device: Web pages should
                not leave out information to fit smaller devices, but rather
                adapt its content to fit any device: Web pages should not leave
                out information to fit smaller devices, but rather adapt its
                content to fit any device: Web pages should not leave out
                information to fit smaller devices, but rather adapt its content
                to fit any device: Web pages should not leave out information to
                fit smaller devices, but rather adapt its content to fit any
                device: Web pages should not leave out information to fit
                smaller devices, but rather adapt its content to fit any device:
              </p>

              <h2>Designing For The Best Experience For All Users</h2>
              <ul>
                <li>
                  Web pages can be viewed using many different devices:
                  desktops, tablets, and phones. Your web page should look good,
                  and be easy to use, regardless of the device. Web pages should
                  not leave out information to fit smaller devices, but rather
                  adapt its content to fit any device:
                </li>
              </ul>
              <p>
                HTML was NEVER intended to contain tags for formatting a web
                page! HTML was created to describe the content of a web page,
                like:
                <p>This is a paragraph.</p>
                When tags like font, and color attributes were added to the HTML
                3.2 specification, it started a nightmare for web developers.
                Development of large websites, where fonts and color information
                were added to every single page, became a long and expensive
                process. To solve this problem, the World Wide Web Consortium
                (W3C) created CSS. CSS removed the style formatting from the
                HTML page!
              </p>
              <p>
                The style definitions are normally saved in external .css files.
                With an external stylesheet file, you can change the look of an
                entire website by changing just one file! Web pages should not
                leave out information to fit smaller devices, but rather adapt
                its content to fit any device: Web pages should not leave out
                information to fit smaller devices, but rather adapt its content
                to fit any device: Web pages should not leave out information to
                fit smaller devices, but rather adapt its content to fit any
                device: Web pages should not leave out information to fit
                smaller devices, but rather adapt its content to fit any device:
                Web pages should not leave out information to fit smaller
                devices, but rather adapt its content to fit any device:
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Css introduction ended */}
    </div>
  );
};

export default Rwd;
