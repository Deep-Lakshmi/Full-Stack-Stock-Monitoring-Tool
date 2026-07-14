import React from "react";

function Hero() {
  return (
    <section className="container-fluid bg-primary text-white mb-5">
      <div className="d-flex justify-content-between align-items-center mt-5 p-5 ms-5 me-5">
        <h5>
          Support Portal
        </h5>
          <a href=" " className="text-white">
            Track Tickets
          </a>
      </div>

      <div className="row p-5">
        <div className="col-6 p-4">
          <h3 className="fs-3 mb-3">Search for an answer or browse help topics to create a ticket</h3>
          <input
            placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
            className="form-control p-2 rounded-1 fs-6 w-100 mb-3"
          />
          <a href=" " className="text-white">
            Track account opening
          </a>
          <a href=" " className="text-white ms-3">
            Track Tickets
          </a><span></span>
          <a href=" " className="text-white ms-3">
            Track segment activation
          </a>
          <a href=" " className="text-white ms-3">
            Intradex margins
          </a>
          <a href=" " className="text-white ms-3 ">
            Kite user manual
          </a>
        </div>

        <div className="col-6 p-4">
          <h3 className="fs-3">Featured</h3>
          <ol>
            <li className="mb-2">
              <a href=" " className="text-white">
                Current Takeovers and Delisting-january 2024
              </a>
            </li>
            <li>
              <a href=" " className="text-white">
                Latest Intraday leverages-MIS&CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
