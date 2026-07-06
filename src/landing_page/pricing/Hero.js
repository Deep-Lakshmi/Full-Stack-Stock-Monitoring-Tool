import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 p-5">
        <h2 className="text-center">Charges</h2>
        <h4 className="text-center text-muted fs-4 mt-2">
          List of all charges and taxes
        </h4>
      </div>

      <div className="row p-4">
        <div className="col-4 text-center p-5">
          <img
            src="Media/images/PricingEquity.svg"
            alt="pricingEquity"
            className="w-75"
          />
          <h3>Free equity delivery</h3>
          <p className="mt-4 text-muted">
            All equity delivery investments (NSE, BSE), <br /> are absolutely
            free — ₹ 0 brokerage.
          </p>
        </div>

        <div className="col-4 text-center p-5">
          <img
            src="Media/images/intradayTrades.svg"
            alt="intradayTrades"
            className="w-75"
          />
          <h3>Intraday and F&O trades</h3>
          <p className="mt-4 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on
            intraday trades across <br /> equity, currency, and commodity
            trades. Flat <br />
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-4 text-center p-5">
          <img
            src="Media/images/pricing0.svg"
            alt="pricing0"
            className="w-75"
          />
          <h3>Free direct MF</h3>
          <p className="mt-4 ">
            All direct mutual fund investments are <br /> absolutely free — ₹ 0
            commissions & DP <br /> charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
