"use client";

import Link from "next/link";
import { toast } from "react-toastify";

import { useCart } from "@/context/CartContext";
import { useQuickView } from "@/context/QuickViewContext";

type ProductCardProps = {
  product: any;
};

export default function ProductCard({
  product,
}: ProductCardProps) {

  const { addToCart } = useCart();

  const { setQuickViewProduct } =
    useQuickView();

  // =========================
  // SAFE VALUES
  // =========================

  const productId =
    product.id || product.item_id;

  const productName =
    product.name || "Product";

  const productSlug =
    product.slug || product.item_id;

  const productPrice =
    product.sale_price ||
    product.rate ||
    0;

  const oldPrice =
    product.price ||
    product.rate ||
    0;

  const stockQty =
    product.stock_qty ||
    product.stock_on_hand ||
    0;

  const productImage =
    product.front_image
      ? `http://127.0.0.1:8000${product.front_image}`
      : "/assets/img/product/default.jpg";

  const hoverImage =
    product.back_image
      ? `http://127.0.0.1:8000${product.back_image}`
      : productImage;

  // =========================
  // ADD TO CART
  // =========================

  const handleAddToCart = () => {

    addToCart(product);

    toast.success(
      `${productName} added to cart`
    );

  };

  return (

    <div className="bb-pro-box">

      {/* Product Image */}
      <div className="bb-pro-img">

        <span className="flags">

          <span>
            {product.label || "New"}
          </span>

        </span>

        <Link href={`/product/${productSlug}`}>

          <div className="inner-img">

            <img
              className="main-img"
              src={productImage}
              alt={productName}
            />

            <img
              className="hover-img"
              src={hoverImage}
              alt={productName}
            />

          </div>

        </Link>

        {/* Actions */}
        <ul className="bb-pro-actions">

          <li className="bb-btn-group">

            <button
              type="button"
              title="Wishlist"
            >

              <i className="ri-heart-line" />

            </button>

          </li>

          {/* Quick View */}
          <li className="bb-btn-group">

            <button
              type="button"
              title="Quick View"
              data-bs-toggle="modal"
              data-bs-target="#bry_quickview_modal"
              onClick={() =>
                setQuickViewProduct(product)
              }
            >

              <i className="ri-eye-line" />

            </button>

          </li>

          {/* Compare */}
          <li className="bb-btn-group">

            <button
              type="button"
              title="Compare"
            >

              <i className="ri-repeat-line" />

            </button>

          </li>

          {/* Add To Cart */}
          <li className="bb-btn-group">

            <button
              type="button"
              title="Add To Cart"
              className="border-0 bg-transparent"
              onClick={handleAddToCart}
            >

              <i className="ri-shopping-bag-4-line" />

            </button>

          </li>

        </ul>

      </div>

      {/* Content */}
      <div className="bb-pro-contact">

        <div className="bb-pro-subtitle">

          <a href="#">
            {product.product_type ||
              product.material ||
              product.sku ||
              "Product"}
          </a>

          <span className="bb-pro-rating">

            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-line" />

          </span>

        </div>

        <h4 className="bb-pro-title">

          <Link href={`/product/${productSlug}`}>
            {productName}
          </Link>

        </h4>

        <div className="bb-price">

          <div className="inner-price">

            <span className="new-price">

              ₹{productPrice}

            </span>

            <span className="old-price">

              ₹{oldPrice}

            </span>

          </div>

          <span className="last-items">

            {stockQty} Items

          </span>

        </div>

      </div>

    </div>

  );
}