import React from 'react'
import './App.css';
import UpperNavbar from './components/uppernavbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <UpperNavbar/>}></Route>
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}
library.add(fas);
export default App;
