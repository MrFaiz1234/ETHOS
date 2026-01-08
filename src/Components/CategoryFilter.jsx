import React from "react";

// List of categories
const categories = [
  "All",
  "Data Analysis",
  "Data Engineering",
  "Artificial Intelligence",
  "Machine Learning",
];

function CategoryFilter({ activeCategory, setActiveCategory }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mt-6 w-full max-w-4xl">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)} // updates parent state
          className={`px-5 py-2 rounded-lg text-sm font-medium transition
            ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-[#EFF4FF] text-gray-700 hover:bg-blue-100"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
