import * as usersAPI from "./users-api";

export function checkToken() {
  return usersAPI.checkToken().then((dateStr) => new Date(dateStr));
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  console.log('JWT Token:', token);  // Check if the token is being returned
  localStorage.setItem('token', token);
  const user = getUser(token);  // Fetch user using the token directly
  return user;
}

export async function signUp(userData) {
  try {
    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token); // Store the token in localStorage
    const user = getUser(); // Decode the user from the token
    console.log('Decoded User:', user); // Log the decoded user
    return user;
  } catch (error) {
    console.error("Sign Up Error:", error); // Log error for debugging
    throw error; // Re-throw the error to be handled in the calling component
  }
}

export function getToken() {
  const token = localStorage.getItem("token");
  console.log("Token:", token);
  if (!token) return null;
  const payload = JSON.parse(atob(token.split(".")[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken(); // Retrieve the JWT from localStorage
  return token ? JSON.parse(atob(token.split(".")[1])).user : null; // Decode and return the user
}

export async function logout() {
  localStorage.removeItem("token");
}