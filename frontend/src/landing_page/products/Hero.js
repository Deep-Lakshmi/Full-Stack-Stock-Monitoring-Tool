import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row text-center mt-5">
        <h3 className="mt-5 mb-3">Zerodha Products</h3>
        <p className="fs-5 mb-4 text-muted">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="text-muted mb-5">
          Check out our{" "}
          <a href=" " className="text-decoration-none">
            {" "}
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
