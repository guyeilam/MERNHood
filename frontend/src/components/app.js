import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import "../styles/reset.css";
import "./main.css";

import MainPage from "./main/main_page";
import HomePage from "./home/home_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeatherAlt, faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faFeatherAlt, faSearch);

const App = () => (
  <>
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <ProtectedRoute exact path="/home" component={HomePage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </>
);

export default App;
