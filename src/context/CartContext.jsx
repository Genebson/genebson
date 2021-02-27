import { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext() //contexto creado
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => { //proveedor(lo que quiero consumir en otros componentes)
  //Inyecto estados y funciones que voy a usar en mi contexto(createContext)

  const [producto, setProducto] = useState([])
  // console.log(producto, 'producto')

  const addCart = cantidadProductos => {
    if (producto.find(item => item.id === cantidadProductos.id)) {
      const productoNuevo = producto.map(item => {
        if (item.id === cantidadProductos.id) {
          return { ...item, counter: cantidadProductos.counter + item.counter }
        }
        return item;
      })
      setProducto(productoNuevo)
    } else {
      setProducto(state => {
        return [...state, cantidadProductos];
      })
    }
    console.log(producto, 'producto adentro');
  }
  console.log(producto, 'producto afuera');

  const removeItem = (itemId) => {
    setProducto(producto.filter(prod => prod.item.id !== itemId))
  }

  const clear = () => setProducto([])

  // const isInCart = (id) => {
  //   return producto.findIndex(prod => prod.id === id)
  // }


  return (
    <CartContext.Provider value={{ producto, addCart, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;