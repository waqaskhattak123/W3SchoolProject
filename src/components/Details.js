import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import NavBarCompo from "./NavBarCompo";

const Details = () => {
  const { htmlname } = useParams();

  return (
    <div>
      {/* Navbar Started */}
    <NavBarCompo/>
      {/* Navbar Ended */}
      {/* sidebarStarted */}
      <div className="side_bar_contents">
        <h5>Html Tutorials</h5>

        <NavLink to={"/Html/introduction"}>Introduction</NavLink>
        <NavLink to={"/Html/whereto"}>Where to</NavLink>
        <NavLink to={"/Html/output"}>OutPut</NavLink>
        <NavLink to={"/Html/statements"}>Statements</NavLink>
        <NavLink to={"/Html/syntax"}>Syntax</NavLink>
        <NavLink to={"/Html/comments"}>Comments</NavLink>
        <NavLink to={"/Html/variables"}>Variables</NavLink>
        <NavLink to={"/Html/let"}>Let</NavLink>
        <NavLink to={"/Html/const"}>Const</NavLink>
        <NavLink to={"/Html/operators"}>Operators</NavLink>
        <NavLink to={"/Html/arithamatic"}>Arithmatic</NavLink>
        <NavLink to={"/Html/assignment"}>Assignment</NavLink>
        <NavLink to={"/Html/datatypes"}>Data Types</NavLink>
        <NavLink to={"/Html/functions"}>Functions</NavLink>
        <NavLink to={"/Html/objects"}>Objects</NavLink>
        <NavLink to={"/Html/events"}>Events</NavLink>
        <NavLink to={"/Html/strings"}>Strings</NavLink>
        <NavLink to={"/Html/stringmethod"}>String Method</NavLink>
        <NavLink to={"/Html/stringsearch"}>String Search</NavLink>
        <NavLink to={"/Html/stringtemplates"}>String Templates</NavLink>
        <NavLink to={"/Html/numbers"}>Numbers</NavLink>
        <NavLink to={"/Html/bigint"}>BigInt</NavLink>
      </div>
      {/*  */}

      {/* sidebar Ended */}

      {/* htmlname introduction started */}
      {htmlname === "introduction" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Introduction to Html</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/introduction"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/whereto"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  htmlname (JS) is a lightweight interpreted (or just-in-time
                  compiled) programming language with first-class functions.
                  While it is most well-known as the scripting language for Web
                  pages, many non-browser environments also use it, such as
                  Node.js, Apache CouchDB and Adobe Acrobat. htmlname is a
                  prototype-based, multi-paradigm, single-threaded, dynamic
                  language, supporting object-oriented, imperative, and
                  declarative (e.g. functional programming) styles. htmlname's
                  dynamic capabilities include runtime object construction,
                  variable parameter lists, function variables, dynamic script
                  creation (via eval), object introspection (via for...in and
                  Object utilities), and source-code recovery (htmlname
                  functions store their source text and can be retrieved through
                  toString()). htmlname's dynamic capabilities include runtime
                  object construction, variable parameter lists, function
                  variables, dynamic script creation (via eval), object
                  introspection (via for...in and Object utilities), and
                  source-code recovery (htmlname functions store their source
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
                  Head over to our Learning Area htmlname topic if you want to
                  learn htmlname but have no previous experience with htmlname
                  or programming. The complete modules available there are as
                  follows:
                </li>
              </ul>
              <h2>htmlname guide</h2>
              <p>
                htmlname frameworks are an essential part of modern front-end
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

      {/* htmlname where to started */}
      {htmlname === "whereto" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Functions and Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/introduction"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/output"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A htmlname function is a block of htmlname code, that can be
                  executed when "called" for. For example, a function can be
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

      {/* htmlname output to started */}
      {htmlname === "output" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Display Possibilitiess</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/whereto"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/statements"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A htmlname function is a block of htmlname code, that can be
                  executed when "called" for. For example, a function can be
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

      {/* htmlname statements to started */}
      {htmlname === "statements" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Programs</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/output"}>
                <Button>Next</Button>
              </NavLink>
              <NavLink to={"/Html/syntax"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A htmlname program is a list
                of programming statements. htmlname statements are composed of:
                Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with Keywords, and Comments. This statement tells
                the browser to write "Hello Dolly." inside an HTML element with
                id="demo":htmlname statements are composed of: Values,
                Operators, Expressions, Keywords, and Comments. This statement
                tells the browser to write "Hello Dolly." inside an HTML element
                with id="demo":htmlname statements are composed of: Values,
                Operators, Expressions, Keywords, and Comments. This statement
                tells the browser to write "Hello Dolly." inside an HTML element
                with id="demo":
              </p>
            </div>
            <h2>Semicolons</h2>
            <p>
              Semicolons separate htmlname statements. Add a semicolon at the
              end of each executable statement: Examples htmlname ignores
              multiple spaces. You can add white space to your script to make it
              more readable. The following lines are equivalent:htmlname ignores
              multiple spaces. You can add white space to your script to make it
              more readable. The following lines are equivalent:htmlname ignores
              multiple spaces. You can add white space to your script to make it
              more readable. The following lines are equivalent:
            </p>
          </div>
        </div>
      )}
      {/* whereto ended */}
      {/* htmlname Syntax to started */}
      {htmlname === "syntax" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Syntax</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/output"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/comments"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A htmlname program is a list
                of programming statements. htmlname statements are composed of:
                Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with Keywords, and Comments. This statement tells
                the browser to write "Hello Dolly." inside an HTML element with
                id="demo":htmlname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":htmlname statements are composed of:
                Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* htmlname comments ended */}
      {htmlname === "comments" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Comments</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/syntax"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/variables"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A htmlname program is a list
                of programming statements. htmlname statements are composed of:
                Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with Keywords, and Comments. This statement tells
                the browser to write "Hello Dolly." inside an HTML element with
                id="demo":htmlname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":htmlname statements are composed of:
                Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* htmlname variables ended */}
      {htmlname === "variables" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Variables</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/comments"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/let"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A htmlname program is a list
                of programming statements. htmlname statements are composed of:
                Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with Keywords, and Comments. This statement tells
                the browser to write "Hello Dolly." inside an HTML element with
                id="demo":htmlname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":htmlname statements are composed of:
                Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* htmlname let started */}
      {htmlname === "let" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Let</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/variables"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/const"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* htmlname const started */}
      {htmlname === "const" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/operators"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* htmlname const started */}
      {htmlname === "operators" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/arithamatic"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}
      {/* htmlname arithmatic started */}
      {htmlname === "arithamatic" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Arithmatic</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/operators"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/assignment"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* htmlname assigment started */}
      {htmlname === "assignment" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Assignment</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/arithmatic"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/datatypes"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* htmlname datatypes started */}
      {htmlname === "datatypes" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Data Types</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/assignment"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/functions"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* htmlname datatypes started */}
      {htmlname === "functions" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Functions</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/datatypes"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/objects"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* htmlname objects started */}
      {htmlname === "objects" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Objects</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/functions"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/events"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* htmlname events started */}
      {htmlname === "events" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/objects"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/strings"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript events ended */}

      {/*  */}
      {htmlname === "strings" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Strings</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/events"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/stringmethod"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

      {/*  */}
      {htmlname === "stringmethod" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Methods</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/strings"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/stringsearch"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

      {/*  */}
      {htmlname === "stringsearch" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Search</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/stringmethod"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/stringtemplates"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

      {/*  */}
      {htmlname === "stringtemplates" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Templates</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/stringsearch"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/numbers"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

      {/*  */}
      {htmlname === "numbers" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html Numbers</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/stringtemplates"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/bigint"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}
      {/*  */}
      {htmlname === "bigint" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Html BigInt</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Html/numbers"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Html/introduction"}>
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
          are called statements. A htmlname program is a list of programming
          statements. htmlname statements are composed of: Values, Operators,
          Expressions, Keywords, and Comments. This statement tells the browser
          to write "Hello Dolly." inside an HTML element with Keywords, and
          Comments. This statement tells the browser to write "Hello Dolly."
          inside an HTML element with id="demo":htmlname statements are composed
          <h2>Lorem Ipsum Headings</h2>
          of: Values, Operators, Expressions, Keywords, and Comments. This
          statement tells the browser to write "Hello Dolly." inside an HTML
          element with id="demo":htmlname statements are composed of: Values,
          Operators, Expressions, Keywords, and Comments. This statement tells
          the browser to write "Hello Dolly." inside an HTML element with
          id="demo":
        </p>
      </div>
      {/*  */}
    </div>
  );
};
export default Details;
