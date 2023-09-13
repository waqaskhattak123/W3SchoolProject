import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { useParams, NavLink } from "react-router-dom";
import NavBarCompo from "./NavBarCompo";

const BootstrapeComponent = () => {
  const [isfocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { name } = useParams();

  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleBlur = () => {
    setIsFocus(false);
  };
  return (
    <div>
      {/* Header Started */}
      <NavBarCompo/>
      {/* Header Ended */}
      {/* sidebarStarted */}
      <div className="side_bar_contents">
        <h5>BOOTSTRAPE Guides</h5>
      </div>
      {/* sidebar Ended */}

      {/* Bootstape introduction started */}
      {name === "bootstrapeintroduction" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Using Bootstrape to design Websites</h1>

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
      {/* boostrape introducton ended */}
      {/*  w3 css started */}
      {name === "w3cssintroduction" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Using W3CSS to design Websites</h1>

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
                W3.CSS is a modern, responsive, mobile first CSS framework.
                W3.CSS provides equality for all browsers: Chrome. Firefox.
                Edge. IE. Safari. Opera. W3.CSS provides equality for all
                devices: Desktop. Laptop. Tablet. Mobile. W3.CSS is standard CSS
                only (No jQuery or JavaScript library). device: Web pages should
                not leave out information to fit smaller devices, but rather
                adapt its content to fit any device:
              </p>

              <h2>W3 is free to Use</h2>
              <ul>
                <li>
                  To use W3.CSS in your web site, just add a link to "w3.css"
                  from your web pages:To use W3.CSS in your web site, just add a
                  link to "w3.css" from your web pages:To use W3.CSS in your web
                  site, just add a link to "w3.css" from your web pages:To use
                  W3.CSS in your web site, just add a link to "w3.css" from your
                  web pages:To use W3.CSS in your web site, just add a link to
                  "w3.css" from your web pages:To use W3.CSS in your web site,
                  just add a link to "w3.css" from your web pages:
                </li>
              </ul>
              <p>
                HTML was NEVER intended to contain tags for formatting a web
                page! HTML was created to describe the content of a web page,
                like: When tags like font, and color attributes were added to
                the HTML 3.2 specification, it started a nightmare for web
                developers. Development of large websites, where fonts and color
                information were added to every single page, became a long and
                expensive process. To solve this problem, the World Wide Web
                Consortium (W3C) created CSS. CSS removed the style formatting
                from the HTML page!
              </p>
            </div>
          </div>
        </div>
      )}
      {/* w3css  ended */}
      {/*  sass started */}
      {name === "sassintro" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Using SASS FOR CSS</h1>

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
                W3.CSS is a modern, responsive, mobile first CSS framework.
                W3.CSS provides equality for all browsers: Chrome. Firefox.
                Edge. IE. Safari. Opera. W3.CSS provides equality for all
                devices: Desktop. Laptop. Tablet. Mobile. W3.CSS is standard CSS
                only (No jQuery or JavaScript library). device: Web pages should
                not leave out information to fit smaller devices, but rather
                adapt its content to fit any device:
              </p>

              <h2>SASS is free to Use</h2>
              <ul>
                <li>
                  To use W3.CSS in your web site, just add a link to "w3.css"
                  from your web pages:To use W3.CSS in your web site, just add a
                  link to "w3.css" from your web pages:To use W3.CSS in your web
                  site, just add a link to "w3.css" from your web pages:To use
                  W3.CSS in your web site, just add a link to "w3.css" from your
                  web pages:To use W3.CSS in your web site, just add a link to
                  "w3.css" from your web pages:To use W3.CSS in your web site,
                  just add a link to "w3.css" from your web pages:
                </li>
              </ul>
              <p>
                HTML was NEVER intended to contain tags for formatting a web
                page! HTML was created to describe the content of a web page,
                like: When tags like font, and color attributes were added to
                the HTML 3.2 specification, it started a nightmare for web
                developers. Development of large websites, where fonts and color
                information were added to every single page, became a long and
                expensive process. To solve this problem, the World Wide Web
                Consortium (W3C) created CSS. CSS removed the style formatting
                from the HTML page!
              </p>
            </div>
          </div>
        </div>
      )}
      {/* w3css  ended */}

      {/*  svg started */}
      {name === "svgintro" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Using SVG IN CSS</h1>

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
                SVG, or Scalable Vector Graphics, is a vector image format based
                on XML (Extensible Markup Language). Unlike raster images (like
                JPEG or PNG), which are composed of a grid of pixels, SVG images
                are defined using mathematical formulas that describe shapes,
                allowing them to be scaled to any size without losing quality.
                Here are some key points about SVG: Vector Graphics: SVG is
                based on mathematical descriptions of shapes, which means it can
                be scaled up or down without losing quality. This makes SVG
                particularly useful for logos, icons, and illustrations. XML
                Format: SVG files are written in XML, a markup language similar
                to HTML. This means SVG files can be created SVG, or Scalable
                Vector Graphics, is a vector image format based on XML
                (Extensible Markup Language). Unlike raster images (like JPEG or
                PNG), which are composed of a grid of pixels, SVG images are
                defined using mathematical formulas that describe shapes,
                allowing them to be scaled to any size without losing quality.
                Here are some key points about SVG: Vector Graphics: SVG is
                based on mathematical descriptions of shapes, which means it can
                be scaled up or down without losing quality. This makes SVG
                particularly useful for logos, icons, and illustrations. XML
                Format: SVG files are written in XML, a markup language similar
                to HTML. This means SVG files can be createdSVG, or Scalable
                Vector Graphics, is a vector image format based on XML
                (Extensible Markup Language). Unlike raster images (like JPEG or
                PNG), which are composed of a grid of pixels, SVG images are
                defined using mathematical formulas that describe shapes,
                allowing them to be scaled to any size without losing quality.
                Here are some key points about SVG: Vector Graphics: SVG is
                based on mathematical descriptions of shapes, which means it can
                be scaled up or down without losing quality. This makes SVG
                particularly useful for logos, icons, and illustrations. XML
                Format: SVG files are written in XML, a markup language similar
                to HTML. This means SVG files can be createdSVG, or Scalable
                Vector Graphics, is a vector image format based on XML
                (Extensible Markup Language). Unlike raster images (like JPEG or
                PNG), which are composed of a grid of pixels, SVG images are
                defined using mathematical formulas that describe shapes,
                allowing them to be scaled to any size without losing quality.
                Here are some key points about SVG: Vector Graphics: SVG is
                based on mathematical descriptions of shapes, which means it can
                be scaled up or down without losing quality. This makes SVG
                particularly useful for logos, icons, and illustrations. XML
                Format: SVG files are written in XML, a markup language similar
                to HTML. This means SVG files can be created
              </p>

              <h2>SVG is free to Use</h2>
              <ul>
                <li>
                  To use W3.CSS in your web site, just add a link to "w3.css"
                  from your web pages:To use W3.CSS in your web site, just add a
                  link to "w3.css" from your web pages:To use W3.CSS in your web
                  site, just add a link to "w3.css" from your web pages:To use
                  W3.CSS in your web site, just add a link to "w3.css" from your
                  web pages:To use W3.CSS in your web site, just add a link to
                  "w3.css" from your web pages:To use W3.CSS in your web site,
                  just add a link to "w3.css" from your web pages:
                </li>
              </ul>
              <p>
                HTML was NEVER intended to contain tags for formatting a web
                page! HTML was created to describe the content of a web page,
                like: When tags like font, and color attributes were added to
                the HTML 3.2 specification, it started a nightmare for web
                developers. Development of large websites, where fonts and color
                information were added to every single page, became a long and
                expensive process. To solve this problem, the World Wide Web
                Consortium (W3C) created CSS. CSS removed the style formatting
                from the HTML page!
              </p>
            </div>
          </div>
        </div>
      )}
      {/* SVG ended */}
        {/*  canvas started */}
        {name === "canvasintro" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Using CANVAS IN CSS</h1>

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
                CANVAS, or Scalable Vector Graphics, is a vector image format based
                on XML (Extensible Markup Language). Unlike raster images (like
                JPEG or PNG), which are composed of a grid of pixels, SVG images
                are defined using mathematical formulas that describe shapes,
                allowing them to be scaled to any size without losing quality.
                Here are some key points about SVG: Vector Graphics: SVG is
                based on mathematical descriptions of shapes, which means it can
                be scaled up or down without losing quality. This makes SVG
                particularly useful for logos, icons, and illustrations. XML
                Format: SVG files are written in XML, a markup language similar
                to HTML. This means SVG files can be created SVG, or Scalable
                Here are some key points about SVG: Vector Graphics: SVG is
                based on mathematical descriptions of shapes, which means it can
                be scaled up or down without losing quality. This makes SVG
                particularly useful for logos, icons, and illustrations. XML
                Format: SVG files are written in XML, a markup language similar
                to HTML. This means SVG files can be created
              </p>

              <h2>CANVAS is free to Use</h2>
              <ul>
                <li>
                  To use W3.CSS in your web site, just add a link to "w3.css"
                  from your web pages:To use W3.CSS in your web site, just add a
                  link to "w3.css" from your web pages:To use W3.CSS in your web
                  site, just add a link to "w3.css" from your web pages:To use
                  W3.CSS in your web site, just add a link to "w3.css" from your
                  web pages:To use W3.CSS in your web site, just add a link to
                  "w3.css" from your web pages:To use W3.CSS in your web site,
                  just add a link to "w3.css" from your web pages:
                </li>
              </ul>
            
            </div>
          </div>
        </div>
      )}
      {/* SVG ended */}
    </div>
  );
};

export default BootstrapeComponent;
