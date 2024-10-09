Jsx
import React from 'react';
import Profile from './Profile';
import SignUpForm from './SignUpForm'; // Import SignUpForm
import { logout } from '../utilities/users-service';

function UserPage({ user }) {
  const handleLogout = async () => {
    try {
      await logout();
      // Redirect to login page
    } catch (error) {
      // Handle error
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
        <SignUpForm /> // Render SignUpForm if no user
      )}
    </div>
  );
}

export default UserPage;