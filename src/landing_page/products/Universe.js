import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center text-muted mb-5">
        <h3>The Zerodha Universe</h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row mb-5 mt-5 ">
        <div className="col-4 text-center">
            <a href=" " className="text-decoration-none">
              <img
                src="Media/images/zerodhaFundhouse.png"
                alt="zerodhaFundhouse"
                className="w-50 mb-3"
              />
              <p className="small text-muted">
                Our asset management venture <br /> that is creating simple and
                transparent index <br /> funds to help you save for your goals.
              </p>
            </a>

         
            <a href=" " className="text-decoration-none ">
              <img
                src="Media/images/streakLogo.png"
                alt="streak"
                className=" w-50 mb-3"
              />{" "}
              <p className="small text-muted">
                Systematic trading platform <br /> that allows you to create and
                backtest <br /> strategies without coding.
              </p>
            </a>
        </div>

        <div className="col-4 text-center">
          <div className="mb-5">
            <a href=" " className="text-decoration-none">
              <img
                src="Media/images/sensibullLogo.svg"
                alt="sensibullLogo"
                className="w-50 mb-3"
              />{" "}
              <p className="small text-muted">
                Options trading platform that lets you <br /> create strategies,
                analyze positions, and examine <br /> data points like open
                interest, FII/DII, and more.
              </p>
            </a>
          </div>
          <div>
            <a href=" " className="text-decoration-none">
              <img
                src="Media/images/smallCaseLogo.png"
                alt="smallCaseLogo"
                className="w-50 mb-3"
              />{" "}
              <p className="small text-muted">
                Thematic investing platform <br />
                that helps you invest in diversified <br />
                baskets of stocks on ETFs.
              </p>
            </a>
          </div>
        </div>

        <div className="col-4 text-center">
          <div className="mb-5">
            <a href=" " className="text-decoration-none ">
              <img
                src="Media/images/goldenpiLogo.png"
                alt=" goldenpiLogo "
                className="w-50 mb-3"
              />
              <p className="small text-muted">
                Investment research platform <br />
                that offers detailed insights on stocks, <br />
                sectors, supply chains, and more.
              </p>
            </a>
          </div>
          <div>
            <a href=" " className="text-decoration-none ">
              <img
                src="Media/images/dittoLogo.png"
                alt="dittoLogo"
                className="w-25 mb-3"
              />{" "}
              <p className="small text-muted">
                Personalized advice on life <br /> and health insurance. No spam{" "}
                <br /> and no mis-selling.
              </p>
            </a>
          </div>
        </div>
        <button type="button" class="btn btn-primary btn-lg col-2 mx-auto mb-5 mt-5 p-2">Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
