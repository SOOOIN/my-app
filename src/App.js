import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./header";
import HomePage from "./pages/home";
import formPage from "./pages/form";
import ErrorPage from "./pages/error";
import {ApplicationContextProvider} from './application-context';

function App() {
  return (
    <ApplicationContextProvider font={40}>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/form" component={formPage}/>
        <Route component={ErrorPage}/>
      </Switch>
    </Router>
    </ApplicationContextProvider>
  )
}

export default App;
