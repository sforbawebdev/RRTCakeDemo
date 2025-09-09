"use client";
import { VerdaContext } from '@/context/VerdaContext';
import { allProductList } from '@/data/Data';
import React, { useContext, useState } from 'react';

const categories = [
  { name: null,      label: "All Cakes & Bakery" },
  { name: "Cake",    label: "Cakes" },
  { name: "Bakery",  label: "Bakery" },
];

const ProductCategoryList = () => {
  const { handleCategoryFilter } = useContext(VerdaContext);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    handleCategoryFilter(category);
    setActiveCategory(category);
  };

  const getCount = (categoryName) => {
    if (categoryName === null) return allProductList.length;
    return allProductList.filter(p => p.category === categoryName).length;
  };

  return (
    <section className="sidebar-single-area product-categories-area">
      <h3 className="sidebar-single-area__title">Product categories</h3>
      <ul className="product-categories">
        {categories.map((categoryObj) => (
          <li
            key={categoryObj.label}
            onClick={() => handleCategoryClick(categoryObj.name)}
            className={activeCategory === categoryObj.name ? 'active' : ''}
          >
            {categoryObj.label} ({getCount(categoryObj.name)})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductCategoryList;
