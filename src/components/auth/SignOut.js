import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SignIn from '../../components/auth/SignIn'

class SignOut extends Component {
  componentDidMount() {
    this.props.history.push('/');
    this.props.signout();
  }

  render() {
    return <div><SignIn /></div>;
  }
}

export default connect(null, actions)(SignOut);