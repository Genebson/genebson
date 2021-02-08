import React, { useEffect, useState } from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { css } from "@emotion/core";
import productList from '../../productList';
import ItemList from './ItemList';

const override = css`
  display: block;
  margin: 0 auto;
`;

//la funcion de useEffect es hacer algo en algún momento especifico

const ItemListContainer = ({ greeting }) => {
  //el que hago es esto
  const [products, setProducts] = useState([])
  // const [isLoading, setIsLoading] = useState([false])
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
      <h1 className="h1">{greeting}</h1>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;