import React from "react";
import AddToCart from "./AddToCart";
// import styles from './ProductCard.module.css'

const ProductCart = () => {
  return (
    // <div className={styles.card} > css module
    // <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500' > tailwind css
    <div>
      <AddToCart />
    </div>
  );
};

export default ProductCart;
