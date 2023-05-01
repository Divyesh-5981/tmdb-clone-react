import React, { useState } from "react";

function Availability() {
  const [showAvailability, setShowAvailability] = useState(true);

  const [showStream, setShowStream] = useState(true);
  const [showFree, setShowFree] = useState(true);
  const [showAds, setShowAds] = useState(true);
  const [showRent, setShowRent] = useState(true);
  const [showBuy, setShowBuy] = useState(true);
  return (
    <div className="filter">
      <h3 className="availibility-heading">Availabilities</h3>
      <label>
        <input
          type="checkbox"
          name="availabilities"
          value="true"
          id="availability"
          className="availability-input"
          checked={showAvailability ? "checked" : ""}
          onChange={() => setShowAvailability(!showAvailability)}
        />
        <label htmlFor="availability" className="ml">
          Search all availabilities?
        </label>
      </label>
      {/* Availability Wrapper starts from here */}
      {!showAvailability && (
        <div className="availability-wrapper">
          <label>
            <input
              type="checkbox"
              name="ott_monetization_type"
              value="stream"
              id="ott_monetization_type_stream"
              className="availability-input"
              checked={showStream ? "checked" : ""}
              onChange={() => setShowStream(!showStream)}
            />
            <label htmlFor="ott_monetization_type_stream" className="ml">
              Stream
            </label>
          </label>
          <label>
            <input
              type="checkbox"
              name="ott_monetization_type"
              value="free"
              id="ott_monetization_type_free"
              className="availability-input"
              checked={showFree ? "checked" : ""}
              onChange={() => setShowFree(!showFree)}
            />
            <label htmlFor="ott_monetization_type_free" className="ml">
              Free
            </label>
          </label>
          <label>
            <input
              type="checkbox"
              name="ott_monetization_type"
              value="ads"
              id="ott_monetization_type_ads"
              className="availability-input"
              checked={showAds ? "checked" : ""}
              onChange={() => setShowAds(!showAds)}
            />
            <label htmlFor="ott_monetization_type_ads" className="ml">
              Ads
            </label>
          </label>
          <label>
            <input
              type="checkbox"
              name="ott_monetization_type"
              value="rent"
              id="ott_monetization_type_rent"
              className="availability-input"
              checked={showRent ? "checked" : ""}
              onChange={() => setShowRent(!showRent)}
            />
            <label htmlFor="ott_monetization_type_rent" className="ml">
              Rent
            </label>
          </label>
          <label>
            <input
              type="checkbox"
              name="ott_monetization_type"
              value="buy"
              id="ott_monetization_type_buy"
              className="availability-input"
              checked={showBuy ? "checked" : ""}
              onChange={() => setShowBuy(!showBuy)}
            />
            <label htmlFor="ott_monetization_type_buy" className="ml">
              Buy
            </label>
          </label>
        </div>
      )}
      {/* Availability Wrapper ends from here */}
    </div>
  );
}

export default Availability;
