import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import productList from '../../../productList';
import ItemList from './ItemList'

const ItemListCategory = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([])

  useEffect(() => {
    const filterCategories = new Promise((resolve, reject) => {
      const products = productList.filter((product) => {
        return product.category.toString() === categoryId;
      })
      resolve(products);
    })
    filterCategories.then((result) => setProducts(result));
  }, []);

  return (
    <>
      <ItemList products={products} />
    </>
  );
}

export default ItemListCategory;