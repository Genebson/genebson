import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./Cart.css";

const Cart = () => {

  const { producto, removeItem, clear } = useCartContext()

  const totalFinal = producto.reduce((prev, next) => {
    return prev + (next.counter * next.price)
  }, 0)

  // const handleRemoveItem = () => {
  //   removeItem(producto.item.id);
  // }

  return (
    producto.length === 0 ?
      <div>
        <div className="sticky-top bg-light">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <h2 className="text-center">Su carrito</h2>
            </div>
            <div className="col-1 d-flex align-items-center justify-content-center">
            </div>
          </div>
        </div>
        <div className="container p-5">
          <h5 className="mb-5 text-center">Su carrito está vacio</h5>
          <div className="row justify-content-center">
            <Link to="/">
              <Button variant="danger" className="btn-cart-back">Volver al Inicio</Button>
            </Link>
          </div>
        </div>
      </div>

      :

      <div>
        <div className="sticky-top bg-light">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <h2 className="text-center">Su carrito</h2>
            </div>
            <div className="col-1 d-flex align-items-center justify-content-center">
              {/* <button type="button" className="close" onClick={() => setCartModal(false)}>
                <span>&times;</span>
              </button> */}
            </div>
          </div>
        </div>
        <div className="container p-5">
          <h5 className="mb-5 text-center">Los productos en su carrito son:</h5>
          {producto.map((producto, index) => {
            return <div className="row border rounded my-4 p-4" key={index}>
              <div className="col-4">
                <img src={producto.img} className="img-fluid" alt={producto.name}
                  style={{ filter: `${producto.image}` }} width="180" />
              </div>
              <div className="col-4 d-flex align-items-center">
                <dl className="text-left">
                  <dd className="font-weight-bold">Nombre: {producto.name}</dd>
                  <dd>Precio Unitario: ${producto.price}</dd>
                  <dd>Cantidad: {producto.counter}</dd>
                </dl>
              </div>
              <div className="col-2 d-flex align-items-center">
                <span className="font-italic">Subtotal: ${producto.counter * producto.price}</span>
              </div>
              <div className="col-2 d-flex align-items-center justify-content-center">
                <Button variant="danger" onClick={() => removeItem(producto)}>
                  <span aria-hidden="true">&times;</span>
                </Button>
              </div>
            </div>
          })}
          <div className="row justify-content-end mb-3">
            <h4>Total: ${totalFinal}</h4>
          </div>
          <div className="row justify-content-end">
            <button className="btn btn-secondary mr-1" onClick={() => clear()}>Vaciar Carrito</button>
            <Button variant="danger">Ir a Checkout</Button>
          </div>
        </div>
      </div>
  )
}

export default Cart;