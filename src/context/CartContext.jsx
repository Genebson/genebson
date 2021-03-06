import { createContext, useState, useEffect, useContext } from 'react';
export const CartContext = createContext() //contexto creado
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ defaultValue = [], children }) => { //proveedor(lo que quiero consumir en otros componentes)
  //Inyecto estados y funciones que voy a usar en mi contexto(createContext)
  // const cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
  const [producto, setProducto] = useState(defaultValue);

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

  const removeItem = (itemId) => {
    setProducto(producto.filter(prod => prod.id !== itemId.id))
  }

  const clear = () => setProducto([])

  const totalQuantity = () => {
    return producto.reduce((prev, next) => (prev + (next.counter)), 0)
  };

  //Cart y Checkout
  const totalFinal = producto.reduce((prev, next) => {
    return prev + (next.counter * next.price)
  }, 0)

  //Checkout
  const [ordenID, setOrdenID] = useState();
  const [comprador, setComprador] = useState({ nombre: '', email: '', direccion: '', telefono: '' })

  useEffect(() => {
    if (localStorage.getItem('cart') !== null) {
      setProducto(JSON.parse(localStorage.getItem('cart')))
      console.log(localStorage.getItem('cart'));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(producto))
  }, [producto])

  // const isInCart = (id) => {
  //   return producto.findIndex(prod => prod.id === id)
  // }

  return (
    <CartContext.Provider value={{
      producto,
      setProducto,
      addCart,
      removeItem,
      clear,
      totalQuantity,
      totalFinal,
      ordenID,
      setOrdenID,
      comprador,
      setComprador
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;