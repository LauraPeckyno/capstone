import React, { useState } from 'react'; // Add useState import
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

export default function AuthPage({ setUser }) { // Receive setUser here
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
    {showLogin ? (
      <LoginForm setUser={setUser} /> // Pass setUser to LoginForm
    ) : (
      <SignUpForm setUser={setUser} /> // Pass setUser to SignUpForm
    )}
  </div>
  );
}