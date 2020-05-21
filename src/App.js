import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import SignInPage from './signInPage';
import SignUpPage from './signUpPage';
import DetailPage from './DetailPage';
import SearchPage from './SearchPage';
import StarredListPage from './StarredListPage';
import PrivateRoute from './PrivateRoute.js';
import Header from "./Header";
import AboutUs from './aboutUs';
import Calendar from './Calendar';

// import { render } from "@testing-library/react";

export default class App extends Component{
  state = {
    token: localStorage.getItem('TOKEN'),
  }

  handleUserChange = (newToken) => {
    this.setState({ token: newToken })
    localStorage.setItem('TOKEN', newToken)
  }
  
  render() {
    return (
      <Router>
        <Header token={this.state.token} handleUserChange={this.handleUserChange}/>
        <Switch>
        <Route exact path="/" render={(routerProps) => 
          < Redirect to="/SearchPage" />}
          />
          <Route path="/SignInPage" render={(routerProps) => 
          <SignInPage handleUserChange={this.handleUserChange} {...routerProps} />}
          />

          <Route path="/SignUpPage" render={(routerProps) =>
            <SignUpPage handleUserChange={this.handleUserChange} {...routerProps} />}
          /> 
      <Route path="/Calendar" render={(routerProps) => 
          <Calendar {...routerProps} />} 
          />

          <PrivateRoute path="/SearchPage" token = {this.state.token} render={(routerProps) => 
          <SearchPage {...routerProps} />} 
          />

          <PrivateRoute path="/DetailPage/:city" token = {this.state.token}render={(routerProps) => 
          <DetailPage {...routerProps} />} 
          />

          <PrivateRoute path="/StarredListPage" token = {this.state.token} render={(routerProps) => 
          <StarredListPage {...routerProps} />} 
          />
          <Route path="/abutUs" render={(routerProps) => 
          <AboutUs {...routerProps} />} 
          />


         </Switch>
    </Router>
  );
}
}
