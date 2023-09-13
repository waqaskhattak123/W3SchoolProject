import React, { useState } from "react";
import img from "../images/logo.jpg";
import { Button } from "react-bootstrap";

import { useParams, NavLink } from "react-router-dom";
import NavBarCompo from "./NavBarCompo";

const SqlComponent = () => {
  const [isfocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { sqlname } = useParams();

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
        <h5>SQL Tutorials</h5>

        <NavLink to={"/sql/introduction"}>Introduction</NavLink>
         <NavLink to={"/sql/whereto"}>Where to</NavLink>
        <NavLink to={"/sql/output"}>OutPut</NavLink>
        <NavLink to={"/sql/statements"}>Statements</NavLink>
        <NavLink to={"/sql/syntax"}>Syntax</NavLink>
        <NavLink to={"/sql/comments"}>Comments</NavLink>
        <NavLink to={"/sql/variables"}>Variables</NavLink>
        <NavLink to={"/sql/let"}>Let</NavLink>
        <NavLink to={"/sql/const"}>Const</NavLink>
        <NavLink to={"/sql/operators"}>Operators</NavLink>
        <NavLink to={"/sql/arithamatic"}>Arithmatic</NavLink>
        <NavLink to={"/sql/assignment"}>Assignment</NavLink>
        <NavLink to={"/sql/datatypes"}>Data Types</NavLink>
        <NavLink to={"/sql/functions"}>Functions</NavLink>
        <NavLink to={"/sql/objects"}>Objects</NavLink>
        <NavLink to={"/sql/events"}>Events</NavLink>
        <NavLink to={"/sql/strings"}>Strings</NavLink>
        <NavLink to={"/sql/stringmethod"}>String Method</NavLink>
        <NavLink to={"/sql/stringsearch"}>String Search</NavLink>
        <NavLink to={"/sql/stringtemplates"}>String Templates</NavLink>
        <NavLink to={"/sql/numbers"}>Numbers</NavLink>
        <NavLink to={"/sql/bigint"}>BigInt</NavLink>
      </div>
      {/*  */}

      {/* sidebar Ended */}
      {/* sqlname introduction started */}
      {sqlname === "introduction" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Introduction to SQL</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/introduction"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/whereto"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  sqlname (JS) is a lightweight interpreted (or just-in-time
                  compiled) programming language with first-class functions.
                  While it is most well-known as the scripting language for Web
                  pages, many non-browser environments also use it, such as
                  Node.js, Apache CouchDB and Adobe Acrobat. sqlname is a
                  prototype-based, multi-paradigm, single-threaded, dynamic
                  language, supporting object-oriented, imperative, and
                  declarative (e.g. functional programming) styles. sqlname's
                  dynamic capabilities include runtime object construction,
                  variable parameter lists, function variables, dynamic script
                  creation (via eval), object introspection (via for...in and
                  Object utilities), and source-code recovery (sqlname
                  functions store their source text and can be retrieved through
                  toString()). sqlname's dynamic capabilities include runtime
                  object construction, variable parameter lists, function
                  variables, dynamic script creation (via eval), object
                  introspection (via for...in and Object utilities), and
                  source-code recovery (sqlname functions store their source
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
                  Head over to our Learning Area sqlname topic if you want to
                  learn sqlname but have no previous experience with
                  sqlname or programming. The complete modules available
                  there are as follows:
                </li>
              </ul>
              <h2>sqlname guide</h2>
              <p>
                sqlname frameworks are an essential part of modern front-end
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

      {/* sqlname where to started */}
      {sqlname === "whereto" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Functions and Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/introduction"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/output"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A sqlname function is a block of sqlname code, that can
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

      {/* sqlname output to started */}
      {sqlname === "output" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Display Possibilitiess</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/whereto"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/statements"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A sqlname function is a block of sqlname code, that can
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

      {/* sqlname statements to started */}
      {sqlname === "statements" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Programs</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/output"}>
                <Button>Next</Button>
              </NavLink>
              <NavLink to={"/sql/syntax"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A sqlname program is a
                list of programming statements. sqlname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":sqlname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":sqlname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
            <h2>Semicolons</h2>
            <p>
              Semicolons separate sqlname statements. Add a semicolon at the
              end of each executable statement: Examples sqlname ignores
              multiple spaces. You can add white space to your script to make it
              more readable. The following lines are equivalent:sqlname
              ignores multiple spaces. You can add white space to your script to
              make it more readable. The following lines are
              equivalent:sqlname ignores multiple spaces. You can add white
              space to your script to make it more readable. The following lines
              are equivalent:
            </p>
          </div>
        </div>
      )}
      {/* whereto ended */}
      {/* sqlname Syntax to started */}
      {sqlname === "syntax" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Syntax</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/output"}>
                <Button>Next</Button>
              </NavLink>
              <NavLink to={"/sql/comments"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A sqlname program is a
                list of programming statements. sqlname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":sqlname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":sqlname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* sqlname comments ended */}
      {sqlname === "comments" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Comments</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/syntax"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/variables"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A sqlname program is a
                list of programming statements. sqlname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":sqlname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":sqlname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* sqlname variables ended */}
      {sqlname === "variables" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Variables</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/comments"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/let"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A sqlname program is a
                list of programming statements. sqlname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":sqlname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":sqlname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* sqlname let started */}
      {sqlname === "let" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Let</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/variables"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/const"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* sqlname const started */}
      {sqlname === "const" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/operators"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* sqlname const started */}
      {sqlname === "operators" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/arithamatic"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}
      {/* sqlname arithmatic started */}
      {sqlname === "arithamatic" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Arithmatic</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/operators"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/assignment"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* sqlname assigment started */}
      {sqlname === "assignment" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Assignment</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/arithmatic"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/datatypes"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* sqlname datatypes started */}
      {sqlname === "datatypes" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Data Types</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/assignment"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/functions"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* sqlname datatypes started */}
      {sqlname === "functions" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Functions</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/datatypes"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/objects"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* sqlname objects started */}
      {sqlname === "objects" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Objects</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/functions"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/events"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* sqlname events started */}
      {sqlname === "events" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/objects"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/strings"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript events ended */}

      {/*  */}
      {sqlname === "strings" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Strings</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/events"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/stringmethod"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

        {/*  */}
        {sqlname === "stringmethod" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Methods</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/strings"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/stringsearch"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

       {/*  */}
       {sqlname === "stringsearch" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Search</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/stringmethod"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/stringtemplates"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

      {/*  */}
      {sqlname === "stringtemplates" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Templates</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/stringsearch"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/numbers"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

       {/*  */}
       {sqlname === "numbers" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL Numbers</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/stringtemplates"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/bigint"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}
        {/*  */}
        {sqlname === "bigint" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>SQL BigInt</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/sql/numbers"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/sql/introduction"}>
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
          are called statements. A sqlname program is a list of programming
          statements. sqlname statements are composed of: Values, Operators,
          Expressions, Keywords, and Comments. This statement tells the browser
          to write "Hello Dolly." inside an HTML element with Keywords, and
          Comments. This statement tells the browser to write "Hello Dolly."
          inside an HTML element with id="demo":sqlname statements are
          composed
          <h2>Lorem Ipsum Headings</h2>
          of: Values, Operators, Expressions, Keywords, and Comments. This
          statement tells the browser to write "Hello Dolly." inside an HTML
          element with id="demo":sqlname statements are composed of: Values,
          Operators, Expressions, Keywords, and Comments. This statement tells
          the browser to write "Hello Dolly." inside an HTML element with
          id="demo":
        </p>
      </div>
      {/*  */}
    </div>
  );
};
export default SqlComponent;
