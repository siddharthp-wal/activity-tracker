// import React from 'react';
// // import SignUp from './component/SignUp/Index';
// import './App.css';
// import 'antd/dist/antd.css';
// import { Menu} from 'antd';
// import {Router, Switch ,Link, Route} from 'react-router-dom';
// // import SignUp from './component/SignUp/SignUp'

// class App extends React.Component {
//   state = {
//     current: 'mail',
//   };

//   handleClick = e => {
//     console.log('click ', e);
//     this.setState({
//       current: e.key,
//     });
//   };

//   render() {
//     return (
//     <div className="App">
//       <Router>
//       <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
//         <Menu.Item >
//         <Link to="/signup">Signup</Link>
//         </Menu.Item>
//         <Menu.Item key="app">
//          SignIn
//         </Menu.Item>
//       </Menu>
//         <div>
          
//         </div>
//         <Switch>
//           <Route path="/signup">
//             {/* component */}
//             {/* <SignUp/> */}
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//     );
//   }
// }

// export default App;
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from './component/SignUp/SignUp'

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Router>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Activity Tracker</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {/* <NavLink href="/components/"></NavLink> */}
            </NavItem>
            <NavItem>
              <Link to="/signup">SignUp</Link>
              {/* <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      
        <Switch>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;