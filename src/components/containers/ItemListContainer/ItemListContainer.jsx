import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { css } from "@emotion/core";
import productList from '../../../productList';
import ItemList from './ItemList';

const override = css`
  display: block;
  margin: 0 auto;
`;

//la funcion de useEffect es hacer algo en algún momento especifico

const ItemListContainer = ({ }) => {
  //el que hago es esto
  // const { categoryId } = useParams();
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#36D7B7");
  useEffect(() => {
    // setIsLoading(true)
    setLoading(true)
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(productList), 2000);
    });
    myPromise.then((result) => {
      setProducts(result);
      // setIsLoading(false);

      setLoading(false);
    });
    //cuando quiero que lo haga es lo que pongo en el array vacío
  }, [])

  // useEffect(() => {
  //   const filterCategories = new Promise((resolve, reject) => {
  //     if (categoryId) {
  //       const products = productList.filter((product) => {
  //         return product.category.toString() === categoryId;
  //       });
  //       resolve(products);
  //     } else resolve(productList);
  //   });
  //   filterCategories.then((result) => setProducts(result));
  // }, []);

  const style = {
    textAlign: 'center',
    marginTop: '150px'
  }
  if (loading) {
    return <>
      <h1 {...{ style }}>Cargando productos...</h1>
      <ClimbingBoxLoader color={color} loading={loading} css={override} size={18} />
    </>
  }
  return (
    <>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;