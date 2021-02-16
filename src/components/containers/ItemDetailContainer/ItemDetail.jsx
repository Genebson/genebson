import Item from '../ItemListContainer/Item';
import ItemCount from '../../counter/ItemCount';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ItemDetail.css';
import Add from '../../counter/add/Add';

const ItemDetail = ({ counter }) => {

  let cantidad = 15

  const handleAdd = (counter) => {
    return () => {
      alert(`Se han agregado ${counter} productos`)
    }
  }

  return (


    <div className="app">
      <div className="details">
        <div className="big-img">
          <img src="https://i.ibb.co/ZgRVYj9/air1.jpg" />
        </div>
        <div className="box">
          <div className="row">
            <h2>NIKE AIRFORCE 1</h2>
            <ItemCount onAdd={handleAdd} cantidad={cantidad} inicial={1} />
            <span>$550</span>
          </div>
          <div className="colors">
            <Button variant="danger" className="btn-colors"></Button>
            <Button variant="info" className="btn-colors"></Button>
            <Button variant="dark" className="btn-colors"></Button>
            <Button variant="warning" className="btn-colors"></Button>
          </div>
          <p>NIKE SPORTWEAR AIR FORCE PARA MUJER</p>
          <div className="thumb">
            <img src="https://i.ibb.co/ZgRVYj9/air1.jpg" className="active" />
            <img src="https://i.ibb.co/ZgRVYj9/air1.jpg" />
            <img src="https://i.ibb.co/ZgRVYj9/air1.jpg" />
            <img src="https://i.ibb.co/ZgRVYj9/air1.jpg" />
          </div>
          {/* <Button variant="danger" className="btn-cart">Agregar al Carrito</Button> */}
          <Button variant="danger" onClick={handleAdd(counter)}>Agregar al Carrito</Button >
        </div>
      </div>
    </div>

  );
};

export default ItemDetail;