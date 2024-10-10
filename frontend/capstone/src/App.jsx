import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet"; // to set a featured image for the site
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import Footer from "./components/Footer";
import { getUser } from "./utilities/users-service";
import UserPage from "./components/UserPage";
import { UserProvider } from "./components/UserContext"; // Import UserProvider

function App() {
  // -------------------------------
  const [discount, setDiscount] = useState([]);
  const [user, setUser] = useState(null);
  // -------------------------------------[READ]
  const readDiscount = async () => {
    try {
      //  1.Make Request
      const response = await axios.get("http://localhost:3000/discounts");
      const info = await response.data;
      // 2. Save as State
      await setDiscount(info.discounts);
      console.log("Discounts FETCHED");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      const storedUser = await getUser(); // Check for stored user after app loads
      setUser(storedUser);
    };
    checkUser();
  }, []); // Empty dependency array to run only once on component mount

  const handleLogin = async (credentials) => {
    try {
      const loggedInUser = await usersService.login(credentials);
      setUser(loggedInUser);
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  const handleLogout = async () => {
    await usersService.logOut();
    setUser(null);
  };

  const isProtected = (path) => path !== "/authpage" && path !== "/userpage"; // Adjust as needed

  return (
    <div className="App">
      <UserProvider>
        <Helmet>
          <meta property="og:image" content="./money.png" />
        </Helmet>
        <Router>
          <Navbar />
          <AppRoutes />
          <Footer />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
