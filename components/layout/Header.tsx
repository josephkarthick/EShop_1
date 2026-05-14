"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

type Category = {
  id: number;
  name: string;
  slug: string;
};

type Product = {
  id: number;
  name: string;
  slug: string;
  category_id: number;
};

export default function Header() {

  const { cartItems } = useCart();

  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {

    const fetchData = async () => {

      try {

        // Categories
        const catRes = await fetch(
          "http://127.0.0.1:8000/categories/"
        );

        const catData = await catRes.json();

        setCategories(catData);

        // Products
        const productRes = await fetch(
          "http://127.0.0.1:8000/products/"
        );

        const productData = await productRes.json();

        setProducts(productData);

      } catch (error) {

        console.log(error);

      }

    };

    fetchData();

  }, []);

  return (
    <>
      <header className="bb-header">

        {/* TOP HEADER */}
        <div className="top-header">

          <div className="container">

            <div className="row">

              <div className="col-12">

                <div className="inner-top-header">

                  <div className="col-left-bar">

                    <Link href="/">
                      Flat 50% Off On Grocery Shop.
                    </Link>

                  </div>

                  <div className="col-right-bar">

                    <div className="cols">
                      <Link href="/faq">
                        Help?
                      </Link>
                    </div>

                    <div className="cols">
                      <Link href="/track-order">
                        Track Order
                      </Link>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM HEADER */}
        <div className="bottom-header">

          <div className="container">

            <div className="row">

              <div className="col-12">

                <div className="inner-bottom-header">

                  {/* LOGO */}
                  <div className="cols bb-logo-detail">

                    <div className="header-logo">

                      <Link href="/">

                        <img
                          src="/assets/img/logo/logo.png"
                          alt="logo"
                          className="light"
                        />

                        <img
                          src="/assets/img/logo/logo-dark.png"
                          alt="logo"
                          className="dark"
                        />

                      </Link>

                    </div>

                  </div>

                  {/* SEARCH */}
                  <div className="cols">

                    <div className="header-search">

                      <form className="bb-btn-group-form">

                        <div className="inner-select">

                          <div className="custom-select">

                            <select>

                              <option>
                                All Categories
                              </option>

                              {categories.map((cat) => (

                                <option
                                  key={cat.id}
                                  value={cat.slug}
                                >
                                  {cat.name}
                                </option>

                              ))}

                            </select>

                          </div>

                        </div>

                        <input
                          className="form-control bb-search-bar"
                          placeholder="Search products..."
                          type="text"
                        />

                        <button
                          className="submit"
                          type="submit"
                        >
                          <i className="ri-search-line" />
                        </button>

                      </form>

                    </div>

                  </div>

                  {/* ICONS */}
                  <div className="cols bb-icons">

                    <div className="bb-flex-justify">

                      <div className="bb-header-buttons">

                        {/* ACCOUNT */}
                        <div className="bb-acc-drop">

                          <a
                            href="javascript:void(0)"
                            className="bb-header-btn bb-header-user dropdown-toggle bb-user-toggle"
                          >

                            <div className="header-icon">
                              <i className="ri-user-3-line"></i>
                            </div>

                            <div className="bb-btn-desc">

                              <span className="bb-btn-title">
                                Account
                              </span>

                              <span className="bb-btn-stitle">
                                Login
                              </span>

                            </div>

                          </a>

                        </div>

                        {/* WISHLIST */}
                        <Link
                          href="/wishlist"
                          className="bb-header-btn bb-wish-toggle"
                        >

                          <div className="header-icon">
                            <i className="ri-heart-line"></i>
                          </div>

                          <div className="bb-btn-desc">

                            <span className="bb-btn-title">

                              <b className="bb-wishlist-count">
                                0
                              </b>

                              items

                            </span>

                            <span className="bb-btn-stitle">
                              Wishlist
                            </span>

                          </div>

                        </Link>

                        {/* CART */}
                        <a
                          href="javascript:void(0)"
                          className="bb-header-btn bb-cart-toggle"
                        >

                          <div className="header-icon">
                            <i className="ri-shopping-cart-2-line"></i>
                          </div>

                          <div className="bb-btn-desc">

                            <span className="bb-btn-title">

                              <b className="bb-cart-count">
                                {cartItems.length}
                              </b>

                              items

                            </span>

                            <span className="bb-btn-stitle">
                              Cart
                            </span>

                          </div>

                        </a>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* MAIN MENU */}
        <div className="bb-main-menu-desk">

          <div className="container">

            <div className="row">

              <div className="col-12">

                <div className="bb-inner-menu-desk">

                  <div className="bb-main-menu">

                    <ul className="navbar-nav">

                      {/* HOME */}
                      <li className="nav-item">

                        <Link
                          className="nav-link"
                          href="/"
                        >
                          Home
                        </Link>

                      </li>

                      {/* PRODUCTS */}
                      <li className="nav-item bb-dropdown">

                        <a
                          className="nav-link bb-dropdown-item"
                          href="javascript:void(0)"
                        >
                          Products
                        </a>

                        <ul className="bb-dropdown-menu">

                          {categories.map((cat) => (

                            <li
                              key={cat.id}
                              className="bb-mega-dropdown"
                            >

                              <a
                                className="bb-mega-item"
                                href="javascript:void(0)"
                              >
                                {cat.name}
                              </a>

                              <ul className="bb-mega-menu">

                                {products
                                  .filter(
                                    (product) =>
                                      product.category_id === cat.id
                                  )
                                  .map((product) => (

                                    <li key={product.id}>

                                      <Link
                                        className="dropdown-item"
                                        href={`/products/${product.slug}`}
                                      >
                                        {product.name}
                                      </Link>

                                    </li>

                                ))}

                              </ul>

                            </li>

                          ))}

                        </ul>

                      </li>

                      {/* PAGES */}
                      <li className="nav-item bb-dropdown">

                        <a
                          className="nav-link bb-dropdown-item"
                          href="javascript:void(0)"
                        >
                          Pages
                        </a>

                        <ul className="bb-dropdown-menu">

                          <li>

                            <Link
                              className="dropdown-item"
                              href="/about-us"
                            >
                              About Us
                            </Link>

                          </li>

                          <li>

                            <Link
                              className="dropdown-item"
                              href="/contact-us"
                            >
                              Contact Us
                            </Link>

                          </li>

                        </ul>

                      </li>

                    </ul>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </header>
    </>
  );
}