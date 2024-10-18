import React, { useState, useEffect } from "react";
import axios from "axios";
import Featured from "./Featured";
import Discounts from "./Discounts";

 // for the transportation category
function Transportation() {
  const [discounts, setDiscounts] = useState([]);
  const category = "transportation";

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
        <div className="imageContainerTransportation"></div>
        <h1>Transportation</h1>
        <p>
          We've scoured the web to find the best SENIOR DISCOUNTS for you!
          Here are some of our favorite TRANSPORTATION DISCOUNTS.
        </p>
        <Featured category="transportation" featured="true" />
        <Discounts category="transportation" />
      </div>
    </>
  );
}

export default Transportation;
