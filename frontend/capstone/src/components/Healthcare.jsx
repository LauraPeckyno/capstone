import React, { useState, useEffect } from "react";
import axios from "axios";
import Featured from "./Featured";
import Discounts from "./Discounts";

// for the healthcare category
function Healthcare() {
  const [discounts, setDiscounts] = useState([]);
  const category = "healthcare";

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
        <div className="imageContainerHealthcare"></div>
        <h1>Healthcare</h1>
        <p>
          We've scoured the web to find the best SENIOR DISCOUNTS for you!
          Here are some of our favorite HEALTHCARE DISCOUNTS.
        </p>
        <Featured category="healthcare" featured="true" />
        <Discounts category="healthcare" />
      </div>
    </>
  );
}

export default Healthcare;
