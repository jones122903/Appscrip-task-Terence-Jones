"use client";

import { useState } from "react";

const filters = [
  "IDEAL FOR",
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
  "PATTERN",
];

export default function FilterSidebar({
  selectedIdealFor,
  setSelectedIdealFor,
  className = "",
}) {
  const [openFilter, setOpenFilter] = useState(null);

  function toggleFilter(filter) {
    setOpenFilter((current) =>
      current === filter ? null : filter
    );
  }

  function handleIdealForChange(option) {
    if (selectedIdealFor.includes(option)) {
      setSelectedIdealFor(
        selectedIdealFor.filter((item) => item !== option)
      );
    } else {
      setSelectedIdealFor([
        ...selectedIdealFor,
        option,
      ]);
    }
  }

  return (
    <aside className={`filter-sidebar ${className}`}>
      <label className="customizable-filter">
        <input type="checkbox" />
        <span>CUSTOMIZABLE</span>
      </label>

      {filters.map((filter) => (
        <div className="filter-item" key={filter}>
          <button
            type="button"
            className="filter-heading"
            onClick={() => toggleFilter(filter)}
            aria-expanded={openFilter === filter}
          >
            <span>{filter}</span>

            <span>
              {openFilter === filter ? "⌃" : "⌄"}
            </span>
          </button>

          <p>All</p>

          {filter === "IDEAL FOR" &&
            openFilter === "IDEAL FOR" && (
              <div className="filter-options">
                <button
                  type="button"
                  className="unselect-button"
                  onClick={() => setSelectedIdealFor([])}
                >
                  Unselect all
                </button>

                <label>
                  <input
                    type="checkbox"
                    checked={selectedIdealFor.includes(
                      "Men"
                    )}
                    onChange={() =>
                      handleIdealForChange("Men")
                    }
                  />
                  <span>Men</span>
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={selectedIdealFor.includes(
                      "Women"
                    )}
                    onChange={() =>
                      handleIdealForChange("Women")
                    }
                  />
                  <span>Women</span>
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={selectedIdealFor.includes(
                      "Baby & Kids"
                    )}
                    onChange={() =>
                      handleIdealForChange(
                        "Baby & Kids"
                      )
                    }
                  />
                  <span>Baby & Kids</span>
                </label>
              </div>
            )}
        </div>
      ))}
    </aside>
  );
}