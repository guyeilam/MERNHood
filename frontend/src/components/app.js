import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import './reset.css';
import './main.css';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ComponentLibrary from './library/showcase';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faFeatherAlt)

const App = () => (
  <div>
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/components" component={ComponentLibrary} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
