import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import SignUp from './component/SignUp/SignUp';
import SignIn from './component/SignIn/SignIn';
import Report from './component/Report/Report';
import Activity from './component/Activity/Activity';

const Routes = () => {
  return (
      <Switch>
          <Route path="/" component = {SignUp} exact/> 
          <Route path="/signup" component = {SignUp}/> 
          <Route path="/signin" component = {SignIn}/>
          <Route path="/report" component = {Report}/>
          <Route path="/activity" component = {Activity}/>
      </Switch>
  );
};

export default Routes;