import { useContext } from 'react';
import { useCartContext } from './CartContext';

const Cart = () => {

  const { list } = useCartContext

  return (
    <>{list.map((item, key) => (
      <div key={key}>
        {item.counter} Producto: {item.name}
      </div>
    ))}</>
  )
}

export default Cart;