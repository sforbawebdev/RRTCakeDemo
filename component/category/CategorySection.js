import Link from 'next/link'
import React from 'react'

const CategorySection = ({doorCategories}) => {
  return (
    <section className="fz-1-category-section">
      <div className="container">
        <div className="fz-1-section-heading">
          <h2 className="fz-section-title">Shop By Category</h2>
        </div>

        <div className="row g-md-4 g-3 justify-content-center align-items-center align-items-xl-stretch">
          {doorCategories.map((category, index) => (
            <div
              key={category.id}
              className={`${
                index === 2 ? 'col-xl-6 col-4 col-xxs-12' : 'col-xl-3 col-lg-4 col-8 col-xxs-12 fz-1-category-col'
              }`}
            >
              <Link href={category.href} className="fz-1-single-category ">
                <img src={category.imgSrc} alt={category.name} />
                <h5 className="fz-1-single-category__title">
                  {category.name} ({category.count})
                </h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
