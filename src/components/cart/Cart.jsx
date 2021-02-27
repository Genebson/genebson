import { useCartContext } from '../../context/CartContext';

const Cart = () => {

  const { producto } = useCartContext()

  return (
    <>
      {producto.map((item, key) => (
        <div key={key}>
          {item.counter} Nombre del Producto: {item.name}
          Precio: {item.price}
        </div>
      ))}
    </>
  )
}

export default Cart;