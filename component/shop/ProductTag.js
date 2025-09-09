"use client";
import { VerdaContext } from '@/context/VerdaContext';
import React, { useContext } from 'react';

const ProductTag = () => {
  const {selectedTags, handleTagSelection} = useContext(VerdaContext)
  const tags = [
    "Ring",
    "Necklace",
    "Bracelet",
    "Hair Clip",
    "Luxury Jewelry"
  ];

  return (
    <section className="sidebar-single-area product-tags-area">
      <h3 className="sidebar-single-area__title">Product tags</h3>
      <ul className="tags tags shop-tag-filter">
        {tags.map(tag => (
          <li
            key={tag}
            className={selectedTags.includes(tag) ? 'active' : ''}
            onClick={() => handleTagSelection(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductTag;
