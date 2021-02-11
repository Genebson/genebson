import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import productList from '../../productList';

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setTimeout(() => resolve(productList[0]), 3000);
    });
    getItems.then((result) => setDetail(result));
  }, [])
  console.log(detail);
  return (
    <>
      <ItemDetail detail={detail} />
    </>
  );
};

export default ItemDetailContainer;