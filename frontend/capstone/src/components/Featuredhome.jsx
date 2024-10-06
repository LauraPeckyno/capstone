import React from "react";

function Featuredhome({ discounts }) {
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
