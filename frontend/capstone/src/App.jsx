import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from 'react-helmet';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import Footer from "./components/Footer";


function App() {

  // -------------------------------
  const [discount, setDiscount] = useState([]);


  // -------------------------------------[READ]
  const readDiscount = async () => {
    try {
      //  1.Make Request
      const response = await axios.get("http://localhost:3000/notes");
      const info = await response.data;
      // 2. Save as State
      await setDiscount(info.discounts);
      console.log("Discounts FETCHED");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="App">
            <Helmet>
        <meta property="og:image" content="./money.jpg" />
      </Helmet>
      <Router>
    <Navbar />
    <AppRoutes />
     </Router>
     <Footer />
    </div>
  );
}

export default App;
