import React, { useState, useEffect } from "react";
import axios from "axios";
import Featured from "./Featured";
import Discounts from "./Discounts";

function Travel() {
  const [discounts, setDiscounts] = useState([]);
  const category = "travel";

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
          Select a category to see a list of discounts available.
        </p>
        <Featured category="travel" featured="true" />
        <Discounts category="travel" />
      </div>
    </>
  );
}

export default Travel;
