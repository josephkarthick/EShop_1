"use client";

export default function QuickViewModal() {
  return (
    <>



  <div
    className="modal fade quickview-modal"
    id="bry_quickview_modal"
    tabIndex={-1}
    role="dialog"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <button
          type="button"
          className="qty-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          title="Close"
        />
        <div className="modal-body">
          <div className="row mb-minus-24">
            <div className="col-md-5 col-sm-12 col-xs-12 mb-24">
              <div className="single-pro-img single-pro-img-no-sidebar">
                <div className="single-product-scroll">
                  <div className="single-slide zoom-image-hover">
                    <img
                      className="img-responsive"
                      src="assets/img/product/1.jpg"
                      alt="product-img-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12 mb-24">
              <div className="quickview-pro-content">
                <h5 className="bb-quick-title">
                  <a href="product-left-sidebar.html">
                    Mix nuts premium quality organic dried fruit 250g pack
                  </a>
                </h5>
                <div className="bb-pro-rating">
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-line" />
                </div>
                <div className="bb-quickview-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1900s,
                </div>
                <div className="bb-quickview-price">
                  <span className="new-price">$50.00</span>
                  <span className="old-price">$62.00</span>
                </div>
                <div className="bb-pro-variation">
                  <ul>
                    <li className="active">
                      <a
                        href="#"
                        className="bb-opt-sz"
                        data-tooltip="Small"
                      >
                        250g
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bb-opt-sz"
                        data-tooltip="Medium"
                      >
                        500g
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bb-opt-sz"
                        data-tooltip="Large"
                      >
                        1kg
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bb-opt-sz"
                        data-tooltip="Extra Large"
                      >
                        2kg
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="bb-quickview-qty">
                  <div className="qty-plus-minus">
                    <input
                      className="qty-input"
                      type="text"
                      name="bb-qtybtn"
                      defaultValue={1}
                    />
                  </div>
                  <div className="bb-quickview-cart">
                    <button type="button" className="bb-btn-1">
                      <i className="ri-shopping-bag-line" />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}