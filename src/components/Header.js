import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css';

class Header extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return(
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="/lists">Lists</Link>
        </div>
      ) 
    } else {
      return (
        <div>
          <Link to="/signup">Sin Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="header">
        <Link to="/"><img height="20px" width="20px" alt="DoItRight" src="/images/doitright.png" /></Link>
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header);