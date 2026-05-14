export default function CartSidebar() {
  return (
    <>
  <div className="bb-side-cart-overlay" />
  <div className="bb-side-cart">
    <div className="row h-full">
      <div className="col-md-5 col-12 d-none-767">
        <div className="bb-top-contact">
          <div className="bb-cart-title">
            <h4>Related Items</h4>
          </div>
        </div>
        <div className="bb-cart-box mb-minus-24 cart-related bb-border-right">
          <div className="bb-deal-card mb-24">
            <div className="bb-pro-box">
              <div className="bb-pro-img">
                <span className="flags">
                  <span>Hot</span>
                </span>
                <a href="javascript:void(0)">
                  <div className="inner-img">
                    <img
                      className="main-img"
                      src="assets/img/product/2.jpg"
                      alt="product-2"
                    />
                    <img
                      className="hover-img"
                      src="assets/img/product/back-2.jpg"
                      alt="product-2"
                    />
                  </div>
                </a>
                <ul className="bb-pro-actions">
                  <li className="bb-btn-group">
                    <a href="javascript:void(0)" title="Wishlist">
                      <i className="ri-heart-line" />
                    </a>
                  </li>
                  <li className="bb-btn-group">
                    <a
                      href="javascript:void(0)"
                      data-link-action="quickview"
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#bry_quickview_modal"
                    >
                      <i className="ri-eye-line" />
                    </a>
                  </li>
                  <li className="bb-btn-group">
                    <a href="compare.html" title="Compare">
                      <i className="ri-repeat-line" />
                    </a>
                  </li>
                  <li className="bb-btn-group">
                    <a href="javascript:void(0)" title="Add To Cart">
                      <i className="ri-shopping-bag-4-line" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bb-pro-contact">
                <div className="bb-pro-subtitle">
                  <a href="shop-left-sidebar-col-3.html">Juice</a>
                  <span className="bb-pro-rating">
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-line" />
                  </span>
                </div>
                <h4 className="bb-pro-title">
                  <a href="product-left-sidebar.html">
                    Organic Apple Juice Pack
                  </a>
                </h4>
                <div className="bb-price">
                  <div className="inner-price">
                    <span className="new-price">$15</span>
                    <span className="item-left">3 Left</span>
                  </div>
                  <span className="last-items">100 ml</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-cart-banner mb-24">
            <div className="banner">
              <img
                src="assets/img/category/cart-banner.jpg"
                alt="cart-banner"
              />
              <div className="detail">
                <h4>Organic &amp; Fresh</h4>
                <h3>Vegetables</h3>
                <a href="shop-left-sidebar-col-3.html">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-7 col-12">
        <div className="bb-inner-cart">
          <div className="bb-top-contact">
            <div className="bb-cart-title">
              <h4>My cart</h4>
              <a
                href="javascript:void(0)"
                className="bb-cart-close"
                title="Close Cart"
              />
            </div>
          </div>
          <div className="bb-cart-box item">
            <ul className="bb-cart-items">
              <li className="cart-sidebar-list">
                <a href="javascript:void(0)" className="cart-remove-item">
                  <i className="ri-close-line" />
                </a>
                <a href="javascript:void(0)" className="bb-cart-pro-img">
                  <img src="assets/img/new-product/1.jpg" alt="product-img-1" />
                </a>
                <div className="bb-cart-contact">
                  <a
                    href="product-left-sidebar.html"
                    className="bb-cart-sub-title"
                  >
                    Ground Nuts Oil Pack
                  </a>
                  <span className="cart-price">
                    <span className="new-price">$15</span>x 500 g
                  </span>
                  <div className="qty-plus-minus">
                    <input
                      className="qty-input"
                      type="text"
                      name="bb-qtybtn"
                      defaultValue={1}
                    />
                  </div>
                </div>
              </li>
              <li className="cart-sidebar-list">
                <a href="javascript:void(0)" className="cart-remove-item">
                  <i className="ri-close-line" />
                </a>
                <a href="javascript:void(0)" className="bb-cart-pro-img">
                  <img src="assets/img/new-product/2.jpg" alt="product-img-2" />
                </a>
                <div className="bb-cart-contact">
                  <a
                    href="product-left-sidebar.html"
                    className="bb-cart-sub-title"
                  >
                    Organic Litchi Juice Pack
                  </a>
                  <span className="cart-price">
                    <span className="new-price">$25</span>x 500 ml
                  </span>
                  <div className="qty-plus-minus">
                    <input
                      className="qty-input"
                      type="text"
                      name="bb-qtybtn"
                      defaultValue={1}
                    />
                  </div>
                </div>
              </li>
              <li className="cart-sidebar-list">
                <a href="javascript:void(0)" className="cart-remove-item">
                  <i className="ri-close-line" />
                </a>
                <a href="javascript:void(0)" className="bb-cart-pro-img">
                  <img src="assets/img/new-product/3.jpg" alt="product-img-3" />
                </a>
                <div className="bb-cart-contact">
                  <a
                    href="product-left-sidebar.html"
                    className="bb-cart-sub-title"
                  >
                    Crunchy Banana Chips
                  </a>
                  <span className="cart-price">
                    <span className="new-price">$1</span>x 500 g
                  </span>
                  <div className="qty-plus-minus">
                    <input
                      className="qty-input"
                      type="text"
                      name="bb-qtybtn"
                      defaultValue={1}
                    />
                  </div>
                </div>
              </li>
              <li className="cart-sidebar-list">
                <a href="javascript:void(0)" className="cart-remove-item">
                  <i className="ri-close-line" />
                </a>
                <a href="javascript:void(0)" className="bb-cart-pro-img">
                  <img src="assets/img/new-product/6.jpg" alt="product-img-3" />
                </a>
                <div className="bb-cart-contact">
                  <a
                    href="product-left-sidebar.html"
                    className="bb-cart-sub-title"
                  >
                    Small Cardamom Spice Pack
                  </a>
                  <span className="cart-price">
                    <span className="new-price">$4</span>x 500 g
                  </span>
                  <div className="qty-plus-minus">
                    <input
                      className="qty-input"
                      type="text"
                      name="bb-qtybtn"
                      defaultValue={1}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="bb-bottom-cart">
            <div className="cart-sub-total">
              <table className="table cart-table">
                <tbody>
                  <tr>
                    <td className="title">Sub-Total :</td>
                    <td className="price">$300.00</td>
                  </tr>
                  <tr>
                    <td className="title">VAT (20%) :</td>
                    <td className="price">$60.00</td>
                  </tr>
                  <tr>
                    <td className="title">Total :</td>
                    <td className="price">$360.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cart-btn">
              <a href="cart.html" className="bb-btn-1">
                View Cart
              </a>
              <a href="checkout.html" className="bb-btn-2">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  );
}