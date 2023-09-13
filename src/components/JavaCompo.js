import React, { useState } from "react";
import img from "../images/logo.jpg";
import { Button } from "react-bootstrap";

import { useParams, NavLink } from "react-router-dom";
import NavBarCompo from "./NavBarCompo";

const JavaCompo = () => {
  const [isfocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { Javaname } = useParams();
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
        <h5>Java Tutorials</h5>

        <NavLink to={"/Java/introduction"}>Introduction</NavLink>
         <NavLink to={"/Java/whereto"}>Where to</NavLink>
        <NavLink to={"/Java/output"}>OutPut</NavLink>
        <NavLink to={"/Java/statements"}>Statements</NavLink>
        <NavLink to={"/Java/syntax"}>Syntax</NavLink>
        <NavLink to={"/Java/comments"}>Comments</NavLink>
        <NavLink to={"/Java/variables"}>Variables</NavLink>
        <NavLink to={"/Java/let"}>Let</NavLink>
        <NavLink to={"/Java/const"}>Const</NavLink>
        <NavLink to={"/Java/operators"}>Operators</NavLink>
        <NavLink to={"/Java/arithamatic"}>Arithmatic</NavLink>
        <NavLink to={"/Java/assignment"}>Assignment</NavLink>
        <NavLink to={"/Java/datatypes"}>Data Types</NavLink>
        <NavLink to={"/Java/functions"}>Functions</NavLink>
        <NavLink to={"/Java/objects"}>Objects</NavLink>
        <NavLink to={"/Java/events"}>Events</NavLink>
        <NavLink to={"/Java/strings"}>Strings</NavLink>
        <NavLink to={"/Java/stringmethod"}>String Method</NavLink>
        <NavLink to={"/Java/stringsearch"}>String Search</NavLink>
        <NavLink to={"/Java/stringtemplates"}>String Templates</NavLink>
        <NavLink to={"/Java/numbers"}>Numbers</NavLink>
        <NavLink to={"/Java/bigint"}>BigInt</NavLink>
      </div>
      {/*  */}

      {/* sidebar Ended */}
      {/* Javaname introduction started */}
      {Javaname === "introduction" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Introduction to Java</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/introduction"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/whereto"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  Javaname (JS) is a lightweight interpreted (or just-in-time
                  compiled) programming language with first-class functions.
                  While it is most well-known as the scripting language for Web
                  pages, many non-browser environments also use it, such as
                  Node.js, Apache CouchDB and Adobe Acrobat. Javaname is a
                  prototype-based, multi-paradigm, single-threaded, dynamic
                  language, supporting object-oriented, imperative, and
                  declarative (e.g. functional programming) styles. Javaname's
                  dynamic capabilities include runtime object construction,
                  variable parameter lists, function variables, dynamic script
                  creation (via eval), object introspection (via for...in and
                  Object utilities), and source-code recovery (Javaname
                  functions store their source text and can be retrieved through
                  toString()). Javaname's dynamic capabilities include runtime
                  object construction, variable parameter lists, function
                  variables, dynamic script creation (via eval), object
                  introspection (via for...in and Object utilities), and
                  source-code recovery (Javaname functions store their source
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
                  Head over to our Learning Area Javaname topic if you want to
                  learn Javaname but have no previous experience with
                  Javaname or programming. The complete modules available
                  there are as follows:
                </li>
              </ul>
              <h2>Javaname guide</h2>
              <p>
                Javaname frameworks are an essential part of modern front-end
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

      {/* Javaname where to started */}
      {Javaname === "whereto" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Functions and Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/introduction"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/output"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A Javaname function is a block of Javaname code, that can
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

      {/* Javaname output to started */}
      {Javaname === "output" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Display Possibilitiess</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/whereto"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/statements"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A Javaname function is a block of Javaname code, that can
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

      {/* Javaname statements to started */}
      {Javaname === "statements" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Programs</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/output"}>
                <Button>Next</Button>
              </NavLink>
              <NavLink to={"/Java/syntax"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A Javaname program is a
                list of programming statements. Javaname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Javaname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Javaname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
            <h2>Semicolons</h2>
            <p>
              Semicolons separate Javaname statements. Add a semicolon at the
              end of each executable statement: Examples Javaname ignores
              multiple spaces. You can add white space to your script to make it
              more readable. The following lines are equivalent:Javaname
              ignores multiple spaces. You can add white space to your script to
              make it more readable. The following lines are
              equivalent:Javaname ignores multiple spaces. You can add white
              space to your script to make it more readable. The following lines
              are equivalent:
            </p>
          </div>
        </div>
      )}
      {/* whereto ended */}
      {/* Javaname Syntax to started */}
      {Javaname === "syntax" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Syntax</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/output"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/comments"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A Javaname program is a
                list of programming statements. Javaname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Javaname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Javaname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javaname comments ended */}
      {Javaname === "comments" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Comments</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/syntax"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/variables"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A Javaname program is a
                list of programming statements. Javaname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Javaname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Javaname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* Javaname variables ended */}
      {Javaname === "variables" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Variables</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/comments"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/let"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A Javaname program is a
                list of programming statements. Javaname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Javaname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Javaname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* Javaname let started */}
      {Javaname === "let" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Let</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/variables"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/const"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* Javaname const started */}
      {Javaname === "const" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/operators"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* Javaname const started */}
      {Javaname === "operators" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/arithamatic"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}
      {/* Javaname arithmatic started */}
      {Javaname === "arithamatic" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Arithmatic</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/operators"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/assignment"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* Javaname assigment started */}
      {Javaname === "assignment" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Assignment</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/arithmatic"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/datatypes"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* Javaname datatypes started */}
      {Javaname === "datatypes" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Data Types</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/assignment"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/functions"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* Javaname datatypes started */}
      {Javaname === "functions" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Functions</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/datatypes"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/objects"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* Javaname objects started */}
      {Javaname === "objects" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Objects</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/functions"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/events"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* Javaname events started */}
      {Javaname === "events" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/objects"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/strings"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript events ended */}

      {/*  */}
      {Javaname === "strings" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Strings</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/events"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/stringmethod"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

        {/*  */}
        {Javaname === "stringmethod" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Methods</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/strings"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/stringsearch"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

       {/*  */}
       {Javaname === "stringsearch" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Search</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/stringmethod"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/stringtemplates"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

      {/*  */}
      {Javaname === "stringtemplates" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Templates</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/stringsearch"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/numbers"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

       {/*  */}
       {Javaname === "numbers" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java Numbers</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/stringtemplates"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/bigint"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}
        {/*  */}
        {Javaname === "bigint" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Java BigInt</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Java/numbers"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Java/introduction"}>
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
          are called statements. A Javaname program is a list of programming
          statements. Javaname statements are composed of: Values, Operators,
          Expressions, Keywords, and Comments. This statement tells the browser
          to write "Hello Dolly." inside an HTML element with Keywords, and
          Comments. This statement tells the browser to write "Hello Dolly."
          inside an HTML element with id="demo":Javaname statements are
          composed
          <h2>Lorem Ipsum Headings</h2>
          of: Values, Operators, Expressions, Keywords, and Comments. This
          statement tells the browser to write "Hello Dolly." inside an HTML
          element with id="demo":Javaname statements are composed of: Values,
          Operators, Expressions, Keywords, and Comments. This statement tells
          the browser to write "Hello Dolly." inside an HTML element with
          id="demo":
        </p>
      </div>
      {/*  */}
    </div>
  );
};
export default JavaCompo;
