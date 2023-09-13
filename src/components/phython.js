import React, { useState } from "react";
import img from "../images/logo.jpg";
import { Button } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import NavBarCompo from "./NavBarCompo";

const Phython = () => {
  const [isfocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { phyname } = useParams();

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
        <h5>Phython Tutorials</h5>

        <NavLink to={"/phython/introduction"}>Introduction</NavLink>
         <NavLink to={"/phython/whereto"}>Where to</NavLink>
        <NavLink to={"/phython/output"}>OutPut</NavLink>
        <NavLink to={"/phython/statements"}>Statements</NavLink>
        <NavLink to={"/phython/syntax"}>Syntax</NavLink>
        <NavLink to={"/phython/comments"}>Comments</NavLink>
        <NavLink to={"/phython/variables"}>Variables</NavLink>
        <NavLink to={"/phython/let"}>Let</NavLink>
        <NavLink to={"/phython/const"}>Const</NavLink>
        <NavLink to={"/phython/operators"}>Operators</NavLink>
        <NavLink to={"/phython/arithamatic"}>Arithmatic</NavLink>
        <NavLink to={"/phython/assignment"}>Assignment</NavLink>
        <NavLink to={"/phython/datatypes"}>Data Types</NavLink>
        <NavLink to={"/phython/functions"}>Functions</NavLink>
        <NavLink to={"/phython/objects"}>Objects</NavLink>
        <NavLink to={"/phython/events"}>Events</NavLink>
        <NavLink to={"/phython/strings"}>Strings</NavLink>
        <NavLink to={"/phython/stringmethod"}>String Method</NavLink>
        <NavLink to={"/phython/stringsearch"}>String Search</NavLink>
        <NavLink to={"/phython/stringtemplates"}>String Templates</NavLink>
        <NavLink to={"/phython/numbers"}>Numbers</NavLink>
        <NavLink to={"/phython/bigint"}>BigInt</NavLink>
      </div>
      {/*  */}

      {/* sidebar Ended */}
      {/* phython introduction started */}
      {phyname === "introduction" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>Introduction to Phython</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/introduction"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/whereto"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  phython (JS) is a lightweight interpreted (or just-in-time
                  compiled) programming language with first-class functions.
                  While it is most well-known as the scripting language for Web
                  pages, many non-browser environments also use it, such as
                  Node.js, Apache CouchDB and Adobe Acrobat. phython is a
                  prototype-based, multi-paradigm, single-threaded, dynamic
                  language, supporting object-oriented, imperative, and
                  declarative (e.g. functional programming) styles. phython's
                  dynamic capabilities include runtime object construction,
                  variable parameter lists, function variables, dynamic script
                  creation (via eval), object introspection (via for...in and
                  Object utilities), and source-code recovery (phython
                  functions store their source text and can be retrieved through
                  toString()). phython's dynamic capabilities include runtime
                  object construction, variable parameter lists, function
                  variables, dynamic script creation (via eval), object
                  introspection (via for...in and Object utilities), and
                  source-code recovery (phython functions store their source
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
                  Head over to our Learning Area phython topic if you want to
                  learn phython but have no previous experience with
                  phython or programming. The complete modules available
                  there are as follows:
                </li>
              </ul>
              <h2>phython guide</h2>
              <p>
                phython frameworks are an essential part of modern front-end
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

      {/* phython where to started */}
      {phyname === "whereto" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Functions and Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/introduction"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/output"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A phython function is a block of phython code, that can
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

      {/* phython output to started */}
      {phyname === "output" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Display Possibilitiess</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/whereto"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/statements"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <ul>
                <p>
                  A phython function is a block of phython code, that can
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

      {/* phython statements to started */}
      {phyname === "statements" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Programs</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/output"}>
                <Button>Next</Button>
              </NavLink>
              <NavLink to={"/phython/syntax"}>
                <Button>Next</Button>
              </NavLink>
            </div>

            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A phython program is a
                list of programming statements. phython statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":phython statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":phython statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
            <h2>Semicolons</h2>
            <p>
              Semicolons separate phython statements. Add a semicolon at the
              end of each executable statement: Examples phython ignores
              multiple spaces. You can add white space to your script to make it
              more readable. The following lines are equivalent:phython
              ignores multiple spaces. You can add white space to your script to
              make it more readable. The following lines are
              equivalent:phython ignores multiple spaces. You can add white
              space to your script to make it more readable. The following lines
              are equivalent:
            </p>
          </div>
        </div>
      )}
      {/* whereto ended */}
      {/* phython Syntax to started */}
      {phyname === "syntax" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Syntax</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/output"}>
                <Button>Next</Button>
              </NavLink>
              <NavLink to={"/phython/comments"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A phython program is a
                list of programming statements. phython statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":phython statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":phython statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* phython comments ended */}
      {phyname === "comments" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Comments</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/syntax"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/variables"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A phython program is a
                list of programming statements. phython statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":phython statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":phython statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* phython variables ended */}
      {phyname === "variables" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Variables</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/comments"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/let"}>
                <Button>Next</Button>
              </NavLink>
            </div>
            <div>
              <p>
                A computer program is a list of "instructions" to be "executed"
                by a computer. In a programming language, these programming
                instructions are called statements. A phython program is a
                list of programming statements. phython statements are
                composed of: Values, Operators, Expressions, Keywords, and
                Comments. This statement tells the browser to write "Hello
                Dolly." inside an HTML element with Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":phython statements are composed
                <h2>Lorem Ipsum Headings</h2>
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":phython statements are composed
                of: Values, Operators, Expressions, Keywords, and Comments. This
                statement tells the browser to write "Hello Dolly." inside an
                HTML element with id="demo":
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* phython let started */}
      {phyname === "let" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Let</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/variables"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/const"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* phython const started */}
      {phyname === "const" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/operators"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}

      {/* phython const started */}
      {phyname === "operators" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Const</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/let"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/arithamatic"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript comments ended */}
      {/* phython arithmatic started */}
      {phyname === "arithamatic" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Arithmatic</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/operators"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/assignment"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* phython assigment started */}
      {phyname === "assignment" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Assignment</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/arithmatic"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/datatypes"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript arithmatic ended */}

      {/* phython datatypes started */}
      {phyname === "datatypes" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Data Types</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/assignment"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/functions"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* phython datatypes started */}
      {phyname === "functions" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Functions</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/datatypes"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/objects"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* phython objects started */}
      {phyname === "objects" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Objects</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/functions"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/events"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript dattypes ended */}

      {/* phython events started */}
      {phyname === "events" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Events</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/objects"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/strings"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* Javscript events ended */}

      {/*  */}
      {phyname === "strings" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Strings</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/events"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/stringmethod"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

        {/*  */}
        {phyname === "stringmethod" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Methods</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/strings"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/stringsearch"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

       {/*  */}
       {phyname === "stringsearch" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Search</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/stringmethod"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/stringtemplates"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

      {/*  */}
      {phyname === "stringtemplates" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Templates</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/stringsearch"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/numbers"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}

       {/*  */}
       {phyname === "numbers" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython Numbers</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/stringtemplates"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/bigint"}>
                <Button>Next</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/*  */}
        {/*  */}
        {phyname === "bigint" && (
        <div className="html_wrapper_page">
          <div className="html_details_page_header">
            <h1>phython BigInt</h1>

            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
                marginLeft: "30px",
              }}
            >
              <NavLink to={"/phython/numbers"}>
                <Button>Back</Button>
              </NavLink>
              <NavLink to={"/phython/introduction"}>
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
          are called statements. A phython program is a list of programming
          statements. phython statements are composed of: Values, Operators,
          Expressions, Keywords, and Comments. This statement tells the browser
          to write "Hello Dolly." inside an HTML element with Keywords, and
          Comments. This statement tells the browser to write "Hello Dolly."
          inside an HTML element with id="demo":phython statements are
          composed
          <h2>Lorem Ipsum Headings</h2>
          of: Values, Operators, Expressions, Keywords, and Comments. This
          statement tells the browser to write "Hello Dolly." inside an HTML
          element with id="demo":phython statements are composed of: Values,
          Operators, Expressions, Keywords, and Comments. This statement tells
          the browser to write "Hello Dolly." inside an HTML element with
          id="demo":
        </p>
      </div>
      {/*  */}
      
    </div>
  );
};
export default Phython;
