import React from "react";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/welcome" component={Welcome} />
      </Switch>
    </>
  );
};

export default App;
