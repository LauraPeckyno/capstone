import React from 'react';

function SearchResults({ discounts }) {
  return (
    <div className="searchResultsContainer">
      <h3>Search Results</h3>
      <div className="discountGridContainer">
        {discounts.map(discount => (
          <div key={discount._id} className="discountGridItem">
            <h3>{discount.business}</h3>
            <p>
              <strong>Eligibility: </strong>{discount.eligibility}<br />
              <strong>Discount/Service description: </strong>{discount.discount}
            </p>
            <p>
              <a href={discount.url} target="_blank" rel="noopener noreferrer">
                Visit {discount.business}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;