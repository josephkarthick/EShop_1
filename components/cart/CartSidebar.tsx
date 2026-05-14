"use client";

import Link from "next/link";

import { useCart } from "@/context/CartContext";

export default function CartSidebar() {

  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  /* Subtotal */
  const subtotal = cartItems.reduce(
    (total: number, item: any) =>
      total + (item.sale_price * item.qty),
    0
  );

  /* VAT */
  const vat = subtotal * 0.2;

  /* Total */
  const total = subtotal + vat;

  return (

    <>
      {/* Overlay */}
      <div className="bb-side-cart-overlay" />

      {/* Sidebar */}
      <div className="bb-side-cart">

        <div className="row h-full">

          {/* Full Width Cart */}
          <div className="col-12">

            <div className="bb-inner-cart">

              {/* Header */}
              <div className="bb-top-contact">

                <div className="bb-cart-title">

                  <h4>
                    My Cart (
                    {cartItems.length}
                    )
                  </h4>

                  <a
                    href="#"
                    className="bb-cart-close"
                    title="Close Cart"
                  />

                </div>

              </div>

              {/* Cart Items */}
              <div className="bb-cart-box item">

                <ul className="bb-cart-items">

                  {
                    cartItems.length === 0 ? (

                      <div className="text-center p-4">

                        <h5>
                          Your cart is empty
                        </h5>

                      </div>

                    ) : (

                      cartItems.map((item: any) => (

                        <li
                          className="cart-sidebar-list"
                          key={item.id}
                        >

                          {/* Remove */}

							<button
							type="button"
							className="cart-remove-item"
							onClick={() =>
								removeFromCart(item.id)
							}
							>						  

                            <i className="ri-close-line" />

                          </button>

                          {/* Product Image */}
                          <Link
                            href={`/product/${item.slug}`}
                            className="bb-cart-pro-img"
                          >

                            <img
                              src={`http://127.0.0.1:8000${item.front_image}`}
                              alt={item.name}
                            />

                          </Link>

                          {/* Product Content */}
                          <div className="bb-cart-contact">

                            {/* Product Name */}
                            <Link
                              href={`/product/${item.slug}`}
                              className="bb-cart-sub-title"
                            >

                              {item.name}

                            </Link>

                            {/* Product Price */}
								<span className="cart-price">
								
								<span className="new-price">
								
									₹{Number(item.sale_price || item.price || 0).toFixed(2)}
								
								</span>
								
								{" "}x {item.qty}
								
								{" "}=
								
								₹{
									(
									item.sale_price *
									item.qty
									).toFixed(2)
								}
								
								</span>

                            {/* Quantity */}
                            <div className="qty-plus-minus">

                              {/* Minus */}
                              <button
                                type="button"
                                className="minus"
                                onClick={() =>
                                  decreaseQty(item.id)
                                }
                              >
                                -
                              </button>

                              {/* Qty */}
                              <input
                                className="qty-input"
                                type="text"
                                value={item.qty}
                                readOnly
                              />

                              {/* Plus */}
                              <button
                                type="button"
                                className="plus"
                                onClick={() =>
                                  increaseQty(item.id)
                                }
                              >
                                +
                              </button>

                            </div>

                          </div>

                        </li>

                      ))

                    )
                  }

                </ul>

              </div>

              {/* Bottom Totals */}
              {
                cartItems.length > 0 && (

                  <div className="bb-bottom-cart">

                    {/* Totals */}
                    <div className="cart-sub-total">

                      <table className="table cart-table">

                        <tbody>

                          {/* Subtotal */}
                          <tr>

                            <td className="title">
                              Sub-Total :
                            </td>

                            <td className="price">

                              ₹{
                                subtotal.toFixed(2)
                              }

                            </td>

                          </tr>

                          {/* VAT */}
                          <tr>

                            <td className="title">
                              VAT (20%) :
                            </td>

                            <td className="price">

                              ₹{
                                vat.toFixed(2)
                              }

                            </td>

                          </tr>

                          {/* Total */}
                          <tr>

                            <td className="title">
                              Total :
                            </td>

                            <td className="price">

                              ₹{
                                total.toFixed(2)
                              }

                            </td>

                          </tr>

                        </tbody>

                      </table>

                    </div>

                    {/* Buttons */}
                    <div className="cart-btn">

                      <Link
                        href="/cart"
                        className="bb-btn-1"
                      >

                        View Cart

                      </Link>

                      <Link
                        href="/checkout"
                        className="bb-btn-2"
                      >

                        Checkout

                      </Link>

                    </div>

                  </div>

                )
              }

            </div>

          </div>

        </div>

      </div>
    </>
  );
}