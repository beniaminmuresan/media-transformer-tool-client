import React, { Component } from 'react';
import requireAuth from './requireAuth';
import FileUpload from './upload/FileUpload';

class Dashboard extends Component {
  render() {
    return (
      <FileUpload/>
    )
  }
}
export default requireAuth(Dashboard);
