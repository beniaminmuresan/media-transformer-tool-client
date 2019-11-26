import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Header extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return(
        <div>
          <Link to="/dashboard">Dashboard</Link>
          <Button href="signout" variant="contained" color="secondary">Sign Out</Button>
        </div>
      ) 
    }
  }

  render() {
    return (
      <div className="header">
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header);