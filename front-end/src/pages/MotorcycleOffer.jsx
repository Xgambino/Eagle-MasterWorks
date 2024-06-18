import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MotorcycleOffer.css";

function MotorcycleOffer() {
  const [motorcycle_offers, setMotorcycle_offers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/motorcycle_offers")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMotorcycle_offers(data.motorcycle_offers);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const handlePurchase = (motorcycle_offer_data) => {
    alert(`Purchased: ${motorcycle_offer_data.title}`);
  };

  return (
    <div className="motorcycle-offer-container">
      <Link to="/motorcycles" className="btn btn-back btn-light">
        Back
      </Link>
      <div className="cards-container">
        {motorcycle_offers.map((motorcycle_offer, index) => (
          <div className="card futuristic-card" key={motorcycle_offer.id}>
            <img
              src={motorcycle_offer.image_url}
              className="card-img-top futuristic-image"
              alt={`Card image ${index + 1}`}
            />
            <div className="card-body futuristic-card-body">
              <h5 className="heading futuristic-heading">
                {motorcycle_offer.title}
              </h5>
              <div className="card-details futuristic-card-details">
                <p>Category: {motorcycle_offer.category}</p>
                <p>Initial price: {motorcycle_offer.initial_price}</p>
                <p>Current price: {motorcycle_offer.current_price}</p>
                <p>Rating: {motorcycle_offer.rating}</p>
                <p>Release date: {motorcycle_offer.release_date}</p>
                <p>Discount: {motorcycle_offer.discount}</p>
              </div>
              <button
                onClick={() => handlePurchase(motorcycle_offer)}
                className="btn btn-success futuristic-button"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="next-page">
        <Link to="/motorcycles" className="btn btn-back btn-light">
          Next Page
        </Link>
      </div>
      {error && (
        <div className="error-container">
          <h2 className="error-heading">Error</h2>
          <p className="error-message">{error.message}</p>
        </div>
      )}
    </div>
  );
}

export default MotorcycleOffer;
