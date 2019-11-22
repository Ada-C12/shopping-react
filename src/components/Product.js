import React from 'react';
import './Product.css';

const Product = (props) => {
  let price = props.price;
  let className;
  if (props.discountPrice < price) {
    price = props.discountPrice;
    className = 'discounted';
  } else {
    className = 'price';
  }
  return (
    <section className={className}>Price: {price}</section>
  )
}

export default Product;