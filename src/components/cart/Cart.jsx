import { useCartContext } from '../../context/CartContext';

const Cart = () => {

  const { producto } = useCartContext()

  return (
    <>
      {producto.map((item, key) => (
        <div key={key}>
          <tr>
            <td>
              <img src={item.img} />
            </td>
            <td>
              Cantidad: {item.counter}
            </td>
            <td>
              Nombre del Producto: {item.name}
            </td>
            <td>
              Precio: ${item.price}
            </td>
          </tr>
        </div>
      ))}
    </>
  )
}

export default Cart;