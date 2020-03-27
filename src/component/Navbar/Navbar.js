import React from "react";
import "antd/dist/antd.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import logoutUser from "../../Redux/actions";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const isAuthenticated = ()=>{
    console.log()
    dispatch(logoutUser)
  }
  // dispatch(logoutUser)

  // const value = sessionStorage.getItem("jwt");

  return (
    <div>
      <Navbar color="light" light expand="md">
        {!isAuthenticated ? (
          <Nav>
            <NavbarBrand href="/signin">
              Hello : {localStorage.getItem("username")}
            </NavbarBrand>
            <NavItem>
              <Link to="/signup">SignUp</Link>
            </NavItem>
            <NavItem ><Button onClick = {()=>{isAuthenticated()}}>Logout</Button></NavItem>
          </Nav>
        ) : null}

        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/signup">SignUp</Link>
            </NavItem>
            &nbsp;&nbsp;&nbsp;
            <NavItem>
              <Link to="/signin">SignIn</Link>
            </NavItem>
            &nbsp;&nbsp;&nbsp;
            {/* <NavItem>
              <Link to="/activity">Activity</Link>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default NavbarComponent;

//so what i want from navbar
/*
navbar should show title,signup and signIn 
upon signingin successfully 
navbar should show title,user-message and logout
*/
