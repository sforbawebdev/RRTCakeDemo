import React from 'react'

const ProductDescTabPane = ({product}) => {
  return (
    <div className="fz-product-details__descr">
      {product.description}
    </div>
  )
}

export default ProductDescTabPane