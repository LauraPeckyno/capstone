import { useState } from 'react';
import * as usersService from '../utilities/users-service';
import { login } from '../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      console.log("Attempting login with:", credentials); // Log the credentials
      const user = await usersService.login(credentials);
      console.log("Login successful, user:", user); // Log the user
      setUser(user);
    } catch (error) {
      console.error("Login failed:", error); // Log the error
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <h1>Log In Form</h1>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input 
            type="text" 
            name="email" 
            value={credentials.email} 
            onChange={handleChange} 
            required 
          />
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            value={credentials.password} 
            onChange={handleChange} 
            required 
          />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}