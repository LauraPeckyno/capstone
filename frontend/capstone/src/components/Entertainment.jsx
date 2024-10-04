import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Entertainment() {
  const [discounts, setDiscounts] = useState([]);
  const category = 'entertainment';

  useEffect(() => {
    axios.get(`http://localhost:3000/discounts/category=${category}`)
      .then(response => {
        console.log(response.data); // Verify API response
        // setDiscounts(response.data.discounts);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="outerContainer">
        <div className="imageContainerEntertainment"></div>
        <h1>Entertainment</h1>
        <p>
          We've scoured the web to find the best SENIOR DISCOUNTS for you!
          Select a category to see a list of discounts available.
        </p>
        <h2>Featured Discounts</h2>
        <div className="discountGridContainer">
          {/* {discounts && discounts.map(discount => (
            <div key={discount._id} className="discountGridItem">
              <h3>{discount.business}</h3>
              <p>{discount.discount}</p> */}
            </div>
          {/* ))} */}
        </div>
    </>
  );
}

export default Entertainment;