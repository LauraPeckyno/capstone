import React, { useState, useEffect } from "react";
import axios from "axios";
import Featured from "./Featured";
import Discounts from "./Discounts";

// for the travel cateogry
function Travel() {
  const [discounts, setDiscounts] = useState([]);
  const category = "travel";

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
        <div className="imageContainerTravel"></div>
        <h1>Travel</h1>
        <p>
          We've scoured the web to find the best SENIOR DISCOUNTS for you!
          Here are some of our favorite TRAVEL DISCOUNTS.
        </p>
        <Featured category="travel" featured="true" />
        <Discounts category="travel" />
      </div>
    </>
  );
}

export default Travel;
