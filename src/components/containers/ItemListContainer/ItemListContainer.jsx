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

  useEffect(() => {
    // conexion a la bd
    const baseDeDatos = getFirestore();

    //value.data para traer el documento
    // Guardamos la referencia de la coleccion que queremos tomar
    const itemCollection = baseDeDatos.collection('Items')
    const item = itemCollection.doc(idDdocumento)
    //Tomando los datos
    itemCollection.get().then(value => {
      console.log(value.docs)
      let aux = value.docs.map(element => {
        return { ...element.data(), id: element.id }
      })
      console.log(aux);
      setProductos(aux);
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
        <ItemList products={products} />
      </>
    );
  }

export default ItemListContainer;