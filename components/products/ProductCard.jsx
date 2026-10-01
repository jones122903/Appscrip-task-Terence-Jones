"use client";

import { useState } from "react";

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  function toggleWishlist() {
    setIsWishlisted((current) => !current);
  }

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>

      <div className="product-info">
        <h2>{product.title}</h2>

        <div className="product-details">
          <p>
            <u>Sign in</u> or Create an account to see pricing
          </p>

          <button
            type="button"
            onClick={toggleWishlist}
            aria-label={
              isWishlisted
                ? `Remove ${product.title} from wishlist`
                : `Add ${product.title} to wishlist`
            }
            aria-pressed={isWishlisted}
          >
            {isWishlisted ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </article>
  );
}