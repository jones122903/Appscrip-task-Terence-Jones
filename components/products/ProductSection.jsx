"use client";

import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";

export default function ProductSection({ products }) {
  const [showFilter, setShowFilter] = useState(true);
  const [showMobileFilter, setShowMobileFilter] =
    useState(false);

  const [showSort, setShowSort] = useState(false);

  const [sortOption, setSortOption] =
    useState("RECOMMENDED");

  const [selectedIdealFor, setSelectedIdealFor] =
    useState([]);

  /* ==============================
     FILTER PRODUCTS
     ============================== */

  let filteredProducts = [...products];

  if (selectedIdealFor.length > 0) {
    filteredProducts = filteredProducts.filter(
      (product) => {
        const isMen =
          selectedIdealFor.includes("Men") &&
          product.category === "men's clothing";

        const isWomen =
          selectedIdealFor.includes("Women") &&
          product.category === "women's clothing";

        return isMen || isWomen;
      }
    );
  }

  /* ==============================
     SORT PRODUCTS
     ============================== */

  const sortedProducts = [...filteredProducts];

  if (sortOption === "PRICE : HIGH TO LOW") {
    sortedProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  if (sortOption === "PRICE : LOW TO HIGH") {
    sortedProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  /* ==============================
     SORT HANDLER
     ============================== */

  const handleSort = (option) => {
    setSortOption(option);
    setShowSort(false);
  };

  const sortOptions = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  return (
    <section className="product-section">

      {/* ==============================
          PRODUCT TOOLBAR
          ============================== */}

      <div className="product-toolbar">
        <div className="toolbar-left">

          <span className="item-count">
            3425 ITEMS
          </span>

          {/* DESKTOP FILTER BUTTON */}

          <button
            type="button"
            className="filter-toggle desktop-filter-toggle"
            onClick={() =>
              setShowFilter((current) => !current)
            }
            aria-expanded={showFilter}
          >
            <span className="desktop-filter-arrow">
              {showFilter ? "‹" : "›"}
            </span>

            <span className="desktop-filter-text">
              {showFilter
                ? "HIDE FILTER"
                : "SHOW FILTER"}
            </span>
          </button>

          {/* MOBILE FILTER BUTTON */}

          <button
            type="button"
            className="mobile-filter-button"
            onClick={() =>
              setShowMobileFilter(true)
            }
            aria-expanded={showMobileFilter}
          >
            FILTER
          </button>

        </div>

        {/* ==============================
            SORT
            ============================== */}

        <div className="sort-container">

          <button
            type="button"
            className="sort-button"
            onClick={() =>
              setShowSort((current) => !current)
            }
            aria-expanded={showSort}
          >
            <span>{sortOption}</span>

            <span>
              {showSort ? "⌃" : "⌄"}
            </span>
          </button>

          {showSort && (
            <div className="sort-dropdown">

              {sortOptions.map((option) => (
                <button
                  type="button"
                  key={option}
                  className={
                    sortOption === option
                      ? "active-sort"
                      : ""
                  }
                  onClick={() =>
                    handleSort(option)
                  }
                >
                  {sortOption === option && "✓ "}
                  {option}
                </button>
              ))}

            </div>
          )}

        </div>
      </div>

      {/* ==============================
          DESKTOP PRODUCTS + FILTER
          ============================== */}

      <div className="product-content">

        {showFilter && (
          <FilterSidebar
            selectedIdealFor={selectedIdealFor}
            setSelectedIdealFor={
              setSelectedIdealFor
            }
          />
        )}

        <div
          className={`product-grid-wrapper ${
            showFilter ? "" : "filter-hidden"
          }`}
        >
          <ProductGrid
            products={sortedProducts}
          />
        </div>

      </div>

      {/* ==============================
          MOBILE FILTER DRAWER
          ============================== */}

      {showMobileFilter && (
        <div
          className="mobile-filter-overlay"
          onClick={() =>
            setShowMobileFilter(false)
          }
        >
          <div
            className="mobile-filter-drawer"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div className="mobile-filter-header">

              <h2>FILTER</h2>

              <button
                type="button"
                className="mobile-filter-close"
                onClick={() =>
                  setShowMobileFilter(false)
                }
                aria-label="Close filters"
              >
                ×
              </button>

            </div>

            <FilterSidebar
              className="mobile-filter-sidebar"
              selectedIdealFor={
                selectedIdealFor
              }
              setSelectedIdealFor={
                setSelectedIdealFor
              }
            />

            <button
              type="button"
              className="mobile-filter-apply"
              onClick={() =>
                setShowMobileFilter(false)
              }
            >
              APPLY
            </button>

          </div>
        </div>
      )}

    </section>
  );
}