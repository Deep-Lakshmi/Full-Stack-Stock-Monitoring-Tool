import React from "react";

function Brojkerage() {
  return (
    <div className="container">
      <div className="row mt-5 p-5">
        <div className="col-8">
          <a href=" "  className="text-decoration-none">
            <h4 className="text-primary mb-3 text-center">
              Brokerage calculator
            </h4>
          </a>
          <ul className="text-muted p-3">
            <li>
              {" "}
              <p>
                Call & Trade and RMS auto-squareoff: Additional charges of
                &#8377;50+GST per order.
              </p>
            </li>
            <li>
              {" "}
              <p>Digital contract notes will be sent via e-mail.</p>
            </li>
            <li>
              {" "}
              <p>
                Physical copies of contract notes, if required, shall be charged
                &#8377; 20 per contract note. Courier charges apply.
              </p>
            </li>
            <li>
              {" "}
              <p>
                For NRI account (non-PIS), 0.5% or &#8377;100 per executed order
                for equity (whichever is lower).
              </p>
            </li>
            <li>
              <p>For NRI account (PIS), 0.5% or </p>
            </li>
            <li>
              {" "}
              <p>
                If the account is in debit balance, any order placed will be
                charged &#8377;40 per executed order instead of &#8377;20 per
                executed order.
              </p>
            </li>
          </ul>
        </div>

        <div className="col-4">
          <a href=" " className="text-decoration-none">
            {" "}
            <h4 className="text-primary text-center mb-3">List of charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brojkerage;
