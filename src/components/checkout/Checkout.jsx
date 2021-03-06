import { useCartContext } from '../../context/CartContext';
import firebase from 'firebase';
import { getFirestore } from '../../firebase/firebase';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Checkout = () => {

  const {
    producto,
    setProducto,
    removeItem,
    totalFinal,
    setOrdenID,
    comprador,
    setComprador } = useCartContext();

  const confirmarOrden = () => {
    let nuevaOrden = {
      comprador: comprador,
      producto: [...producto],
      date: firebase.firestore.Timestamp.fromDate(new Date()).toDate(),
      total: totalFinal
    }

    const baseDeDatos = getFirestore();
    const OrdersCollection = baseDeDatos.collection('ORDERS')
    OrdersCollection.add(nuevaOrden).then((value) => {
      setOrdenID(value.id)
    })
    setProducto([])
  }


  return (
    <div className="container-fluid">
      <div className="row mx-sm-4">
        <div className="col-12 col-sm-6 mt-3 mt-sm-4">
          <div className="container px-sm-5">
            <h4 className="mb-4">Datos del Cliente</h4>
            <div className="form-group">
              <label>Nombre y Apellido</label>
              <input type="text" className="form-control mb-3 text-left" id="customerName" onChange={(e) => setComprador({ ...comprador, nombre: e.target.value })} />
              <label>E-mail</label>
              <input type="email" className="form-control mb-3 text-left" id="customerEmail" placeholder="tuemail@email.com" onChange={(e) => setComprador({ ...comprador, email: e.target.value })} />
              <label>Domicilio</label>
              <input type="text" className="form-control mb-3 text-left" id="customerAddress" onChange={(e) => setComprador({ ...comprador, direccion: e.target.value })} />
              <label>Teléfono</label>
              <input type="number" className="form-control mb-3 text-left" id="customerPhone" onChange={(e) => setComprador({ ...comprador, telefono: e.target.value })} />
            </div>
          </div>

        </div>

        <div className="col-12 col-sm-6 mt-3 mt-sm-4">

          <div className="container px-sm-5">
            <h4 className="mb-5">Su listado de productos:</h4>
            {producto.map((producto, index) => {
              return <div className="row border my-2 py-1" key={index}>
                <div className="col-12 col-sm-3 text-center">
                  <img src={producto.img} className="img-fluid" alt={producto.name} style={{ filter: `${producto.image}` }} width="180" />
                </div>
                <div className="col-12 col-sm-4 d-flex align-items-end justify-content-center">
                  <dl className="text-center text-sm-left">
                    <dd className="font-weight-bold">Nombre: {producto.name}</dd>
                    <dd>Precio Unitario: ${producto.price}</dd>
                    <dd>Cantidad: {producto.counter}</dd>
                  </dl>
                </div>
                <div className="col-12 col-sm-4 d-flex align-items-center justify-content-center mb-2">
                  <span className="font-italic">Subtotal: ${producto.counter * producto.price}</span>
                </div>
                <div className="col-12 col-sm-1 d-flex align-items-center justify-content-end mb-2">
                  <Button variant="danger" onClick={() => removeItem(producto)}>
                    <span aria-hidden="true">&times;</span>
                  </Button>
                </div>
              </div>
            })}
            <div className="row justify-content-center justify-content-sm-end my-4 my-sm-3">
              <h4 className="mt-2">Total: ${totalFinal}</h4>
            </div>
          </div>
        </div>
        <div className="col-12 my-2">
          <div className="container-fluid d-flex justify-content-sm-end">
            <Link to="/confirmarorden"><button className="btn btn-primary mr-4" onClick={() => confirmarOrden()}>Confirmar Compra</button></Link>
            <Link to="/"><button className="btn btn-secondary mr-sm-4">Seguir Comprando</button></Link>
          </div>
        </div>
      </div>
    </div >
  )
};

export default Checkout;