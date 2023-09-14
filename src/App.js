import React, { useState } from "react";
import "./App.css";
import UpperNavbar from "./components/uppernavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import "bootstrap/dist/css/bootstrap.min.css";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Details from "./components/Details";
import Cssdetails from "./components/cssdetails";
import Rwd from "./components/rwd";
import BootstrapeComponent from "./components/bootstrape";
import Frontendprog from "./components/frontendprog";
import LearnJavaScipt from "./components/learnjavascript";
import Phython from "./components/phython";
import SqlComponent from "./components/Sql";
import PhpCompo from "./components/PhpCompo";
import JqueryCompo from "./components/JqueryCompo";
import JavaCompo from "./components/JavaCompo";
import Cplusplus from "./components/Cplusplus";
import ReactCompo from "./components/ReactCompo";
import NavBarCompo from "./components/NavBarCompo";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const [isfocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
 
  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleBlur = () => {
    setIsFocus(false);
  };
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UpperNavbar />}></Route>
          <Route path="/Html/:htmlname" element={<Details />}></Route>
          <Route path="/cssdetails/:name" element={<Cssdetails />}></Route>
          <Route path="/rwddetails/:name" element={<Rwd />}></Route>
          <Route
            path="/BootstrapeComponentdetails/:name"
            element={<BootstrapeComponent />}
          ></Route>
          <Route path="/frontendprog/:name" element={<Frontendprog />}></Route>
          <Route
            path="/learnJavaScript/:name"
            element={<LearnJavaScipt />}
          ></Route>
          <Route path="/phython/:phyname" element={<Phython />}></Route>
          <Route path="/sql/:sqlname" element={<SqlComponent />}></Route>
          <Route path="/Php/:Phpname" element={<PhpCompo />}></Route>
          <Route path="/Jquery/:Jqueryname" element={<JqueryCompo />}></Route>
          <Route path="/Java/:Javaname" element={<JavaCompo />}></Route>
          <Route path="/C++/:cplusplus" element={<Cplusplus />}></Route>
          <Route path="/react/:reactname" element={<ReactCompo />}></Route>
          <Route path="/navbarcompo/" element={<NavBarCompo />}></Route>
          <Route path="/login/" element={<Login />}></Route>
          <Route path="/signup/" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
library.add(fas);
export default App;
