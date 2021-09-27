import React from 'react'
import logo from "./images/icons/logo-sm.png";
import search from "./images/icons/search-icon-sm.png";
import cart from "./images/icons/cart-sm.png";
function Header() {
    return (
      <div>
        <div class="nav-wrapper fixed-top">
          <div class="container-lg">
            <nav class="navbar navbar-toggleable-sm navbar-expand-md">
              <button
                class="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button>
              <a class="navbar-brand mx-auto" href="#">
                <img src={logo} />
              </a>
              <a class="navbar-brand mx-2 cart-mobile" href="#">
                <img src={cart} />
              </a>

              <div class="navbar-collapse collapse">
                <div class="search-mobile">
                  <input
                    class="srch"
                    type="search"
                    placeholder="Search apple.com"
                  />
                </div>
                <ul class="navbar-nav nav-justified w-100 nav-fill">
                  <li class="nav-item mac">
                    <a class="nav-link js-scroll-trigger" href="/mac/">
                      Mac
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#">
                      iphone
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#">
                      ipad
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#">
                      watch
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#">
                      tv
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#">
                      Music
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#">
                      Support
                    </a>
                  </li>
                  <li class="nav-item search-disktop">
                    <a class="nav-link js-scroll-trigger" href="/search/">
                      <img src={search} />
                    </a>
                  </li>
                  <li class="nav-item cart-disktop">
                    <a class="nav-link js-scroll-trigger" href="/cart/">
                      <img src={cart} />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
}

export default Header
