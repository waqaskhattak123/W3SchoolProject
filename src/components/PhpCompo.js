import React, { useState } from "react";
import { Button, Navbar } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import NavBarCompo from "./NavBarCompo";

const PhpCompo = () => {
  const [isfocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { Phpname } = useParams();

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
        <h5>Php Tutorials</h5>

        <NavLink to={"/Php/introduction"}>Introduction</NavLink>
         <NavLink to={"/Php/whereto"}>Where to</NavLink>
        <NavLink to={"/Php/output"}>OutPut</NavLink>
        <NavLink to={"/Php/statements"}>Statements</NavLink>
        <NavLink to={"/Php/syntax"}>Syntax</NavLink>
        <NavLink to={"/Php/comments"}>Comments</NavLink>
        <NavLink to={"/Php/variables"}>Variables</NavLink>
        <NavLink to={"/Php/let"}>Let</NavLink>
        <NavLink to={"/Php/const"}>Const</NavLink>
        <NavLink to={"/Php/operators"}>Operators</NavLink>
        <NavLink to={"/Php/arithamatic"}>Arithmatic</NavLink>
        <NavLink to={"/Php/assignment"}>Assignment</NavLink>
        <NavLink to={"/Php/datatypes"}>Data Types</NavLink>
        <NavLink to={"/Php/functions"}>Functions</NavLink>
        <NavLink to={"/Php/objects"}>Objects</NavLink>
        <NavLink to={"/Php/events"}>Events</NavLink>
        <NavLink to={"/Php/strings"}>Strings</NavLink>
        <NavLink to={"/Php/stringmethod"}>String Method</NavLink>
        <NavLink to={"/Php/stringsearch"}>String Search</NavLink>
        <NavLink to={"/Php/stringtemplates"}>String Templates</NavLink>
        <NavLink to={"/Php/numbers"}>Numbers</NavLink>
        <NavLink to={"/Php/bigint"}>BigInt</NavLink>
      </div>
      {/*  */}

      {/* sidebar Ended */}
      {/* Phpname introduction started */}
      {Phpname === "introduction" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Introduction to Php</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/introduction"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/whereto"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  Phpname (JS) is a lightweight interpreted (or just-in-time
                  compiled) programming language with first-class functions.
                  While it is most well-known as the scripting language for Web
                  pages, many non-browser environments also use it, such as
                  Node.js, Apache CouchDB and Adobe Acrobat. Phpname is a
                  prototype-based, multi-paradigm, single-threaded, dynamic
                  language, supporting object-oriented, imperative, and
                  declarative (e.g. functional programming) styles. Phpname's
                  dynamic capabilities include runtime object construction,
                  variable parameter lists, function variables, dynamic script
                  creation (via eval), object introspection (via for...in and
                  Object utilities), and source-code recovery (Phpname
                  functions store their source text and can be retrieved through
                  toString()). Phpname's dynamic capabilities include runtime
                  object construction, variable parameter lists, function
                  variables, dynamic script creation (via eval), object
                  introspection (via for...in and Object utilities), and
                  source-code recovery (Phpname functions store their source
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
                  Head over to our Learning Area Phpname topic if you want to
                  learn Phpname but have no previous experience with
                  Phpname or programming. The complete modules available
                  there are as follows:
                </li>
              </ul>
              <h2>Phpname guide</h2>
              <p>
                Phpname frameworks are an essential part of modern front-end
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

      {/* Phpname where to started */}
      {Phpname === "whereto" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Functions and Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/introduction"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/output"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A Phpname function is a block of Phpname code, that can
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

      {/* Phpname output to started */}
      {Phpname === "output" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Display Possibilitiess</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/whereto"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/statements"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A Phpname function is a block of Phpname code, that can
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

      {/* Phpname statements to started */}
      {Phpname === "statements" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Programs</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/output"}>
                <Button>Next</Button>
              </NavLink>
              <NavLink to={"/Php/syntax"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A Phpname program is a
                list of programming statements. Phpname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Phpname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Phpname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
            <h2>Semicolons</h2>
            <p>
              Semicolons separate Phpname statements. Add a semicolon at the
              end of each executable statement: Examples Phpname ignores
              multiple spaces. You can add white space to your script to make it
              more readable. The following lines are equivalent:Phpname
              ignores multiple spaces. You can add white space to your script to
              make it more readable. The following lines are
              equivalent:Phpname ignores multiple spaces. You can add white
              space to your script to make it more readable. The following lines
              are equivalent:
            </p>
          </div>
        </div>
      )}
      {/* whereto ended */}
      {/* Phpname Syntax to started */}
      {Phpname === "syntax" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Syntax</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/output"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/comments"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A Phpname program is a
                list of programming statements. Phpname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Phpname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Phpname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Phpname comments ended */}
      {Phpname === "comments" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Comments</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/syntax"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/variables"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A Phpname program is a
                list of programming statements. Phpname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Phpname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Phpname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* Phpname variables ended */}
      {Phpname === "variables" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Variables</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/comments"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/let"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A Phpname program is a
                list of programming statements. Phpname statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Phpname statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":Phpname statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* Phpname let started */}
      {Phpname === "let" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Let</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/variables"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/const"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* Phpname const started */}
      {Phpname === "const" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/operators"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* Phpname const started */}
      {Phpname === "operators" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/arithamatic"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}
      {/* Phpname arithmatic started */}
      {Phpname === "arithamatic" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Arithmatic</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/operators"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/assignment"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* Phpname assigment started */}
      {Phpname === "assignment" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Assignment</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/arithmatic"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/datatypes"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* Phpname datatypes started */}
      {Phpname === "datatypes" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Data Types</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/assignment"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/functions"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* Phpname datatypes started */}
      {Phpname === "functions" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Functions</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/datatypes"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/objects"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* Phpname objects started */}
      {Phpname === "objects" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Objects</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/functions"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/events"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* Phpname events started */}
      {Phpname === "events" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/objects"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/strings"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript events ended */}

      {/*  */}
      {Phpname === "strings" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Strings</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/events"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/stringmethod"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

        {/*  */}
        {Phpname === "stringmethod" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Methods</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/strings"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/stringsearch"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

       {/*  */}
       {Phpname === "stringsearch" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Search</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/stringmethod"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/stringtemplates"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

      {/*  */}
      {Phpname === "stringtemplates" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Templates</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/stringsearch"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/numbers"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

       {/*  */}
       {Phpname === "numbers" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php Numbers</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/stringtemplates"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/bigint"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}
        {/*  */}
        {Phpname === "bigint" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Php BigInt</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/Php/numbers"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/Php/introduction"}>
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
          are called statements. A Phpname program is a list of programming
          statements. Phpname statements are composed of: Values, Operators,
          Expressions, Keywords, and Comments. This statement tells the browser
          to write "Hello Dolly." inside an HTML element with Keywords, and
          Comments. This statement tells the browser to write "Hello Dolly."
          inside an HTML element with id="demo":Phpname statements are
          composed
          <h2>Lorem Ipsum Headings</h2>
          of: Values, Operators, Expressions, Keywords, and Comments. This
          statement tells the browser to write "Hello Dolly." inside an HTML
          element with id="demo":Phpname statements are composed of: Values,
          Operators, Expressions, Keywords, and Comments. This statement tells
          the browser to write "Hello Dolly." inside an HTML element with
          id="demo":
        </p>
      </div>
      {/*  */}
    </div>
  );
};
export default PhpCompo;
