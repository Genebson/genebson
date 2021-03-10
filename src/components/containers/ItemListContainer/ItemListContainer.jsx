import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { css } from "@emotion/core";
import productList from '../../../productList';
import ItemList from './ItemList';
import { getFirestore } from '../../../firebase/firebase'

const override = css`
  display: block;
  margin: 0 auto;
`;

//la funcion de useEffect es hacer algo en algún momento especifico

const ItemListContainer = ({ }) => {
  //el que hago es esto
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#36D7B7");

  useEffect(() => {
    setLoading(true);
    const baseDeDatos = getFirestore();
    let docRef;
    if (categoryId) {
      docRef = baseDeDatos.collection("ITEMS").where("CATEGORY", "==", categoryId);
    } else {
      docRef = baseDeDatos.collection("ITEMS");
    }
    docRef.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("No existen resultados");
      }
      setProducts(
        querySnapshot.docs.map((element) => ({
          ...element.data(),
          id: element.id
        }))
      );
      setLoading(false);
    });
    console.log(categoryId);
  }, [categoryId]);
  //cuando quiero que lo haga es lo que pongo en el array vacío
  // useEffect(() => {
  //   //   conexion a la bd
  //   const baseDeDatos = getFirestore();
  //   const itemCollection = baseDeDatos.collection('ITEMS')
  //   //   value.data para traer el documento
  //   //   Guardamos la referencia de la coleccion que queremos tomar

  //   //   Tomando los datos
  //   itemCollection.get().then(value => {
  //     let aux = value.docs.map(async (element) => {
  //       const CategoryID = baseDeDatos.collection('CATEGORY')
  //       let auxCategoryID = await CategoryID.doc(element.data().categoryID).get()
  //       // console.log(auxCategoryID.data());
  //       return { ...element.data(), categoria: auxCategoryID.data() }
  //     })
  //     console.log(aux)
  //     setProducts(aux)
  //   })
  // }, [])

  const style = {
    textAlign: 'center',
    marginTop: '150px'
  }
  return (
    <>
      {loading ? (
        <>
          <h1 {...{ style }}>Cargando productos...</h1>
          <ClimbingBoxLoader
            color={color}
            loading={loading}
            css={override}
            size={18}
          />
        </>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
}
export default ItemListContainer;