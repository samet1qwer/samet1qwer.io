import React, { useState } from "react";
import categoriesData from "./CategoriList";

function Categories({ onSelectCategory }) {
  const [categories, setCategories] = useState(categoriesData);

  const handleClick = (clickedCategory) => {
    const updatedCategories = categories.map((cat) => ({
      ...cat,
      isActive: cat.name === clickedCategory.name,
    }));

    setCategories(updatedCategories);
    onSelectCategory(clickedCategory.name);
  };

  return (
    <div className="max-w-7xl mx-auto md:px-10 px-7 -mt-4 relative z-10">
      <ul className="flex overflow-x-auto space-x-3 whitespace-nowrap py-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`
              flex items-center justify-center px-5 py-2 rounded-full shadow-sm cursor-pointer
              transition-all duration-300 text-sm font-medium
              ${
                category.isActive
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }
            `}
            onClick={() => handleClick(category)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
