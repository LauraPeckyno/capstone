import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SocialServices() {
  
  const [discounts, setDiscounts] = useState([]);
  const category = 'social_services';

  useEffect(() => {
    axios.get(`http://localhost:3000/discounts/category/${category}`)
      .then(response => {
        console.log(response.data); // Verify API response
        setDiscounts(response.data.discounts); // Set the discounts from response
      })
      .catch(error => {
        console.error('Error fetching discounts:', error);
      });
  }, []);

  return (
    <>
    <div className="outerContainer">
      <div className="imageContainerSocialServices"></div>
      <h1>Social Services</h1>
      <p>
          We've scoured the web to find the best SENIOR DISCOUNTS for you!
          Select a category to see a list of discounts available.
        </p>
        <h2>Featured Discounts</h2>
        <div className="discountGridContainer">
          {discounts && discounts.map(discount => (
            <div key={discount._id} className="discountGridItem">
              <h3>{discount.business}</h3>
              <p>{discount.eligibility}</p>
              <p>{discount.discount}</p>
              <a href={discount.url} target="_blank" rel="noopener noreferrer">Visit {discount.business}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default SocialServices;
