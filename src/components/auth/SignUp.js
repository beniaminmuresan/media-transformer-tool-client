import React, { Component } from 'react';
import { fileURLToPath } from 'url';

class SignUp extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <label>Email</label>
        </fieldset>
        <fieldset>
          <label>Password</label>
        </fieldset>
      </form>
    );
  }
};

export default SignUp;