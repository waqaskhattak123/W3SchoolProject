import React, { useState } from "react";
import img from "../images/logo.jpg";
import { Button } from "react-bootstrap";
import NavBarCompo from "./NavBarCompo";

import { useParams, NavLink } from "react-router-dom";

const Frontendprog = () => {

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
      <NavBarCompo/>
     
      {/* sidebarStarted */}
      <div className="side_bar_contents">
        <h5>CSS Tutorials</h5>

        <NavLink to={"/frontendprog/introduction"}>Introduction</NavLink>

        <NavLink to={"/frontendprog/syntax"}>Where to</NavLink>
        <NavLink to={"/cssdetails/output"}>OutPut</NavLink>
        <NavLink to={"/cssdetails/statement"}>Statements</NavLink>
        <NavLink to={"/cssdetails/syntax"}>Syntax</NavLink>
        <NavLink to={"/cssdetails/comments"}>Comments</NavLink>
        <NavLink to={"/cssdetails/variables"}>Variables</NavLink>
        <NavLink to={"/cssdetails/let"}>Let</NavLink>
        <NavLink to={"/cssdetails/const"}>Const</NavLink>
        <NavLink to={"/cssdetails/operators"}>Operators</NavLink>
        <NavLink to={"/cssdetails/arithmatic"}>Arithmatic</NavLink>
        <NavLink to={"/cssdetails/assignment"}>Assignment</NavLink>
        <NavLink to={"/cssdetails/datatypes"}>Data Types</NavLink>
        <NavLink to={"/cssdetails/functions"}>Functions</NavLink>
        <NavLink to={"/cssdetails/objects"}>Objects</NavLink>
        <NavLink to={"/cssdetails/events"}>Events</NavLink>
        <NavLink to={"/cssdetails/strings"}>Strings</NavLink>
        <NavLink to={"/cssdetails/stringmethod"}>String Method</NavLink>
        <NavLink to={"/cssdetails/stringsearch"}>String Search</NavLink>
        <NavLink to={"/cssdetails/stringtemplates"}>Strin Templates</NavLink>
        <NavLink to={"/cssdetails/numbers"}>Numbers</NavLink>
        <NavLink to={"/cssdetails/bigint"}>BigInt</NavLink>
        
      </div>
      {/* sidebar Ended */}

      {/* CSS introduction started */}
      {name === "introduction" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Cascading Style Sheet Introduction</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/syntax"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <li>CSS is the language we use to style an HTML document.</li>
                <li>CSS describes how HTML elements should be displayed.</li>
                <li>HTML describes the structure of a Web page</li>
                <li>
                  This tutorial will teach you CSS from basic to advanced.
                </li>
              </ul>

              <div
                style={{
                  backgroundColor: "#E7E9EB",
                  width: "100%",
                  height: "600px",
                  paddingLeft: "40px",
                  paddingTop: "30px",
                }}
                className="Third_div_second_div"
              >
                <h2>CSS Example</h2>
                <div style={{ width: "200px" }}>
                  <textarea
                    style={{ width: "900px", height: "500px" }}
                    placeholder="body {
                      background-color: lightblue;
                    }
                    
                    h1 {
                      color: white;
                      text-align: center;
                    }
                    
                    p {
                      font-family: verdana;
                      font-size: 20px;
                    }"
                  />
                </div>
              </div>
              <h2>Why Use CSS?</h2>
              <ul>
                <li>
                  CSS is used to define styles for your web pages, including the
                  design, layout and variations in display for different devices
                  and screen sizes.
                </li>
              </ul>
              <h2>CSS Solved a Big Problem</h2>
              <p>
                HTML was NEVER intended to contain tags for formatting a web
                page! HTML was created to describe the content of a web page,
                like:
                <h1>This is a heading</h1>
                <p>This is a paragraph.</p>
                When tags like font, and color attributes were added to the HTML
                3.2 specification, it started a nightmare for web developers.
                Development of large websites, where fonts and color information
                were added to every single page, became a long and expensive
                process. To solve this problem, the World Wide Web Consortium
                (W3C) created CSS. CSS removed the style formatting from the
                HTML page!
              </p>

              <h2>CSS Saves a Lot of Work!</h2>
              <p>
                The style definitions are normally saved in external .css files.
                With an external stylesheet file, you can change the look of an
                entire website by changing just one file!
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Css introduction ended */}

      {/* CSS syntax started */}
      {name === "syntax" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Cascading Style Sheet Syntax</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/details/introduction"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/details/selectors"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                The selector points to the HTML element you want to style. The
                declaration block contains one or more declarations separated by
                semicolons. Each declaration includes a CSS property name and a
                value, separated by a colon. Multiple CSS declarations are
                separated with semicolons, and declaration blocks are surrounded
                by curly braces.
              </p>

              <div
                style={{
                  backgroundColor: "#E7E9EB",
                  width: "100%",
                  height: "600px",
                  paddingLeft: "40px",
                  paddingTop: "30px",
                }}
                className="Third_div_second_div"
              >
                <h2>CSS Example</h2>
                <div style={{ width: "200px" }}>
                  <textarea
                    style={{ width: "900px", height: "500px" }}
                    placeholder="body {
                      background-color: lightblue;
                    }
                    
                    h1 {
                      color: white;
                      text-align: center;
                    }
                    
                    p {
                      font-family: verdana;
                      font-size: 20px;
                    }"
                  />
                </div>
              </div>
              <h2>Example Explained</h2>
              <ul>
                <li>
                  p is a selector in CSS it points to the HTML element you want
                  to style:.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Css syntax ended */}

      {/* CSS selectors started */}
      {name === "selectors" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Cascading Style Sheet Selectors</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/syntax"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/howto"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                CSS selectors are used to "find" (or select) the HTML elements
                you want to style. We can divide CSS selectors into five
                categories:
                <ul>
                  <li>
                    Simple selectors (select elements based on name, id, class)
                  </li>
                  <li>
                    Combinator selectors (select elements based on a specific
                    relationship between them)
                  </li>
                  <li>
                    Pseudo-class selectors (select elements based on a certain
                    state)
                  </li>
                  <li>
                    Pseudo-elements selectors (select and style a part of an
                    element)
                  </li>
                </ul>
              </p>

              <h2>CSS ELEMENTS SELECOTORS</h2>
              <ul>
                <li>
                  The element selector selects HTML elements based on the
                  element name.
                </li>
              </ul>
              <h2>CSS ID SELECOTORS</h2>
              <ul>
                <li>
                  The id selector uses the id attribute of an HTML element to
                  select a specific element. The id of an element is unique
                  within a page, so the id selector is used to select one unique
                  element! To select an element with a specific id, write a hash
                  (#) character, followed by the id of the element.
                </li>
              </ul>
              <h2>CSS CLASS SELECOTORS</h2>
              <ul>
                <li>
                  The class selector selects HTML elements with a specific class
                  attribute. To select elements with a specific class, write a
                  period (.) character, followed by the class name.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Css selectors ended */}

      {/* CSS howto started */}
      {name === "howto" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>HOW TO ADD CSS</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/selectors"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/comments"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                When a browser reads a style sheet, it will format the HTML
                document according to the information in the style sheet.
              </p>

              <h2>Three Ways to Insert CSS</h2>
              <ul>
                <li>External CSS</li>
                <li>Internal CSS</li>
                <li>Inline CSS</li>
              </ul>
              <h2>External CSS</h2>
              <p>
                With an external style sheet, you can change the look of an
                entire website by changing just one file! Each HTML page must
                include a reference to the external style sheet file inside the
                link element, inside the head section.
              </p>
              <h2>INTERNAL CSS</h2>
              <ul>
                <li>
                  An internal style sheet may be used if one single HTML page
                  has a unique style. The internal style is defined inside the
                  element, inside the head section.
                </li>
              </ul>

              <h2>INLINE CSS</h2>
              <p>
                An inline style may be used to apply a unique style for a single
                element. To use inline styles, add the style attribute to the
                relevant element. The style attribute can contain any CSS
                property.
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Css howto ended */}
      {/* CSS colors started */}
      {name === "comments" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>CSS Comments</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/details/howto"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/details/colors"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                CSS comments are not displayed in the browser, but they can help
                document your source code. Comments are used to explain the
                code, and may help when you edit the source code at a later
                date. Comments are ignored by browsers. A CSS comment is placed
                inside the element, and starts with /* and ends with */:
              </p>

              <h2>HTML AND CSS COMMENTS</h2>
              <ul>
                <li>
                  From the HTML tutorial, you learned that you can add comments
                  to your HTML source by using the syntax. In the following
                  example, we use a combination of HTML and CSS comments:
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Css COMMETS ended */}
      {/* cololrs started */}
      {name === "colors" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>COLORS IN CSS </h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/comments"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/background"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                Colors are specified using predefined color names, or RGB, HEX,
                HSL, RGBA, HSLA values
              </p>

              <h2>COLORS NAMES</h2>
              <ul>
                <li>
                  In CSS, a color can be specified by using a predefined color
                  name:
                </li>
              </ul>
              <h2>BACKGROUND COLORS</h2>
              <ul>
                <li>You can set the background color for HTML elements:</li>
              </ul>
              <h2>CSS TEXT COLORS</h2>
              <ul>
                <li>You can set the background color for HTML elements:</li>
              </ul>
              <h2>CSS BORDERS COLORS</h2>
              <ul>
                <li>You can set the background color for HTML elements:</li>
              </ul>
              <h2>CSS COLORS VALUES</h2>
              <ul>
                <li>You can set the background color for HTML elements:</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Css colors ended */}

      {/* background started */}
      {name === "background" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>BACKGROUND IN CSS </h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/colors"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/borders"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                The CSS background properties are used to add background effects
                for elements. With CSS, a color is most often specified by: a
                valid color name - like "red" a HEX value - like "#ff0000" an
                RGB value - like "rgb(255,0,0)" Look at CSS Color Values for a
                complete list of possible color values.
              </p>

              <h2>OTHER ELEMENTS</h2>
              <ul>
                <li>You can set the background color for any HTML elements:</li>
              </ul>
              <h2>Opacity / Transparency</h2>
              <ul>
                <li>
                  The opacity property specifies the opacity/transparency of an
                  element. It can take a value from 0.0 - 1.0. The lower value,
                  the more transparent: You learned from our CSS Colors Chapter,
                  that you can use RGB as a color value. In addition to RGB, you
                  can use an RGB color value with an alpha channel (RGBA) -
                  which specifies the opacity for a color. An RGBA color value
                  is specified with: rgba(red, green, blue, alpha). The alpha
                  parameter is a number between 0.0 (fully transparent) and 1.0
                  (fully opaque). Tip: You will learn more about RGBA Colors in
                  our CSS Colors Chapter. The background-image property
                  specifies an image to use as the background of an element. By
                  default, the image is repeated so it covers the entire
                  element.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Css background ended */}

      {/* borders started */}
      {name === "borders" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>BORDERS IN CSS </h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/background"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/padding"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                In CSS (Cascading Style Sheets), borders are used to define the
                visual style of an element's edges. You can set properties like
                color, width, and style to create different border effects. Here
                are some of the key properties related to borders in CSS:
              </p>

              <h2>BORDER STYLES</h2>
              <ul>
                <li>
                  This property determines the style of the border. Common
                  values include solid, dotted, dashed, double, etc.
                </li>
              </ul>
              <h2>BORDER WIDTH</h2>
              <ul>
                <li>
                  This property sets the width of the border. You can use values
                  like px, em, rem, etc. Example: border-color: This property
                  sets the color of the border. Example:
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Css border ended */}

      {/* padding started */}
      {name === "padding" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>PADDING IN CSS </h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/border"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/margin"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                The CSS padding properties are used to generate space around an
                element's content, inside of any defined borders. With CSS, you
                have full control over the padding. There are properties for
                setting the padding for each side of an element (top, right,
                bottom, and left).The CSS padding properties are used to
                generate space around an element's content, inside of any
                defined borders. With CSS, you have full control over the
                padding. There are properties for setting the padding for each
                side of an element (top, right, bottom, and left).The CSS
                padding properties are used to generate space around an
                element's content, inside of any defined borders. With CSS, you
                have full control over the padding. There are properties for
                setting the padding for each side of an element (top, right,
                bottom, and left).The CSS padding properties are used to
                generate space around an element's content, inside of any
                defined borders. With CSS, you have full control over the
                padding. There are properties for setting the padding for each
                side of an element (top, right, bottom, and left).The CSS
                padding properties are used to generate space around an
                element's content, inside of any defined borders. With CSS, you
                have full control over the padding. There are properties for
                setting the padding for each side of an element (top, right,
                bottom, and left).The CSS padding properties are used to
                generate space around an element's content, inside of any
                defined borders. With CSS, you have full control over the
                padding. There are properties for setting the padding for each
                side of an element (top, right, bottom, and left).The CSS
                padding properties are used to generate space around an
                element's content, inside of any defined borders. With CSS, you
                have full control over the padding. There are properties for
                setting the padding for each side of an element (top, right,
                bottom, and left).The CSS padding properties are used to
                generate space around an element's content, inside of any
                defined borders. With CSS, you have full control over the
                padding. There are properties for setting the padding for each
                side of an element (top, right, bottom, and left). With CSS, you
                have full control over the padding. There are properties for
                setting the padding for each side of an element (top, right,
                bottom, and left). With CSS, you have full control over the
                padding. There are properties for setting the padding for each
                side of an element (top, right, bottom, and left). With CSS, you
                have full control over the padding. There are properties for
                setting the padding for each side of an element (top, right,
                bottom, and left). With CSS, you have full control over the
                padding. There are properties for setting the padding for each
                side of an element (top, right, bottom, and left). With CSS, you
                have full control over the padding. There are properties for
                setting the padding for each side of an element (top, right,
                bottom, and left). With CSS, you have full control over the
                padding. There are properties for setting the padding for each
                side of an element (top, right, bottom, and left). With CSS, you
                have full control over the padding. There are properties for
                setting the padding for each side of an element (top, right,
                bottom, and left). With CSS, you have full control over the
                padding. There are properties for setting the padding for each
                side of an element (top, right, bottom, and left).
              </p>

              <h2>Padding - Shorthand Property</h2>
              <ul>
                <li>
                  To shorten the code, it is possible to specify all the padding
                  properties in one property. The padding property is a
                  shorthand property for the following individual padding
                  properties:To shorten the code, it is possible to specify all
                  the padding properties in one property. The padding property
                  is a shorthand property for the following individual padding
                  properties:To shorten the code, it is possible to specify all
                  the padding properties in one property. The padding property
                  is a shorthand property for the following individual padding
                  properties:To shorten the code, it is possible to specify all
                  the padding properties in one property. The padding property
                  is a shorthand property for the following individual padding
                  properties:To shorten the code, it is possible to specify all
                  the padding properties in one property. The padding property
                  is a shorthand property for the following individual padding
                  properties:To shorten the code, it is possible to specify all
                  properties:
                </li>
                <li>
                  To shorten the code, it is possible to specify all the padding
                  properties in one property. The padding property is a
                  shorthand property for the following individual padding
                  properties:To shorten the code, it is possible to specify all
                  the padding properties in one property. The padding property
                  is a shorthand property for the following individual padding
                  properties:To shorten the code, it is possible to specify all
                  the padding properties in one property. The padding property
                  is a shorthand property for the following individual padding
                  properties:To shorten the code, it is possible to specify all
                  the padding properties in one property. The padding property
                  is a shorthand property for the following individual padding
                  properties:To shorten the code, it is possible to specify all
                  the padding properties in one property. The padding property
                  is a shorthand property for the following individual padding
                  properties:To shorten the code, it is possible to specify all
                  properties:
                </li>
                <li>
                  To shorten the code, it is possible to specify all the padding
                  properties in one property. The padding property is a
                  shorthand property for the following individual padding
                  properties:To shorten the code, it is possible to specify all
                  the padding properties in one property. The padding property
                  is a shorthand property for the following individual padding
                  properties:To shorten the code, it is possible to specify all
                  the padding properties in one property. The padding property
                  is a shorthand property for the following individual padding
                  properties:To shorten the code, it is possible to specify all
                  the padding properties in one property. The padding property
                  is a shorthand property for the following individual padding
                  properties:To shorten the code, it is possible to specify all
                  the padding properties in one property. The padding property
                  is a shorthand property for the following individual padding
                  properties:To shorten the code, it is possible to specify all
                  properties:
                </li>
              </ul>
              <h2>BORDER WIDTH</h2>
              <ul>
                <li>
                  This property sets the width of the border. You can use values
                  like px, em, rem, etc. Example: border-color: This property
                  sets the color of the border. Example:
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Css padding ended */}

      {/* margin started */}
      {name === "margin" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>MARGIN IN CSS </h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/padding"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/height"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                Margins are used to create space around elements, outside of any
                defined borders. Margins are used to create space around
                elements, outside of any defined borders.Margins are used to
                create space around elements, outside of any defined
                borders.Margins are used to create space around elements,
                outside of any defined borders.Margins are used to create space
                around elements, outside of any defined borders.Margins are used
                to create space around elements, outside of any defined
                borders.Margins are used to create space around elements,
                outside of any defined borders.Margins are used to create space
                around elements, outside of any defined borders.Margins are used
                to create space around elements, outside of any defined borders.
              </p>

              <h2>Margin - Shorthand Property</h2>
              <ul>
                <li>
                  The CSS margin properties are used to create space around
                  elements, outside of any defined borders. With CSS, you have
                  full control over the margins. There are properties for
                  setting the margin for each side of an element (top, right,
                  bottom, and left).The CSS margin properties are used to create
                  space around elements, outside of any defined borders. With
                  CSS, you have full control over the margins. There are
                  properties for setting the margin for each side of an element
                  (top, right, bottom, and left).The CSS margin properties are
                  used to create space around elements, outside of any defined
                  borders. With CSS, you have full control over the margins.
                  There are properties for setting the margin for each side of
                  an element (top, right, bottom, and left).
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Css margin ended */}

      {/* Height started */}
      {name === "height" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>WIDTH AND HEIGHT IN CSS </h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/margin"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/boxmodel"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                The CSS height and width properties are used to set the height
                and width of an element. The CSS max-width property is used to
                set the maximum width of an element.e around elements, outside
                of any defined borders.Margins are used to create space around
                elements, outside of any defined borders.Margins are used to
                create space around elements, outside of any defined
                borders.Margins are used to create space around elements,
                outside of any defined borders.Margins are used to create space
                around elements, outside of any defined borders.
              </p>

              <h2>CSS Setting height and width</h2>
              <ul>
                <li>
                  The height and width properties may have the following values:
                  auto - This is default. The browser calculates the height and
                  width length - Defines the height/width in px, cm, etc. % -
                  Defines the height/width in percent of the containing block
                  initial - Sets the height/width to its default value inherit -
                  The height/width will be inherited from its parent value
                </li>
              </ul>
              <h2>Setting max-width</h2>
              <p>
                The max-width property is used to set the maximum width of an
                element. The max-width can be specified in length values, like
                px, cm, etc., or in percent (%) of the containing block, or set
                to none (this is default. Means that there is no maximum width).
                The problem with the above occurs when the browser window is
                smaller than the width of the element (500px). The browser then
                adds a horizontal scrollbar to the page. Using max-width
                instead, in this situation, will improve the browser's handling
                of small windows. Tip: Drag the browser window to smaller than
                500px wide, to see the difference between the two divs!
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Css hieght ended */}

      {/* boxmodel started */}
      {name === "boxmodel" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>BOX MODEL IN CSS </h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/height"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/outline"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                In CSS, the term "box model" is used when talking about design
                and layout. The CSS box model is essentially a box that wraps
                around every HTML element. It consists of: margins, borders,
                padding, and the actual content. The image below illustrates the
                box model: In CSS, the term "box model" is used when talking
                about design and layout. The CSS box model is essentially a box
                that wraps around every HTML element. It consists of: margins,
                borders, padding, and the actual content. The image below
                illustrates the box model: In CSS, the term "box model" is used
                when talking about design and layout. The CSS box model is
                essentially a box that wraps around every HTML element. It
                consists of: margins, borders, padding, and the actual content.
                The image below illustrates the box model: In CSS, the term "box
                model" is used when talking about design and layout. The CSS box
                model is essentially a box that wraps around every HTML element.
                It consists of: margins, borders, padding, and the actual
                content. The image below illustrates the box model:
              </p>

              <h2>Width and Height of an Element</h2>
              <ul>
                <li>
                  The height and width properties may have the following values:
                  auto - This is default. The browser calculates the height and
                  width length - Defines the height/width in px, cm, etc. % -
                  Defines the height/width in percent of the containing block
                  initial - Sets the height/width to its default value inherit -
                  The height/width will be inherited from its parent value
                </li>
              </ul>
              <h2>Setting max-width</h2>
              <p>
                The max-width property is used to set the maximum width of an
                element. The max-width can be specified in length values, like
                px, cm, etc., or in percent (%) of the containing block, or set
                to none (this is default. Means that there is no maximum width).
                The problem with the above occurs when the browser window is
                smaller than the width of the element (500px). The browser then
                adds a horizontal scrollbar to the page. Using max-width
                instead, in this situation, will improve the browser's handling
                of small windows. Tip: Drag the browser window to smaller than
                500px wide, to see the difference between the two divs!
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Css boxmodel ended */}

      {/* outline started */}
      {name === "outline" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>OUTLINE IN CSS </h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/boxmodel"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/text"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                An outline is a line drawn outside the element's border. An
                outline is a line drawn outside the element's border. validAn
                outline is a line drawn outside the element's border.An outline
                is a line drawn outside the element's border.
              </p>

              <h2>CSS Outline Style</h2>
              <ul>
                <li>
                  dotted - Defines a dotted outline dashed - Defines a dashed
                  outline solid - Defines a solid outline double - Defines a
                  double outline groove - Defines a 3D grooved outline ridge -
                  Defines a 3D ridged outline inset - Defines a 3D inset outline
                  outset - Defines a 3D outset outline none - Defines no outline
                  hidden - Defines a hidden outline
                </li>
              </ul>
              <h2>Setting max-width</h2>
              <p>
                The max-width property is used to set the maximum width of an
                element. The max-width can be specified in length values, like
                px, cm, etc., or in percent (%) of the containing block, or set
                to none (this is default. Means that there is no maximum width).
                The problem with the above occurs when the browser window is
                smaller than the width of the element (500px). The browser then
                adds a horizontal scrollbar to the page. Using max-width
                instead, in this situation, will improve the browser's handling
                of small windows. Tip: Drag the browser window to smaller than
                500px wide, to see the difference between the two divs!
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Css outline ended */}

      {/* text started */}
      {name === "text" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>TEXT IN CSS </h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/outline"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/fonts"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                This text is styled with some of the text formatting properties.
                The heading uses the text-align, text-transform, and color
                properties. The paragraph is indented, aligned, and the space
                between characters is specified. The underline is removed from
                this colored "Try it Yourself" link This text is styled with
                some of the text formatting properties. The heading uses the
                text-align, text-transform, and color properties. The paragraph
                is indented, aligned, and the space between characters is
                specified. The underline is removed from this colored "Try it
                Yourself" link
              </p>

              <h2>TEXT COLORS</h2>
              <ul>
                <li>
                  The color property is used to set the color of the text. The
                  color is specified by: a color name - like "red" a HEX value -
                  like "#ff0000" an RGB value - like "rgb(255,0,0)" Look at CSS
                  Color Values for a complete list of possible color values. The
                  default text color for a page is defined in the body selector.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Css TEXT ended */}
      {/* font started */}
      {name === "fonts" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>FONTS IN CSS </h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/text"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/icons"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                This text is styled with some of the text formatting properties.
                The heading uses the text-align, text-transform, and color
                properties. The paragraph is indented, aligned, and the space
                between characters is specified. The underline is removed from
                this colored "Try it Yourself" link This text is styled with
                some of the text formatting properties. The heading uses the
                text-align, text-transform, and color properties. The paragraph
                is indented, aligned, and the space between characters is
                specified. The underline is removed from this colored "Try it
                Yourself" link
              </p>
              <ul>
                <li>
                  The color property is used to set the color of the text. The
                  color is specified by: a color name - like "red" a HEX value -
                  like "#ff0000" an RGB value - like "rgb(255,0,0)" Look at CSS
                  Color Values for a complete list of possible color values. The
                  default text color for a page is defined in the body selector.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Css font ended */}

      {/* icons started */}
      {name === "icons" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>ICONS IN CSS </h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/fonts"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/lists"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                Serif fonts have a small stroke at the edges of each letter.
                They create a sense of formality and elegance. Sans-serif fonts
                have clean lines (no small strokes attached). They create a
                modern and minimalistic look. Monospace fonts - here all the
                letters have the same fixed width. They create a mechanical
                look. Cursive fonts imitate human handwriting. Fantasy fonts are
                decorative/playful fonts.Serif fonts have a small stroke at the
                edges of each letter. They create a sense of formality and
                elegance. Sans-serif fonts have clean lines (no small strokes
                attached). They create a modern and minimalistic look. Monospace
                fonts - here all the letters have the same fixed width. They
                create a mechanical look. Cursive fonts imitate human
                handwriting. Fantasy fonts are decorative/playful fonts.Serif
                fonts have a small stroke at the edges of each letter. They
                create a sense of formality and elegance. Sans-serif fonts have
                clean lines (no small strokes attached). They create a modern
                and minimalistic look. Monospace fonts - here all the letters
                have the same fixed width. They create a mechanical look.
                Cursive fonts imitate human handwriting. Fantasy fonts are
                decorative/playful fonts. The color property is used to set the
                color of the text. The color is specified by: a color name -
                like "red" a HEX value - like "#ff0000" an RGB value - like
                "rgb(255,0,0)" Look at CSS Color Values for a complete list of
                possible color values. The default text color for a page is
                defined in the body selector.
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Css LISTS ended */}
      {name === "lists" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>LISTS IN CSS </h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/icons"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/links"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                Serif fonts have a small stroke at the edges of each letter.
                They create a sense of formality and elegance. Sans-serif fonts
                have clean lines (no small strokes attached). They create a
                modern and minimalistic look. Monospace fonts - here all the
                letters have the same fixed width. They create a mechanical
                look. Cursive fonts imitate human handwriting. Fantasy fonts are
                decorative/playful fonts.Serif fonts have a small stroke at the
                edges of each letter. They create a sense of formality and
                elegance. Sans-serif fonts have clean lines (no small strokes
                attached). They create a modern and minimalistic look. Monospace
                fonts - here all the letters have the same fixed width. They
                create a mechanical look. Cursive fonts imitate human
                handwriting. Fantasy fonts are decorative/playful fonts.Serif
                fonts have a small stroke at the edges of each letter. They
                create a sense of formality and elegance. Sans-serif fonts have
                clean lines (no small strokes attached). They create a modern
                and minimalistic look. Monospace fonts - here all the letters
                have the same fixed width. They create a mechanical look.
                Cursive fonts imitate human handwriting. Fantasy fonts are
                decorative/playful fonts. The color property is used to set the
                color of the text. The color is specified by: a color name -
                like "red" a HEX value - like "#ff0000" an RGB value - like
                "rgb(255,0,0)" Look at CSS Color Values for a complete list of
                possible color values. The default text color for a page is
                defined in the body selector.
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Css LISTS ended */}
       {/* Css links started */}
       {name === "links" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>LINKS IN CSS </h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/lists"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/blockandinline"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                Serif fonts have a small stroke at the edges of each letter.
                They create a sense of formality and elegance. Sans-serif fonts
                have clean lines (no small strokes attached). They create a
                modern and minimalistic look. Monospace fonts - here all the
                letters have the same fixed width. They create a mechanical
                look. Cursive fonts imitate human handwriting. Fantasy fonts are
                decorative/playful fonts.Serif fonts have a small stroke at the
                edges of each letter. They create a sense of formality and
                elegance. Sans-serif fonts have clean lines (no small strokes
                attached). They create a modern and minimalistic look. Monospace
                fonts - here all the letters have the same fixed width. They
                create a mechanical look. Cursive fonts imitate human
                handwriting. Fantasy fonts are decorative/playful fonts.Serif
                fonts have a small stroke at the edges of each letter. They
                create a sense of formality and elegance. Sans-serif fonts have
                clean lines (no small strokes attached). They create a modern
                and minimalistic look. Monospace fonts - here all the letters
                have the same fixed width. They create a mechanical look.
                Cursive fonts imitate human handwriting. Fantasy fonts are
                decorative/playful fonts. The color property is used to set the
                color of the text. The color is specified by: a color name -
                like "red" a HEX value - like "#ff0000" an RGB value - like
                "rgb(255,0,0)" Look at CSS Color Values for a complete list of
                possible color values. The default text color for a page is
                defined in the body selector.
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Css links ended */}
       {/* Css links started */}
       {name === "blockandinline" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>BLOCKS AND INLINE  IN CSS </h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/links"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/classes"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                Serif fonts have a small stroke at the edges of each letter.
                They create a sense of formality and elegance. Sans-serif fonts
                have clean lines (no small strokes attached). They create a
                modern and minimalistic look. Monospace fonts - here all the
                letters have the same fixed width. They create a mechanical
                look. Cursive fonts imitate human handwriting. Fantasy fonts are
                decorative/playful fonts.Serif fonts have a small stroke at the
                edges of each letter. They create a sense of formality and
                elegance. Sans-serif fonts have clean lines (no small strokes
                attached). They create a modern and minimalistic look. Monospace
                fonts - here all the letters have the same fixed width. They
                create a mechanical look. Cursive fonts imitate human
                handwriting. Fantasy fonts are decorative/playful fonts.Serif
                fonts have a small stroke at the edges of each letter. They
                create a sense of formality and elegance. Sans-serif fonts have
                clean lines (no small strokes attached). They create a modern
                and minimalistic look. Monospace fonts - here all the letters
                have the same fixed width. They create a mechanical look.
                Cursive fonts imitate human handwriting. Fantasy fonts are
                decorative/playful fonts. The color property is used to set the
                color of the text. The color is specified by: a color name -
                like "red" a HEX value - like "#ff0000" an RGB value - like
                "rgb(255,0,0)" Look at CSS Color Values for a complete list of
                possible color values. The default text color for a page is
                defined in the body selector.
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Css links ended */}

      {/* Css classes started */}
      {name === "classes" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>CLASSES  IN CSS </h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/links"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/id"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                Serif fonts have a small stroke at the edges of each letter.
                They create a sense of formality and elegance. Sans-serif fonts
                have clean lines (no small strokes attached). They create a
                modern and minimalistic look. Monospace fonts - here all the
                letters have the same fixed width. They create a mechanical
                look. Cursive fonts imitate human handwriting. Fantasy fonts are
                decorative/playful fonts.Serif fonts have a small stroke at the
                edges of each letter. They create a sense of formality and
                elegance. Sans-serif fonts have clean lines (no small strokes
                attached). They create a modern and minimalistic look. Monospace
                fonts - here all the letters have the same fixed width. They
                create a mechanical look. Cursive fonts imitate human
                handwriting. Fantasy fonts are decorative/playful fonts.Serif
                fonts have a small stroke at the edges of each letter. They
                create a sense of formality and elegance. Sans-serif fonts have
                clean lines (no small strokes attached). They create a modern
                and minimalistic look. Monospace fonts - here all the letters
                have the same fixed width. They create a mechanical look.
                Cursive fonts imitate human handwriting. Fantasy fonts are
                decorative/playful fonts. The color property is used to set the
                color of the text. The color is specified by: a color name -
                like "red" a HEX value - like "#ff0000" an RGB value - like
                "rgb(255,0,0)" Look at CSS Color Values for a complete list of
                possible color values. The default text color for a page is
                defined in the body selector.
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Css classes ended */}
      {/* Css classes started */}
      {name === "id" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>ID'S  IN CSS </h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/classes"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/frames"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                Serif fonts have a small stroke at the edges of each letter.
                They create a sense of formality and elegance. Sans-serif fonts
                have clean lines (no small strokes attached). They create a
                modern and minimalistic look. Monospace fonts - here all the
                letters have the same fixed width. They create a mechanical
                look. Cursive fonts imitate human handwriting. Fantasy fonts are
                decorative/playful fonts.Serif fonts have a small stroke at the
                edges of each letter. They create a sense of formality and
                elegance. Sans-serif fonts have clean lines (no small strokes
                attached). They create a modern and minimalistic look. Monospace
                fonts - here all the letters have the same fixed width. They
                create a mechanical look. Cursive fonts imitate human
                handwriting. Fantasy fonts are decorative/playful fonts.Serif
                fonts have a small stroke at the edges of each letter. They
                create a sense of formality and elegance. Sans-serif fonts have
                clean lines (no small strokes attached). They create a modern
                and minimalistic look. Monospace fonts - here all the letters
                have the same fixed width. They create a mechanical look.
                Cursive fonts imitate human handwriting. Fantasy fonts are
                decorative/playful fonts. The color property is used to set the
                color of the text. The color is specified by: a color name -
                like "red" a HEX value - like "#ff0000" an RGB value - like
                "rgb(255,0,0)" Look at CSS Color Values for a complete list of
                possible color values. The default text color for a page is
                defined in the body selector.
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Css classes ended */}

        {/* Css frames started */}
        {name === "frames" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>FRAMES  IN CSS </h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/cssdetails/classes"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/cssdetails/introduction"}>
                <Button>Go to Top</Button>
              </NavLink>
            </div>

            <div>
              <p>
                Serif fonts have a small stroke at the edges of each letter.
                They create a sense of formality and elegance. Sans-serif fonts
                have clean lines (no small strokes attached). They create a
                modern and minimalistic look. Monospace fonts - here all the
                letters have the same fixed width. They create a mechanical
                look. Cursive fonts imitate human handwriting. Fantasy fonts are
                decorative/playful fonts.Serif fonts have a small stroke at the
                edges of each letter. They create a sense of formality and
                elegance. Sans-serif fonts have clean lines (no small strokes
                attached). They create a modern and minimalistic look. Monospace
                fonts - here all the letters have the same fixed width. They
                create a mechanical look. Cursive fonts imitate human
                handwriting. Fantasy fonts are decorative/playful fonts.Serif
                fonts have a small stroke at the edges of each letter. They
                create a sense of formality and elegance. Sans-serif fonts have
                clean lines (no small strokes attached). They create a modern
                and minimalistic look. Monospace fonts - here all the letters
                have the same fixed width. They create a mechanical look.
                Cursive fonts imitate human handwriting. Fantasy fonts are
                decorative/playful fonts. The color property is used to set the
                color of the text. The color is specified by: a color name -
                like "red" a HEX value - like "#ff0000" an RGB value - like
                "rgb(255,0,0)" Look at CSS Color Values for a complete list of
                possible color values. The default text color for a page is
                defined in the body selector.
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Css classes ended */}
      
    </div>
  );
};

export default Frontendprog;

