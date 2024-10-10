import React from "react";
import * as userService from '../utilities/users-service'
import { UserProvider } from "./UserContext";

function Profile({ user }) {
  if (!user) {
    return <div>Loading...</div>; // or some fallback UI
  }

  return (
    <div>

      <h1>Welcome, {user.name}!</h1>

    </div>
  );
};

export default Profile;
