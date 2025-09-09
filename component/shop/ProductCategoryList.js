"use client";
import { VerdaContext } from '@/context/VerdaContext';
import { allProductList } from '@/data/Data';
import React, { useContext, useState } from 'react';

const categories = [
  { name: null, label: "All Jewelry" },
  { name: "Ring", label: "Rings" },
  { name: "Necklace", label: "Necklaces" },
  { name: "Bracelet", label: "Bracelets" },
  { name: "Hair Clip", label: "Hair Accessories" },
  { name: "Luxury Jewelry", label: "Luxury Jewelry" },
];

const ProductCategoryList = () => {
    const { handleCategoryFilter } = useContext(VerdaContext);
    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (category) => {
        handleCategoryFilter(category);
        setActiveCategory(category);
    };

    return (
        <section className="sidebar-single-area product-categories-area">
            <h3 className="sidebar-single-area__title">Product categories</h3>
            <ul className="product-categories">
                {categories.map(categoryObj => (
                    <li
                        key={categoryObj.name}
                        onClick={() => handleCategoryClick(categoryObj.name)}
                        className={activeCategory === categoryObj.name ? 'active' : ''}
                    >
                        {categoryObj.label} ({categoryObj.name === null ? allProductList.length : allProductList.filter(product => product.category === categoryObj.name).length})
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ProductCategoryList;
