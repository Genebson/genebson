import "./CartWidget.css";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { producto, totalQuantity } = useCartContext();
  return (
    <Link to='/cart'><i className="fas fa-shopping-cart"></i>
      {producto.length > 0 && (<span className="count-products">({totalQuantity()})</span>)}
    </Link>
  );
};

export default CartWidget;