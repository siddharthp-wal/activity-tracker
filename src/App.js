import React, { useState } from "react";
import "antd/dist/antd.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SignUp from "./component/SignUp/SignUp";
import SignIn from "./component/SignIn/SignIn";
import Report from "./component/Report/Report";
import Activity from "./component/Activity/Activity"

const App = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  if (sessionStorage.getItem("jwt")) {
    console.log("token recieved");
    return (
      <div>
        <Router>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/sign">
              Hello : {localStorage.getItem("username")}
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link to="/signup">LogOut</Link>
                </NavItem>
                &nbsp;&nbsp;&nbsp;
                <NavItem>
                  <Link to="/activity">Activity</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/report">
              <Report />
            </Route>
            <Route path="/activity">
              <Activity/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
  return (
    <div>
      <Router>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Activity Tracker</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/signup">SignUp</Link>
              </NavItem>
              &nbsp;&nbsp;&nbsp;
              <NavItem>
                <Link to="/signin">SignIn</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
