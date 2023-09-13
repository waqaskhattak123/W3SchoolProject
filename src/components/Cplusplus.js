import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import NavBarCompo from "./NavBarCompo";

const Cplusplus = () => {
  const [isfocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { cplusplus } = useParams();
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
        <h5>C++ Tutorials</h5>

        <NavLink to={"/C++/introduction"}>Introduction</NavLink>
         <NavLink to={"/C++/whereto"}>Where to</NavLink>
        <NavLink to={"/C++/output"}>OutPut</NavLink>
        <NavLink to={"/C++/statements"}>Statements</NavLink>
        <NavLink to={"/C++/syntax"}>Syntax</NavLink>
        <NavLink to={"/C++/comments"}>Comments</NavLink>
        <NavLink to={"/C++/variables"}>Variables</NavLink>
        <NavLink to={"/C++/let"}>Let</NavLink>
        <NavLink to={"/C++/const"}>Const</NavLink>
        <NavLink to={"/C++/operators"}>Operators</NavLink>
        <NavLink to={"/C++/arithamatic"}>Arithmatic</NavLink>
        <NavLink to={"/C++/assignment"}>Assignment</NavLink>
        <NavLink to={"/C++/datatypes"}>Data Types</NavLink>
        <NavLink to={"/C++/functions"}>Functions</NavLink>
        <NavLink to={"/C++/objects"}>Objects</NavLink>
        <NavLink to={"/C++/events"}>Events</NavLink>
        <NavLink to={"/C++/strings"}>Strings</NavLink>
        <NavLink to={"/C++/stringmethod"}>String Method</NavLink>
        <NavLink to={"/C++/stringsearch"}>String Search</NavLink>
        <NavLink to={"/C++/stringtemplates"}>String Templates</NavLink>
        <NavLink to={"/C++/numbers"}>Numbers</NavLink>
        <NavLink to={"/C++/bigint"}>BigInt</NavLink>
      </div>
      {/*  */}

      {/* sidebar Ended */}
      {/* cplusplus introduction started */}
      {cplusplus === "introduction" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Introduction to C++</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/introduction"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/whereto"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  cplusplus (JS) is a lightweight interpreted (or just-in-time
                  compiled) programming language with first-class functions.
                  While it is most well-known as the scripting language for Web
                  pages, many non-browser environments also use it, such as
                  Node.js, Apache CouchDB and Adobe Acrobat. cplusplus is a
                  prototype-based, multi-paradigm, single-threaded, dynamic
                  language, supporting object-oriented, imperative, and
                  declarative (e.g. functional programming) styles. cplusplus's
                  dynamic capabilities include runtime object construction,
                  variable parameter lists, function variables, dynamic script
                  creation (via eval), object introspection (via for...in and
                  Object utilities), and source-code recovery (cplusplus
                  functions store their source text and can be retrieved through
                  toString()). cplusplus's dynamic capabilities include runtime
                  object construction, variable parameter lists, function
                  variables, dynamic script creation (via eval), object
                  introspection (via for...in and Object utilities), and
                  source-code recovery (cplusplus functions store their source
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
                  Head over to our Learning Area cplusplus topic if you want to
                  learn cplusplus but have no previous experience with
                  cplusplus or programming. The complete modules available
                  there are as follows:
                </li>
              </ul>
              <h2>cplusplus guide</h2>
              <p>
                cplusplus frameworks are an essential part of modern front-end
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

      {/* cplusplus where to started */}
      {cplusplus === "whereto" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Functions and Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/introduction"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/output"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A cplusplus function is a block of cplusplus code, that can
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

      {/* cplusplus output to started */}
      {cplusplus === "output" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Display Possibilitiess</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/whereto"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/statements"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A cplusplus function is a block of cplusplus code, that can
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

      {/* cplusplus statements to started */}
      {cplusplus === "statements" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Programs</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/output"}>
                <Button>Next</Button>
              </NavLink>
              <NavLink to={"/C++/syntax"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A cplusplus program is a
                list of programming statements. cplusplus statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":cplusplus statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":cplusplus statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
            <h2>Semicolons</h2>
            <p>
              Semicolons separate cplusplus statements. Add a semicolon at the
              end of each executable statement: Examples cplusplus ignores
              multiple spaces. You can add white space to your script to make it
              more readable. The following lines are equivalent:cplusplus
              ignores multiple spaces. You can add white space to your script to
              make it more readable. The following lines are
              equivalent:cplusplus ignores multiple spaces. You can add white
              space to your script to make it more readable. The following lines
              are equivalent:
            </p>
          </div>
        </div>
      )}
      {/* whereto ended */}
      {/* cplusplus Syntax to started */}
      {cplusplus === "syntax" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Syntax</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/output"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/comments"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A cplusplus program is a
                list of programming statements. cplusplus statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":cplusplus statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":cplusplus statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* cplusplus comments ended */}
      {cplusplus === "comments" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Comments</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/syntax"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/variables"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A cplusplus program is a
                list of programming statements. cplusplus statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":cplusplus statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":cplusplus statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* cplusplus variables ended */}
      {cplusplus === "variables" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Variables</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/comments"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/let"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A cplusplus program is a
                list of programming statements. cplusplus statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":cplusplus statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":cplusplus statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* cplusplus let started */}
      {cplusplus === "let" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Let</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/variables"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/const"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* cplusplus const started */}
      {cplusplus === "const" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/operators"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* cplusplus const started */}
      {cplusplus === "operators" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/arithamatic"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}
      {/* cplusplus arithmatic started */}
      {cplusplus === "arithamatic" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Arithmatic</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/operators"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/assignment"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* cplusplus assigment started */}
      {cplusplus === "assignment" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Assignment</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/arithmatic"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/datatypes"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* cplusplus datatypes started */}
      {cplusplus === "datatypes" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Data Types</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/assignment"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/functions"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* cplusplus datatypes started */}
      {cplusplus === "functions" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Functions</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/datatypes"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/objects"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* cplusplus objects started */}
      {cplusplus === "objects" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Objects</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/functions"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/events"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* cplusplus events started */}
      {cplusplus === "events" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/objects"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/strings"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript events ended */}

      {/*  */}
      {cplusplus === "strings" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Strings</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/events"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/stringmethod"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

        {/*  */}
        {cplusplus === "stringmethod" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Methods</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/strings"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/stringsearch"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

       {/*  */}
       {cplusplus === "stringsearch" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Search</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/stringmethod"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/stringtemplates"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

      {/*  */}
      {cplusplus === "stringtemplates" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Templates</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/stringsearch"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/numbers"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

       {/*  */}
       {cplusplus === "numbers" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ Numbers</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/stringtemplates"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/bigint"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}
        {/*  */}
        {cplusplus === "bigint" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>C++ BigInt</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/C++/numbers"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/C++/introduction"}>
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
          are called statements. A cplusplus program is a list of programming
          statements. cplusplus statements are composed of: Values, Operators,
          Expressions, Keywords, and Comments. This statement tells the browser
          to write "Hello Dolly." inside an HTML element with Keywords, and
          Comments. This statement tells the browser to write "Hello Dolly."
          inside an HTML element with id="demo":cplusplus statements are
          composed
          <h2>Lorem Ipsum Headings</h2>
          of: Values, Operators, Expressions, Keywords, and Comments. This
          statement tells the browser to write "Hello Dolly." inside an HTML
          element with id="demo":cplusplus statements are composed of: Values,
          Operators, Expressions, Keywords, and Comments. This statement tells
          the browser to write "Hello Dolly." inside an HTML element with
          id="demo":
        </p>
      </div>
      {/*  */}
    </div>
  );
};
export default Cplusplus;
