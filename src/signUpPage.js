
import React, {Component} from 'react';
import Link from '@material-ui/core/Link';
import Login from './LogInForm'

export default class SignUpPage extends Component{
  render() {
    return(
      <div>
        <Login
          url={'https://stark-mesa-84010.herokuapp.com/auth/signup'}
        handleUserChange={this.props.handleUserChange}
        title={'Sign Up'}
        link={
        <Link href="/signInPage" variant="body2">
        {"If you do have an acount Sign In"}
      </Link>}

        />
      </div>
    );
  }
}
