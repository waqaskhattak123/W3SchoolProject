import React, { useState } from "react";
import img from "../images/logo.jpg";
import { Button } from "react-bootstrap";

import { useParams, NavLink } from "react-router-dom";
import NavBarCompo from "./NavBarCompo";

const JqueryCompo = () => {
  const [isfocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { Jqueryname } = useParams();

 ;
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
        <h5>Jquery Tutorials</h5>

        <NavLink to={"/Jquery/introduction"}>Introduction</NavLink>
         <NavLink to={"/Jquery/whereto"}>Where to</NavLink>
        <NavLink to={"/Jquery/output"}>OutPut</NavLink>
        <NavLink to={"/Jquery/statements"}>Statements</NavLink>
        <NavLink to={"/Jquery/syntax"}>Syntax</NavLink>
        <NavLink to={"/Jquery/comments"}>Comments</NavLink>
        <NavLink to={"/Jquery/variables"}>Variables</NavLink>
        <NavLink to={"/Jquery/let"}>Let</NavLink>
        <NavLink to={"/Jquery/const"}>Const</NavLink>
        <NavLink to={"/Jquery/operators"}>Operators</NavLink>
        <NavLink to={"/Jquery/arithamatic"}>Arithmatic</NavLink>
        <NavLink to={"/Jquery/assignment"}>Assignment</NavLink>
        <NavLink to={"/Jquery/datatypes"}>Data Types</NavLink>
        <NavLink to={"/Jquery/functions"}>Functions</NavLink>
        <NavLink to={"/Jquery/objects"}>Objects</NavLink>
        <NavLink to={"/Jquery/events"}>Events</NavLink>
        <NavLink to={"/Jquery/strings"}>Strings</NavLink>
        <NavLink to={"/Jquery/stringmethod"}>String Method</NavLink>
        <NavLink to={"/Jquery/stringsearch"}>String Search</NavLink>
        <NavLink to={"/Jquery/stringtemplates"}>String Templates</NavLink>
        <NavLink to={"/Jquery/numbers"}>Numbers</NavLink>
        <NavLink to={"/Jquery/bigint"}>BigInt</NavLink>
      </div>
      {/*  */}

      {/* sidebar Ended */}
      {/* Jqueryname introduction started */}
      {Jqueryname === "introduction" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Introduction to Jquery</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/introduction"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/whereto"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  Jqueryname (JS) is a lightweight interpreted (or just-in-time
                  compiled) programming language with first-class functions.
                  While it is most well-known as the scripting language for Web
                  pages, many non-browser environments also use it, such as
                  Node.js, Apache CouchDB and Adobe Acrobat. Jqueryname is a
                  prototype-based, multi-paradigm, single-threaded, dynamic
                  language, supporting object-oriented, imperative, and
                  declarative (e.g. functional programming) styles. Jqueryname's
                  dynamic capabilities include runtime object construction,
                  variable parameter lists, function variables, dynamic script
                  creation (via eval), object introspection (via for...in and
                  Object utilities), and source-code recovery (Jqueryname
                  functions store their source text and can be retrieved through
                  toString()). Jqueryname's dynamic capabilities include runtime
                  object construction, variable parameter lists, function
                  variables, dynamic script creation (via eval), object
                  introspection (via for...in and Object utilities), and
                  source-code recovery (Jqueryname functions store their source
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
                  Head over to our Learning Area Jqueryname topic if you want to
                  learn Jqueryname but have no previous experience with
                  Jqueryname or programming. The complete modules available
                  there are as follows:
                </li>
              </ul>
              <h2>Jqueryname guide</h2>
              <p>
                Jqueryname frameworks are an essential part of modern front-end
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

      {/* Jqueryname where to started */}
      {Jqueryname === "whereto" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Functions and Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/introduction"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/output"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A Jqueryname function is a block of Jqueryname code, that can
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

      {/* Jqueryname output to started */}
      {Jqueryname === "output" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Display Possibilitiess</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/whereto"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/statements"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A Jqueryname function is a block of Jqueryname code, that can
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

      {/* Jqueryname statements to started */}
      {Jqueryname === "statements" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Programs</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/output"}>
                <Button>Next</Button>
              </NavLink>
              <NavLink to={"/Jquery/syntax"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A Jqueryname program is a
                list of programming statements. Jqueryname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Jqueryname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Jqueryname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
            <h2>Semicolons</h2>
            <p>
              Semicolons separate Jqueryname statements. Add a semicolon at the
              end of each executable statement: Examples Jqueryname ignores
              multiple spaces. You can add white space to your script to make it
              more readable. The following lines are equivalent:Jqueryname
              ignores multiple spaces. You can add white space to your script to
              make it more readable. The following lines are
              equivalent:Jqueryname ignores multiple spaces. You can add white
              space to your script to make it more readable. The following lines
              are equivalent:
            </p>
          </div>
        </div>
      )}
      {/* whereto ended */}
      {/* Jqueryname Syntax to started */}
      {Jqueryname === "syntax" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Syntax</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/output"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/comments"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A Jqueryname program is a
                list of programming statements. Jqueryname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Jqueryname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Jqueryname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Jqueryname comments ended */}
      {Jqueryname === "comments" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Comments</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/syntax"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/variables"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A Jqueryname program is a
                list of programming statements. Jqueryname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Jqueryname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Jqueryname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* Jqueryname variables ended */}
      {Jqueryname === "variables" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Variables</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/comments"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/let"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A Jqueryname program is a
                list of programming statements. Jqueryname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Jqueryname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Jqueryname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* Jqueryname let started */}
      {Jqueryname === "let" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Let</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/variables"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/const"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* Jqueryname const started */}
      {Jqueryname === "const" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/operators"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* Jqueryname const started */}
      {Jqueryname === "operators" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/arithamatic"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}
      {/* Jqueryname arithmatic started */}
      {Jqueryname === "arithamatic" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Arithmatic</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/operators"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/assignment"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* Jqueryname assigment started */}
      {Jqueryname === "assignment" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Assignment</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/arithmatic"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/datatypes"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* Jqueryname datatypes started */}
      {Jqueryname === "datatypes" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Data Types</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/assignment"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/functions"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* Jqueryname datatypes started */}
      {Jqueryname === "functions" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Functions</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/datatypes"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/objects"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* Jqueryname objects started */}
      {Jqueryname === "objects" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Objects</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/functions"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/events"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* Jqueryname events started */}
      {Jqueryname === "events" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/objects"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/strings"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript events ended */}

      {/*  */}
      {Jqueryname === "strings" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Strings</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/events"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/stringmethod"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

        {/*  */}
        {Jqueryname === "stringmethod" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Methods</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/strings"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/stringsearch"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

       {/*  */}
       {Jqueryname === "stringsearch" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Search</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/stringmethod"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/stringtemplates"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

      {/*  */}
      {Jqueryname === "stringtemplates" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Templates</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/stringsearch"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/numbers"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

       {/*  */}
       {Jqueryname === "numbers" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery Numbers</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/stringtemplates"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/bigint"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}
        {/*  */}
        {Jqueryname === "bigint" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Jquery BigInt</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Jquery/numbers"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Jquery/introduction"}>
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
          are called statements. A Jqueryname program is a list of programming
          statements. Jqueryname statements are composed of: Values, Operators,
          Expressions, Keywords, and Comments. This statement tells the browser
          to write "Hello Dolly." inside an HTML element with Keywords, and
          Comments. This statement tells the browser to write "Hello Dolly."
          inside an HTML element with id="demo":Jqueryname statements are
          composed
          <h2>Lorem Ipsum Headings</h2>
          of: Values, Operators, Expressions, Keywords, and Comments. This
          statement tells the browser to write "Hello Dolly." inside an HTML
          element with id="demo":Jqueryname statements are composed of: Values,
          Operators, Expressions, Keywords, and Comments. This statement tells
          the browser to write "Hello Dolly." inside an HTML element with
          id="demo":
        </p>
      </div>
      {/*  */}
    </div>
  );
};
export default JqueryCompo;
