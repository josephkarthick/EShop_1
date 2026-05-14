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

  /* Cart Context */
  const { addToCart } = useCart();

const { setQuickViewProduct } =
  useQuickView();


  /* Add To Cart Handler */
  const handleAddToCart = () => {

    addToCart(product);

    toast.success(
      `${product.name} added to cart`
    );

  };
  
  

  return (

    <div className="bb-pro-box">

      {/* Product Image */}
      <div className="bb-pro-img">

        {/* Label */}
        <span className="flags">

          <span>
            {product.label || "New"}
          </span>

        </span>

        {/* Product Link */}
        <Link href={`/product/${product.slug}`}>

          <div className="inner-img">

            <img
              className="main-img"
              src={`http://127.0.0.1:8000${product.front_image}`}
              alt={product.name}
            />

            <img
              className="hover-img"
              src={`http://127.0.0.1:8000${product.back_image}`}
              alt={product.name}
            />

          </div>

        </Link>

        {/* Product Actions */}
        <ul className="bb-pro-actions">

          {/* Wishlist */}
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

      {/* Product Content */}
      <div className="bb-pro-contact">

        {/* Subtitle */}
        <div className="bb-pro-subtitle">

          <a href="#">
            {product.product_type || product.material}
          </a>

          {/* Rating */}
          <span className="bb-pro-rating">

            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-line" />

          </span>

        </div>

        {/* Product Title */}
        <h4 className="bb-pro-title">

          <Link href={`/product/${product.slug}`}>
            {product.name}
          </Link>

        </h4>

        {/* Price */}
        <div className="bb-price">

          <div className="inner-price">

            {/* Sale Price */}
            <span className="new-price">

              ₹{product.sale_price}

            </span>

            {/* Original Price */}
            <span className="old-price">

              ₹{product.price}

            </span>

          </div>

          {/* Stock */}
          <span className="last-items">

            {
              product.stock_qty
                ? `${product.stock_qty} Items`
                : product.size
            }

          </span>

        </div>

      </div>

    </div>

  );
}