import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import productList from '../../../productList';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  const itemDetails = (id) => {
    return new Promise(result => setTimeout(() => {
      result(productList.find(product =>
        product.id === parseInt(id)))
    }, 3000))
  }
  useEffect(() => {
    itemDetails(id).then((product) => {
      setDetail(product);
    });
  }, [itemDetails])

  return (
    <>
      <ItemDetail detail={detail} />
    </>
  );
};

export default ItemDetailContainer;