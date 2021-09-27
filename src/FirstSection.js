import React from 'react'

function FirstSection() {
    return (
      <div>
        <section className="first-hightlight-wrapper">
          <div className="container">
            <div className="product-name">iphone 12</div>

            <div className="product-description">Blast past fast</div>
            <div className="price-tag">
              From $29.12/mo. for 24 mo.
              <span className="price-tag-2">
                or $699 before trade-in <sup>1</sup>
              </span>
            </div>
            <div className="price-tag">
              Buy directly from Apple
              <span className="price-tag-2">with special carrier offers </span>
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
        </section>
      </div>
    );
}

export default FirstSection
