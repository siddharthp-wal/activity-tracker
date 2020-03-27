import React from "react";
import Routes from "./routes";
import NavbarComponent from './component/Navbar/Navbar'
import { BrowserRouter as Router } from "react-router-dom";

const App = props => {
  return (
   <Router>
     <NavbarComponent/>
     <Routes/>
   </Router>
  );
};

export default App;
