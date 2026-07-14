import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnmore,
  kiteConnect,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h2 className="mb-4 ">{productName}</h2>
          <p className="fs-5">{productDescription}</p>
          {learnmore && (
            <a href={learnmore} className="text-decoration-none fs-5">
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          )}
          {kiteConnect && (
            <a
              href={kiteConnect}
              className=" text-decoration-none fs-5"
            >
              Kite Connect{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          )}
        </div>

        <div className="col-6">
          <img src={imageURL} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
