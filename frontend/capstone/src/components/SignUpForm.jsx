import React, { useState } from 'react';
import { signUp } from '../utilities/users-service';

export default function SignUpForm({ setUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (evt) => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'email':
        setEmail(evt.target.value);
        break;
      case 'password':
        setPassword(evt.target.value);
        break;
      case 'confirm':
        setConfirm(evt.target.value);
        break;
      default:
        break;
    }
    setError('');
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }

    try {
      const userData = await signUp({ name, email, password });
      setUser(userData);
      setSuccess(true);
    } catch (error) {
      console.error('Signup error:', error);
      setError('Signup failed - Please try again');
    }
  };

  if (success) {
    return (
      <div>
        <h1>Sign Up Successful!</h1>
        <p>Welcome to our community!</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <label>Confirm</label>
        <input
          type="password"
          name="confirm"
          value={confirm}
          onChange={handleChange}
          required
        />
        <button type="submit">SIGN UP</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}