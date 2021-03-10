import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import productList from '../../../productList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../../firebase/firebase'


const ItemDetailContainer = () => {

  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  // const itemDetails = (id) => {
  //   return new Promise(result => setTimeout(() => {
  //     result(productList.find(product =>
  //       product.id === parseInt(id)))
  //   }, 3000))
  // }
  useEffect(() => {
    const db = getFirestore();
    const docRef = db.collection("ITEMS").doc(id);
    docRef.get().then((querySnapshot) => {
      setDetail({ id: querySnapshot.id, ...querySnapshot.data() });
    });
    console.log(id)
  }, [id]);

  return (
    <>
      <ItemDetail detail={detail} />
    </>
  );
};

export default ItemDetailContainer;