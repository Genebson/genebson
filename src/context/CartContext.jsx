import { createContext, useState, useEffect, useContext } from 'react';
export const CartContext = createContext() //contexto creado
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ defaultValue = [], children }) => { //proveedor(lo que quiero consumir en otros componentes)
  //Inyecto estados y funciones que voy a usar en mi contexto(createContext)
  const cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
  const [producto, setProducto] = useState(cartLocalStorage && cartLocalStorage.length > 0 ? cartLocalStorage : defaultValue);

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
  }

  const totalQuantity = () => {
    return producto.reduce((prev, next) => (prev + (next.counter)), 0)
  };

  const removeItem = (itemId) => {
    setProducto(producto.filter(prod => prod.id !== itemId.id))
  }

  const clear = () => setProducto([])

  // const isInCart = (id) => {
  //   return producto.findIndex(prod => prod.id === id)
  // }


  return (
    <CartContext.Provider value={{ producto, addCart, removeItem, clear, totalQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;