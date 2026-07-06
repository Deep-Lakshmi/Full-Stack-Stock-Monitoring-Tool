import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnmore,
  googlePlay,
  appStore,
  coin,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 ">
          <img src={imageURL} alt="" />
        </div>

        <div className="col-6 p-5 mt-5">
          <h2 className="mb-4 ">{productName}</h2>
          <p className="fs-5">{productDescription}</p>
          <div>
            {tryDemo && (<a href={tryDemo} className="text-decoration-none fs-5">
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
             )}

            {learnmore && (<a href={learnmore} className="ms-5 p-2 text-decoration-none fs-5">
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
             )}

            {coin && (
              <a href={coin} className="text-decoration-none fs-6">
                Coin <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}

          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="Media/images/googlePlayBadge.svg"
                alt=" googlePlayBadge"
                className="mt-2"
              />
            </a>
            <a href={appStore}>
              <img
                src="Media/images/appstoreBadge.svg"
                alt="appstoreBadge"
                className="ms-3 mt-2 p-2"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
