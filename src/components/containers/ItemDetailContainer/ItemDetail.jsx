import Item from '../ItemListContainer/Item';
import ItemCount from '../../counter/ItemCount';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ItemDetail.css';

const ItemDetail = ({ counter, detail }) => {

  let cantidad = 15

  const handleAdd = () => {
    return () => {
      alert(`Se han agregado ${counter} productos`)
    }
  }

  return (

    <div className="app">
      <div className="details">
        <div className="big-img">
          <img src={detail.img} />
        </div>
        <div className="box">
          <div className="row">
            <h2>{detail.name}</h2>
            <ItemCount onAdd={handleAdd} cantidad={cantidad} inicial={1} />
            <span>{detail.price}</span>
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
          <Button variant="danger" onClick={handleAdd(counter)}>Agregar al Carrito</Button >
        </div>
      </div>
    </div>

  );
};

export default ItemDetail;