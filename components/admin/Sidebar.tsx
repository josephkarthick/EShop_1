"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {

  const pathname = usePathname();

  return (

    <div className="section-menu-left">

      <div className="box-logo">

        <Link href="/admin/dashboard">

          <img
            id="logo_header"
            alt="logo"
            src="/admin/images/logo/logo.png"
          />

        </Link>

        <div className="button-show-hide">

          <i className="icon-menu-left" />

        </div>

      </div>

      <div className="section-menu-left-wrap">

        <div className="center">

          {/* DASHBOARD */}
          <div className="center-item">

            <div className="center-heading">
              Main
            </div>

            <ul className="menu-list">

              <li className="menu-item">

                <Link
                  href="/admin/dashboard"
                  className={
                    pathname === "/admin/dashboard"
                      ? "active"
                      : ""
                  }
                >

                  <div className="icon">
                    <i className="icon-grid" />
                  </div>

                  <div className="text">
                    Dashboard
                  </div>

                </Link>

              </li>

            </ul>

          </div>

          {/* ECOMMERCE */}
          <div className="center-item">

            <div className="center-heading">
              Ecommerce
            </div>

            <ul className="menu-list">

              {/* PRODUCTS */}
              <li className="menu-item">

                <Link
                  href="/admin/products"
                  className={
                    pathname.includes("/admin/products")
                      ? "active"
                      : ""
                  }
                >

                  <div className="icon">
                    <i className="icon-shopping-cart" />
                  </div>

                  <div className="text">
                    Products
                  </div>

                </Link>

              </li>

              {/* CATEGORIES */}
              <li className="menu-item">

                <Link
                  href="/admin/categories"
                  className={
                    pathname.includes("/admin/categories")
                      ? "active"
                      : ""
                  }
                >

                  <div className="icon">
                    <i className="icon-layers" />
                  </div>

                  <div className="text">
                    Categories
                  </div>

                </Link>

              </li>

            </ul>

          </div>

        </div>

      </div>

    </div>

  );

}