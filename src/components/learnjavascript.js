import React, { useState } from "react";
import img from "../images/logo.jpg";
import { Button } from "react-bootstrap";

import { useParams, NavLink } from "react-router-dom";
import NavBarCompo from "./NavBarCompo";

const LearnJavaScipt = () => {
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
        <h5>JavaScript Tutorials</h5>

        <NavLink to={"/learnJavaScript/introduction"}>Introduction</NavLink>
         <NavLink to={"/learnJavaScript/whereto"}>Where to</NavLink>
        <NavLink to={"/learnJavaScript/output"}>OutPut</NavLink>
        <NavLink to={"/learnJavaScript/statements"}>Statements</NavLink>
        <NavLink to={"/learnJavaScript/syntax"}>Syntax</NavLink>
        <NavLink to={"/learnJavaScript/comments"}>Comments</NavLink>
        <NavLink to={"/learnJavaScript/variables"}>Variables</NavLink>
        <NavLink to={"/learnJavaScript/let"}>Let</NavLink>
        <NavLink to={"/learnJavaScript/const"}>Const</NavLink>
        <NavLink to={"/learnJavaScript/operators"}>Operators</NavLink>
        <NavLink to={"/learnJavaScript/arithamatic"}>Arithmatic</NavLink>
        <NavLink to={"/learnJavaScript/assignment"}>Assignment</NavLink>
        <NavLink to={"/learnJavaScript/datatypes"}>Data Types</NavLink>
        <NavLink to={"/learnJavaScript/functions"}>Functions</NavLink>
        <NavLink to={"/learnJavaScript/objects"}>Objects</NavLink>
        <NavLink to={"/learnJavaScript/events"}>Events</NavLink>
        <NavLink to={"/learnJavaScript/strings"}>Strings</NavLink>
        <NavLink to={"/learnJavaScript/stringmethod"}>String Method</NavLink>
        <NavLink to={"/learnJavaScript/stringsearch"}>String Search</NavLink>
        <NavLink to={"/learnJavaScript/stringtemplates"}>
          String Templates
        </NavLink>
        <NavLink to={"/learnJavaScript/numbers"}>Numbers</NavLink>
        <NavLink to={"/learnJavaScript/bigint"}>BigInt</NavLink>
      </div>
      {/*  */}

      {/* sidebar Ended */}
      {/* JavaScript introduction started */}
      {name === "introduction" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Introduction to JavaScript</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/introduction"}>
                <Button>Next</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/whereto"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  JavaScript (JS) is a lightweight interpreted (or just-in-time
                  compiled) programming language with first-class functions.
                  While it is most well-known as the scripting language for Web
                  pages, many non-browser environments also use it, such as
                  Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a
                  prototype-based, multi-paradigm, single-threaded, dynamic
                  language, supporting object-oriented, imperative, and
                  declarative (e.g. functional programming) styles. JavaScript's
                  dynamic capabilities include runtime object construction,
                  variable parameter lists, function variables, dynamic script
                  creation (via eval), object introspection (via for...in and
                  Object utilities), and source-code recovery (JavaScript
                  functions store their source text and can be retrieved through
                  toString()). JavaScript's dynamic capabilities include runtime
                  object construction, variable parameter lists, function
                  variables, dynamic script creation (via eval), object
                  introspection (via for...in and Object utilities), and
                  source-code recovery (JavaScript functions store their source
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
                  Head over to our Learning Area JavaScript topic if you want to
                  learn JavaScript but have no previous experience with
                  JavaScript or programming. The complete modules available
                  there are as follows:
                </li>
              </ul>
              <h2>JavaScript guide</h2>
              <p>
                JavaScript frameworks are an essential part of modern front-end
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

      {/* JavaScript where to started */}
      {name === "whereto" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Functions and Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/introduction"}>
                <Button>Next</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/output"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A JavaScript function is a block of JavaScript code, that can
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

      {/* JavaScript output to started */}
      {name === "output" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Display Possibilitiess</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/whereto"}>
                <Button>Next</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/output"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A JavaScript function is a block of JavaScript code, that can
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

      {/* JavaScript statements to started */}
      {name === "statements" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Programs</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/output"}>
                <Button>Next</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/syntax"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A JavaScript program is a
                list of programming statements. JavaScript statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":JavaScript statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":JavaScript statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
            <h2>Semicolons</h2>
            <p>
              Semicolons separate JavaScript statements. Add a semicolon at the
              end of each executable statement: Examples JavaScript ignores
              multiple spaces. You can add white space to your script to make it
              more readable. The following lines are equivalent:JavaScript
              ignores multiple spaces. You can add white space to your script to
              make it more readable. The following lines are
              equivalent:JavaScript ignores multiple spaces. You can add white
              space to your script to make it more readable. The following lines
              are equivalent:
            </p>
          </div>
        </div>
      )}
      {/* whereto ended */}
      {/* JavaScript Syntax to started */}
      {name === "syntax" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Syntax</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/output"}>
                <Button>Next</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/comments"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A JavaScript program is a
                list of programming statements. JavaScript statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":JavaScript statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":JavaScript statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javascript comments ended */}
      {name === "comments" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Comments</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/syntax"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/variables"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A JavaScript program is a
                list of programming statements. JavaScript statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":JavaScript statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":JavaScript statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* Javascript variables ended */}
      {name === "variables" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Variables</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/comments"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/let"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A JavaScript program is a
                list of programming statements. JavaScript statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":JavaScript statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":JavaScript statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* Javascript let started */}
      {name === "let" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Let</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/variables"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/const"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* Javascript const started */}
      {name === "const" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/operators"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* Javascript const started */}
      {name === "operators" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/operators"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}
      {/* Javascript arithmatic started */}
      {name === "arithamatic" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Arithmatic</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/operators"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/assignment"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* Javascript assigment started */}
      {name === "assignment" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Assignment</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/arithmatic"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/datatypes"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* Javascript datatypes started */}
      {name === "datatypes" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Data Types</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/assignment"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/functions"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* Javascript datatypes started */}
      {name === "functions" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Functions</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/datatypes"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/objects"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* Javascript objects started */}
      {name === "objects" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Objects</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/functions"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/events"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* Javascript events started */}
      {name === "events" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/objects"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/strings"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript events ended */}

      {/*  */}
      {name === "strings" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Strings</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/events"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/stringmethod"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

        {/*  */}
        {name === "stringmethod" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Methods</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/strings"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/stringsearch"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

       {/*  */}
       {name === "stringsearch" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Search</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/stringmethod"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/stringtemplates"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

      {/*  */}
      {name === "stringtemplates" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Templates</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/stringsearch"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/numbers"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

       {/*  */}
       {name === "numbers" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript Numbers</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/stringtemplates"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/bigint"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}
        {/*  */}
        {name === "bigint" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>JavaScript BigInt</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/learnJavaScript/numbers"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/learnJavaScript/introduction"}>
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
          are called statements. A JavaScript program is a list of programming
          statements. JavaScript statements are composed of: Values, Operators,
          Expressions, Keywords, and Comments. This statement tells the browser
          to write "Hello Dolly." inside an HTML element with Keywords, and
          Comments. This statement tells the browser to write "Hello Dolly."
          inside an HTML element with id="demo":JavaScript statements are
          composed
          <h2>Lorem Ipsum Headings</h2>
          of: Values, Operators, Expressions, Keywords, and Comments. This
          statement tells the browser to write "Hello Dolly." inside an HTML
          element with id="demo":JavaScript statements are composed of: Values,
          Operators, Expressions, Keywords, and Comments. This statement tells
          the browser to write "Hello Dolly." inside an HTML element with
          id="demo":
        </p>
      </div>
      {/*  */}
    </div>
  );
};
export default LearnJavaScipt;
