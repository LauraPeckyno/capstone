import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import { logout } from '../utilities/users-service';
import UserContext from './UserContext';
import { UserProvider } from './UserContext';
import AuthPage from './AuthPage';

function UserPage() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate(); // Initialize navigate hook

  // If user is null, redirect to the AuthPage for sign-up
  useEffect(() => {
    if (!user) {
      navigate("/authpage"); // Redirect to the AuthPage for login/sign-up
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      navigate("/authpage"); // Redirect to AuthPage on logout
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <Profile user={user} />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default UserPage;
