import React from "react";

function Featuredhome({ discounts }) {
    // Sort discounts by category before rendering
    const sortedDiscounts = discounts && discounts.sort((a, b) => {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    });
  return (
    <div className="featuredContainer">
      <h3>Featured Discounts</h3>
      <div className="discountGridContainer">
        {discounts &&
          discounts.map((discount) => (
            <div key={discount._id} className="discountGridItem">
              <h3>{discount.business}</h3>
              <p className="categoryText">{discount.category}</p>
              <p>
                <strong>Eligibility: </strong>
                {discount.eligibility}
                <br />
                <strong>Discount description: </strong>
                {discount.discount}
              </p>
              <p>
                <a
                  href={discount.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit {discount.business}
                </a>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Featuredhome;
