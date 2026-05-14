export default function MobileMenu() {
  return (
    <>
    <div className="bb-mobile-menu-overlay" />
    <div id="bb-mobile-menu" className="bb-mobile-menu">
      <div className="bb-menu-title">
        <span className="menu_title">My Menu</span>
        <button type="button" className="bb-close-menu">
          ×
        </button>
      </div>
      <div className="bb-menu-inner">
        <div className="bb-menu-content">
          <ul>
            <li>
              <a href="javascript:void(0)">Home</a>
              <ul className="sub-menu">
                <li>
                  <a href="index.html">Grocery</a>
                </li>
                <li>
                  <a href="demo-2.html">Fashion</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0)">Categories</a>
              <ul className="sub-menu">
                <li>
                  <a href="javascript:void(0)">Classic</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="shop-left-sidebar-col-3.html">
                        Left sidebar 3 column
                      </a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar-col-4.html">
                        Left sidebar 4 column
                      </a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar-col-3.html">
                        Right sidebar 3 column
                      </a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar-col-4.html">
                        Right sidebar 4 column
                      </a>
                    </li>
                    <li>
                      <a href="shop-full-width.html">Full width 4 column</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0)">Products</a>
              <ul className="sub-menu">
                <li>
                  <a href="javascript:void(0)">Product page</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="product-left-sidebar.html">
                        Product left sidebar
                      </a>
                    </li>
                    <li>
                      <a href="product-right-sidebar.html">
                        Product right sidebar
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0)">Product Accordion</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="product-accordion-left-sidebar.html">
                        left sidebar
                      </a>
                    </li>
                    <li>
                      <a href="product-accordion-right-sidebar.html">
                        right sidebar
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="product-full-width.html">Product full width</a>
                </li>
                <li>
                  <a href="product-accordion-full-width.html">
                    accordion full width
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0)">Pages</a>
              <ul className="sub-menu">
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
                <li>
                  <a href="contact-us.html">Contact Us</a>
                </li>
                <li>
                  <a href="cart.html">Cart</a>
                </li>
                <li>
                  <a href="checkout.html">Checkout</a>
                </li>
                <li>
                  <a href="compare.html">Compare</a>
                </li>
                <li>
                  <a href="faq.html">Faq</a>
                </li>
                <li>
                  <a href="login.html">Login</a>
                </li>
                <li>
                  <a href="register.html">Register</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0)">Blog</a>
              <ul className="sub-menu">
                <li>
                  <a href="blog-left-sidebar.html">Left Sidebar</a>
                </li>
                <li>
                  <a href="blog-right-sidebar.html">Right Sidebar</a>
                </li>
                <li>
                  <a href="blog-full-width.html">Full Width</a>
                </li>
                <li>
                  <a href="blog-detail-left-sidebar.html">
                    Detail Left Sidebar
                  </a>
                </li>
                <li>
                  <a href="blog-detail-right-sidebar.html">
                    Detail Right Sidebar
                  </a>
                </li>
                <li>
                  <a href="blog-detail-full-width.html">Detail Full Width</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="header-res-lan-curr">
          {/* Social Start */}
          <div className="header-res-social">
            <div className="header-top-social">
              <ul className="mb-0">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="ri-facebook-fill" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="ri-twitter-fill" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="ri-instagram-line" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="ri-linkedin-fill" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Social End */}
        </div>
      </div>
    </div>
    </>
  );
}