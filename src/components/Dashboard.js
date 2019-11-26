import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Dashboard extends Component {
  render() {
    return (
      <div className="lists-container">
        Here's the lists from your friends
      </div>
    )
  }
}
export default requireAuth(Dashboard);
