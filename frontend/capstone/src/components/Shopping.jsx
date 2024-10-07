import React, { useState, useEffect } from "react";
import axios from "axios";
import Featured from "./Featured";
import Discounts from "./Discounts";

 // for the shopping category
function Shopping() {
  const [discounts, setDiscounts] = useState([]);
  const category = "shopping";

   // getting the data by category from the database
  useEffect(() => {
    axios
      .get(`http://localhost:3000/discounts/category/${category}`)
      .then((response) => {
        console.log(response.data); // Verify API response
        setDiscounts(response.data.discounts); // Set the discounts from response
      })
      .catch((error) => {
        console.error("Error fetching discounts:", error);
      });
  }, []);

  return (
    <>
      <div className="outerContainer">
        <div className="imageContainerShopping"> </div>

        <h1>Shopping</h1>

        <p>
          We've scoured the web to find the best SENIOR DISCOUNTS for you!
          Select a category to see a list of discounts available.
        </p>
        <Featured category="shopping" featured="true" />
        <Discounts category="shopping" />
      </div>
    </>
  );
}

export default Shopping;
