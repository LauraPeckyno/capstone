import React, { Component } from 'react';
import { signUp, logout } from '../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
    success: false,
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: '',
    });
  };

  handleLogout = async () => {
    try {
      await logout();
      this.setState({ success: false }); // Reset success state
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.setState({ success: true }); // Set success state
    } catch (error) {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;

    if (this.state.success) {
      return (
        <div>
          <h1>Sign Up Successful!</h1>
          <p>Welcome to our community!</p>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    }

    return (
      // Signup form
      <div>
        <h1>Sign Up</h1>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          {/* Form fields */}
        </form>
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
      </div>
    );
  }
}