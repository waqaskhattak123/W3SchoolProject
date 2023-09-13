import React, { useState } from "react";
import img from "../images/logo.jpg";
import { Button } from "react-bootstrap";

import { useParams, NavLink } from "react-router-dom";

const ReactCompo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTrue, setIsTrue] = useState(true);
  const [isfocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { reactname } = useParams();

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
        <h5>React Js Tutorials</h5>

        <NavLink to={"/react/introduction"}>Introduction</NavLink>
         <NavLink to={"/react/whereto"}>Where to</NavLink>
        <NavLink to={"/react/output"}>OutPut</NavLink>
        <NavLink to={"/react/statements"}>Statements</NavLink>
        <NavLink to={"/react/syntax"}>Syntax</NavLink>
        <NavLink to={"/react/comments"}>Comments</NavLink>
        <NavLink to={"/react/variables"}>Variables</NavLink>
        <NavLink to={"/react/let"}>Let</NavLink>
        <NavLink to={"/react/const"}>Const</NavLink>
        <NavLink to={"/react/operators"}>Operators</NavLink>
        <NavLink to={"/react/arithamatic"}>Arithmatic</NavLink>
        <NavLink to={"/react/assignment"}>Assignment</NavLink>
        <NavLink to={"/react/datatypes"}>Data Types</NavLink>
        <NavLink to={"/react/functions"}>Functions</NavLink>
        <NavLink to={"/react/objects"}>Objects</NavLink>
        <NavLink to={"/react/events"}>Events</NavLink>
        <NavLink to={"/react/strings"}>Strings</NavLink>
        <NavLink to={"/react/stringmethod"}>String Method</NavLink>
        <NavLink to={"/react/stringsearch"}>String Search</NavLink>
        <NavLink to={"/react/stringtemplates"}>String Templates</NavLink>
        <NavLink to={"/react/numbers"}>Numbers</NavLink>
        <NavLink to={"/react/bigint"}>BigInt</NavLink>
      </div>
      {/*  */}

      {/* sidebar Ended */}
      {/* reactname introduction started */}
      {reactname === "introduction" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Introduction to React Js</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/introduction"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/whereto"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  reactname (JS) is a lightweight interpreted (or just-in-time
                  compiled) programming language with first-class functions.
                  While it is most well-known as the scripting language for Web
                  pages, many non-browser environments also use it, such as
                  Node.js, Apache CouchDB and Adobe Acrobat. reactname is a
                  prototype-based, multi-paradigm, single-threaded, dynamic
                  language, supporting object-oriented, imperative, and
                  declarative (e.g. functional programming) styles. reactname's
                  dynamic capabilities include runtime object construction,
                  variable parameter lists, function variables, dynamic script
                  creation (via eval), object introspection (via for...in and
                  Object utilities), and source-code recovery (reactname
                  functions store their source text and can be retrieved through
                  toString()). reactname's dynamic capabilities include runtime
                  object construction, variable parameter lists, function
                  variables, dynamic script creation (via eval), object
                  introspection (via for...in and Object utilities), and
                  source-code recovery (reactname functions store their source
                  text and can be retrieved through toString()).
                </p>
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
              <h2>For complete beginners</h2>
              <ul>
                <li>
                  Head over to our Learning Area reactname topic if you want to
                  learn reactname but have no previous experience with
                  reactname or programming. The complete modules available
                  there are as follows:
                </li>
              </ul>
              <h2>reactname guide</h2>
              <p>
                reactname frameworks are an essential part of modern front-end
                web development, providing developers with proven tools for
                building scalable, interactive web applications. This module
                gives you some fundamental background knowledge about how
                client-side frameworks work and how they fit into your toolset,
                before moving on to a series of tutorials covering some of
                today's most popular ones. When tags like font, and color
                attributes were added to the HTML 3.2 specification, it started
                a nightmare for web developers. Development of large websites,
                where fonts and color information were added to every single
                page, became a long and expensive process. To solve this
                problem, the World Wide Web Consortium (W3C) created CSS. CSS
                removed the style formatting from the HTML page!
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Css introduction ended */}

      {/* reactname where to started */}
      {reactname === "whereto" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Functions and Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/introduction"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/output"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A reactname function is a block of reactname code, that can
                  be executed when "called" for. For example, a function can be
                  called when an event occurs, like when the user clicks a
                  button. You will learn much more about functions and events in
                  later chapters..
                </p>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Css whereto ended */}

      {/* reactname output to started */}
      {reactname === "output" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Display Possibilitiess</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/whereto"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/statements"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A reactname function is a block of reactname code, that can
                  be executed when "called" for. For example, a function can be
                  called when an event occurs, like when the user clicks a
                  button. You will learn much more about functions and events in
                  later chapters..
                </p>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Css whereto ended */}

      {/* reactname statements to started */}
      {reactname === "statements" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Programs</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/output"}>
                <Button>Next</Button>
              </NavLink>
              <NavLink to={"/React Js/syntax"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A reactname program is a
                list of programming statements. reactname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":reactname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":reactname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
            <h2>Semicolons</h2>
            <p>
              Semicolons separate reactname statements. Add a semicolon at the
              end of each executable statement: Examples reactname ignores
              multiple spaces. You can add white space to your script to make it
              more readable. The following lines are equivalent:reactname
              ignores multiple spaces. You can add white space to your script to
              make it more readable. The following lines are
              equivalent:reactname ignores multiple spaces. You can add white
              space to your script to make it more readable. The following lines
              are equivalent:
            </p>
          </div>
        </div>
      )}
      {/* whereto ended */}
      {/* reactname Syntax to started */}
      {reactname === "syntax" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Syntax</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/output"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/comments"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A reactname program is a
                list of programming statements. reactname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":reactname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":reactname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* reactname comments ended */}
      {reactname === "comments" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Comments</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/syntax"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/variables"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A reactname program is a
                list of programming statements. reactname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":reactname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":reactname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* reactname variables ended */}
      {reactname === "variables" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Variables</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/comments"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/let"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A reactname program is a
                list of programming statements. reactname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":reactname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":reactname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* reactname let started */}
      {reactname === "let" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Let</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/variables"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/const"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* reactname const started */}
      {reactname === "const" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/operators"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* reactname const started */}
      {reactname === "operators" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/arithamatic"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}
      {/* reactname arithmatic started */}
      {reactname === "arithamatic" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Arithmatic</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/operators"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/assignment"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* reactname assigment started */}
      {reactname === "assignment" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Assignment</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/arithmatic"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/datatypes"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* reactname datatypes started */}
      {reactname === "datatypes" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Data Types</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/assignment"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/functions"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* reactname datatypes started */}
      {reactname === "functions" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Functions</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/datatypes"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/objects"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* reactname objects started */}
      {reactname === "objects" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Objects</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/functions"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/events"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* reactname events started */}
      {reactname === "events" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/objects"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/strings"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript events ended */}

      {/*  */}
      {reactname === "strings" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Strings</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/events"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/stringmethod"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

        {/*  */}
        {reactname === "stringmethod" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Methods</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/strings"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/stringsearch"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

       {/*  */}
       {reactname === "stringsearch" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Search</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/stringmethod"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/stringtemplates"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

      {/*  */}
      {reactname === "stringtemplates" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Templates</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/stringsearch"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/numbers"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

       {/*  */}
       {reactname === "numbers" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js Numbers</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/stringtemplates"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/bigint"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}
        {/*  */}
        {reactname === "bigint" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>React Js BigInt</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/React Js/numbers"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/React Js/introduction"}>
                <Button>Go To Top</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}
      <div>
        <p>
          A computer program is a list of "instructions" to be "executed" by a
          computer. In a programming language, these programming instructions
          are called statements. A reactname program is a list of programming
          statements. reactname statements are composed of: Values, Operators,
          Expressions, Keywords, and Comments. This statement tells the browser
          to write "Hello Dolly." inside an HTML element with Keywords, and
          Comments. This statement tells the browser to write "Hello Dolly."
          inside an HTML element with id="demo":reactname statements are
          composed
          <h2>Lorem Ipsum Headings</h2>
          of: Values, Operators, Expressions, Keywords, and Comments. This
          statement tells the browser to write "Hello Dolly." inside an HTML
          element with id="demo":reactname statements are composed of: Values,
          Operators, Expressions, Keywords, and Comments. This statement tells
          the browser to write "Hello Dolly." inside an HTML element with
          id="demo":
        </p>
      </div>
      {/*  */}
    </div>
  );
};
export default ReactCompo;
