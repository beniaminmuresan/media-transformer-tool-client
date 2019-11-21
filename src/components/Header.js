import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">DoItRight</Link>
        <Link to="/signup">Sin Up</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signout">Sign Out</Link>
      </div>
    );
  }
}

export default Header;