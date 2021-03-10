import { Link } from 'react-router-dom';
import "./FavoritesWidget.css"
import { useCartContext } from "../../context/CartContext";

const Favorites = () => {
  const { producto, totalQuantity } = useCartContext();
  return (
    <Link to='/favorites'><i className="fas fa-bookmark"></i>
      {producto.length > 0 && (<span className="count-products">({totalQuantity()})</span>)}
    </Link>
  );
};

export default Favorites;