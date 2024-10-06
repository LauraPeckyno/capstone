import React, { useState, useEffect } from "react";
import axios from "axios";
import Featured from "./Featured";
import Discounts from "./Discounts";

function Telecommunications() {
  const [discounts, setDiscounts] = useState([]);
  const category = "telecommunications";

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
        <div className="imageContainerTelecomm"></div>
        <h1>Telecommunications</h1>
        <p>
          We've scoured the web to find the best SENIOR DISCOUNTS for you!
          Select a category to see a list of discounts available.
        </p>
        <Featured category="telecommunications" featured="true" />
        <Discounts category="telecommunications" />
      </div>
    </>
  );
}

export default Telecommunications;
