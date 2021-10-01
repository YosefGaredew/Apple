import React from 'react'
import logowatch from "./images/logos/watch-series-6/promo_logo_watch_series_6_lte__el1kwqt2v52e_small_2x.png";
import logoapple from "./images/logos/apple-one/logo__dcojfwkzna2q_small_2x (1).png";

function FifthSection() {
    return (
      <div>
        <section className="fifth-section row">
          <div className="left col-sm-12 col-md-6">
            <div className="container-left">
              <div className="logo-image">
                <img
                  src={logowatch}
                  alt=""
                />
              </div>
              <div className="product-description-2 white">
                The future of health is on your wrist.
              </div>
              <div className="links-wrapper">
                <ul className="row">
                  <li className="col-6 text-end">
                    <a href="">Learn more</a>
                  </li>
                  <li className="col-6">
                    <a href="">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right col-sm-12 col-md-6">
            <div className="container-right">
              <div className="logo-image">
                <img
                  src={logoapple}
                  alt=""
                />
              </div>
              <div className="product-description-2">
                <div className="">Bundle up to six Apple services</div>
                <div className="">and enjoy more for less.</div>
              </div>
              <div className="links-wrapper">
                <ul className="row">
                  <li className="col-6 text-end">
                    <a href="">Learn more</a>
                  </li>
                  <li className="col-6 links-wrapper-2">
                    <a href="">
                      Try it free <sup>4</sup>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default FifthSection
