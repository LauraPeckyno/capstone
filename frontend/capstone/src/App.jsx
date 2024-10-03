import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Groceries from "./components/Groceries";
import Healthcare from "./components/Healthcare";
import Index from "./components/Index";
import Misc from "./components/Misc";
import Restaurants from "./components/Restaurants";
import Shopping from "./components/Shopping";
import Telecommunications from "./components/Telecommunications";
import Transportation from "./components/Transportation";
import Travel from "./components/Travel";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';


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
      <Router>
    <Navbar />
    <AppRoutes />
     </Router>
    </div>
  );
}

export default App;
