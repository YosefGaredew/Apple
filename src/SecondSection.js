import React from 'react'

function SecondSection() {
    return (
      <div>
        <section className="second-hightlight-wrapper">
          <div className="container">
            <div className="product-name white">iphone 12 Pro</div>
            <div className="product-description white">It's a leap year.</div>
            <div className="price-tag">
              From $41.62/mo. for 24 mo.
              <span className="price-tag-2">
                or $999 before trade-in <sup>2</sup>
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

export default SecondSection

