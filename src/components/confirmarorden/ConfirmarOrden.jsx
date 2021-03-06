import { useContext } from 'react';
import { CartContext } from './../../context/CartContext';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ConfirmarOrden = () => {

  const { comprador, ordenID } = useContext(CartContext)

  return (
    <div className="container">
      <div className="row mt-sm-4">
        <div className="col-12 my-4 text-center">
          <h3 className="mb-4">¡Su orden fue confirmada!</h3>
          <p className="lead mb-4">¡Muchas gracias por elegirnos <strong>{comprador.nombre}</strong>!<br />
          Su orden fue confirmada satisfactoriamente y hemos enviado un mail de confirmacion a:<br />
            <br />{comprador.email}<br /><br />El codigo de su orden es:</p>
          <h3 className="mb-4 text-primary">{ordenID}</h3>
        </div>

        <div className="col-12 text-center">
          <Link to="/"><Button className="btn btn-secondary mr-sm-4">Volver al Home</Button></Link>
        </div>

      </div>
    </div>
  );
};

export default ConfirmarOrden;