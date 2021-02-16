import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import productList from '../../../productList';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = (id) => {

  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const getItems = productList.find(id)

    return (
      <>
        <ItemDetail detail={detail} />
      </>
    );
  };

  export default ItemDetailContainer;