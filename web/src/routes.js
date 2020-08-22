import React from 'react';
import { Switch, Redirect, BrowserRouter, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

const Routes = () => {
  //const isLoggedIn = (localStorage.getItem("hash")) ? JSON.parse(localStorage.getItem("hash")) : false;
  const isLoggedIn = false;

  return (!isLoggedIn) ? 
  (
  <BrowserRouter>
    <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/sign-in"} component={SignIn}/>
        <Route exact path={process.env.PUBLIC_URL + "/sign-up"} component={SignUp}/>
        <Redirect to="/sign-in"/>
    </Switch>
  </BrowserRouter>

  ) 
    : (
      <BrowserRouter >
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Landing}/>
        <Route exact path={process.env.PUBLIC_URL + "/not-found"} component={NotFound}/>
        <Redirect to="/not-found" />
      </Switch>
      </BrowserRouter >

    );
};

export default Routes;