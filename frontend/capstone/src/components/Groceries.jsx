import React, { useState, useEffect } from "react";
import axios from "axios";
import Featured from "./Featured";
import Discounts from "./Discounts";

 // getting the data by category from the database
function Groceries() {
  const [discounts, setDiscounts] = useState([]);
  const category = "groceries";

  // gets the groceries data and feeds it into the discount grid
  useEffect(() => {
    axios
      .get(`http://localhost:3000/discounts/category/${category}`)
      .then((response) => {
        console.log(response.data); // Verifying API response
        setDiscounts(response.data.discounts); // Setting the discounts from response
      })
      .catch((error) => {
        console.error("Error fetching discounts:", error);
      });
  }, []);

  return (
    <>
      <div className="outerContainer">
        <div className="imageContainerGroceries"></div>
        <h1>Groceries</h1>
        <p>
          We've scoured the web to find the best SENIOR DISCOUNTS for you! Here are some of our favorite GROCERY DISCOUNTS.
        </p>
        <Featured category="groceries" featured="true" />
        <Discounts category="groceries" />
      </div>
    </>
  );
}

export default Groceries;
