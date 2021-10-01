import React from 'react'
import logoAppleCard from "./images/logos/apple-card/logo__dcojfwkzna2q_small_2x.png";
import logoTv from "./images/logos/tv-plus/logo_light__cfvl40z2nzau_small_2x.png";

function SixthSection() {
    return (
      <div>
        <section className="sixth-section row">
          <div className="left col-sm-12 col-md-6">
            <div className="container-left">
              <div className="logo-image">
                <img
                  src={logoAppleCard}
                  alt=""
                />
              </div>
              <div className="product-description-2">
                <div>Get up to 3% Daily Cash back</div>
                <div>with every purchase.</div>
              </div>
              <div className="links-wrapper">
                <ul className="row">
                  <li className="col-6 text-end">
                    <a href="">Learn more</a>
                  </li>
                  <li className="col-6">
                    <a href="">Apply now </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right col-sm-12 col-md-6">
            <div className="container-right">
              <div className="logo-image-2">
                <img
                  src={logoTv}
                  alt=""
                />
              </div>
              <div className="product-description-3">WORK OUT YOUR ISSUES</div>
              <div className="link-movie">
                <a href="">watch now</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default SixthSection
