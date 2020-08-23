import React, {useContext} from 'react';
import { Switch, Redirect, BrowserRouter, Route } from 'react-router-dom';
import {UserContext} from './providers/UserProvider';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

const Routes = () => {
  const {user} = useContext(UserContext);

  return (
    <BrowserRouter>
      <Switch>
        {!user ? 
        <>
          <Route exact path={process.env.PUBLIC_URL + "/sign-in"} component={SignIn}/>
          <Route exact path={process.env.PUBLIC_URL + "/sign-up"} component={SignUp}/>
          <Redirect to="/sign-in"/>
        </>
          :
          <>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Landing}/>
            <Route exact path={process.env.PUBLIC_URL + "/not-found"} component={NotFound}/>
            <Redirect to="/"/>
            </>
        }
      </Switch>
    </BrowserRouter>
)
  
};

export default Routes;