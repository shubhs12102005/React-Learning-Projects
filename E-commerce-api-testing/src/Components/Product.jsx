import React from 'react'

const Product = ({ product }) => {
  return (
    <div>
       <img src={product.images} alt="" />
       <p>{product.title}</p>
    </div>
  )
}

export default Product