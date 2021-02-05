import React, { useEffect, useState } from 'react';
import productList from '../../productList';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(productList), 2000);
    });
    myPromise.then((result) => setProducts(result));

  }, [])

  return (
    <>
      <h1 className="h1">{greeting}</h1>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer;