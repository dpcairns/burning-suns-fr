import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import SignInPage from './signInPage';
import SignUpPage from './signUpPage';
import DetailPage from './DetailPage';
import SearchPage from './SearchPage';
import StarredListPage from './StarredListPage';
import PrivateRoute from './PrivateRoute.js';
import Header from "./Header";


// import { render } from "@testing-library/react";

export default class App extends Component{
  state = {
    token: ''
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

          <Route path="/SignInPage" render={(routerProps) => 
          <SignInPage handleUserChange={this.handleUserChange} {...routerProps} />}
          />

          <Route path="/SignUpPage" render={(routerProps) =>
            <SignUpPage handleUserChange={this.handleUserChange} {...routerProps} />}
          /> 

          <Route path="/SearchPage" render={(routerProps) => 
          <SearchPage {...routerProps} />} 
          />

          <Route path="/DetailPage/:city" render={(routerProps) => 
          <DetailPage {...routerProps} />} 
          />

          <Route path="/StarredListPage" render={(routerProps) => 
          <StarredListPage {...routerProps} />} 
          />

         </Switch>
    </Router>
  );
}
}