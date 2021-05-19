import React, { useState, useEffect } from 'react';
import Button from './Button';
import { useRecoilState } from 'recoil';
import { user as viewAtom } from "./atoms";
import Table from './Table';

const Products = () => {
    const [products, setProducts] = useRecoilState(viewAtom);
    const handleChange = (slug) => {
      const copyProducts = [...products];
  
      const modifiedProducts = copyProducts.map((product) => {
        if (slug === product.slug) {
          product.checked = !product.checked;
        }
        
        return product;
      });
  
      setProducts(modifiedProducts);
    };
  
    const handleRemove = () => {
      const copyProducts = [...products];
      const modifiedProducts = copyProducts.filter(
        (product) => product.checked !== true
      );
      setProducts(modifiedProducts);
    };
    return (
      <div className="container pt-3">
        <h2>Click delete to delete </h2>
        <button type="button" onClick={() => handleRemove()}>
          Delete
        </button>
        {products &&
          products.map((product, idx) => (
            <Table key={idx} product={product} handleChange={handleChange} />
          ))}
      </div>
    );
  };
  
  export default Products;