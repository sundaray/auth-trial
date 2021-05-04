import React from "react";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Welcome from "./components/Welcome";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <PrivateRoute path="/welcome">
          <Welcome />
        </PrivateRoute>
      </Switch>
    </>
  );
};

export default App;
