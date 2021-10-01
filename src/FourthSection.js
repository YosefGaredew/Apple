import React from 'react'
import logo from "./images/logos/apple-fitness-plus/logo__dcojfwkzna2q_medium_2x (1).png";

function FourthSection() {
    return (
      <div>
        <section className="fourth-section row">
          <div className="container-left col-sm-12 col-md-6">
            <div className="product-name-2">iMac</div>
            <div className="product-description-2">Say hello.</div>
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

          <div className="container-right col-sm-12 col-md-6">
            <div className="logo-image fitness">
              <img
                src={logo}
                alt=""
              />
            </div>
            <div className="product-description-2">
              Fitness for all,powered
              <span className="span-2">by Apple Watch.</span>
            </div>
            <div className="links-wrapper">
              <ul className="row">
                <li className="col-6 text-end">
                  <a href="">Learn more</a>
                </li>
                <li className="col-6 links-wrapper-2">
                  <a href="">
                    Try it free <sup>3</sup>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
}

export default FourthSection



