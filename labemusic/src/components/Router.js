import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login/Login";

const Router = (props) => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {"/login"}>
          <Login />
        </Route>
        <Route exact path = {"/signup"}>
          <p>Signup</p>
        </Route> 
        <Route exact path = {"/musics"}>
          <p>Musics</p>
        </Route>
      </Switch>
    </BrowserRouter>
  )

}

export default Router;
