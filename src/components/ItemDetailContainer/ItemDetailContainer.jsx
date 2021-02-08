import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import productList from '../../productList';

const ItemDetailContainer = ({ }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => resolve(productList[0]), 3000);
    });
    getItems.then((result) => setProducts(result));
    console.log(products)

  }, [])

  return (
    <>
      <ItemDetail products={products} />
    </>
  );
}

export default ItemDetailContainer;