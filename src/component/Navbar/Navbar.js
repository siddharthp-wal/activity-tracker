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
import { useDispatch,useSelector } from "react-redux";
// import logoutUser from "../../Redux/actions";

const NavbarComponent = () => {
  const isAuth  = useSelector(state => state.isAuthenticated)
  const dispatch = useDispatch();

  const isAuthenticated = ()=>(
    ()=>dispatch({type:'CLEAR_USER'},[dispatch])
  )
    // dispatch({type:'CLEAR_USER'})
    // console.log(dispatch({type:'CLEAR_USER'}))
  
  // dispatch(logoutUser)

  // const value = sessionStorage.getItem("jwt");

  return (
    <div>
      <Navbar color="light" light expand="md">
        {isAuth ? (
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
