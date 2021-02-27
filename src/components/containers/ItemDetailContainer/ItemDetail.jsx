import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ItemCount from '../../counter/ItemCount';
import './ItemDetail.css';
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

const ItemDetail = ({ detail, inicial }) => {

  const [seAgregoProducto, setSeAgregoProducto] = useState(false)
  let [counter, setCounter] = useState(inicial);
  const { addCart, producto } = useContext(CartContext)

  let cantidad = 15

  const handleAdd = (counter) => {
    return () => {
      alert(`Se han agregado ${counter} productos`)
      setSeAgregoProducto(true)
      addCart({ id: detail.id, name: detail.name, price: detail.price, cantidadProductos: counter })
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
            {seAgregoProducto ? <Link to='/cart'><Button variant="success">Terminar Compra <i class="fas fa-check"></i></Button></Link>
              : <ItemCount onAdd={handleAdd} cantidad={cantidad} inicial={1} counter={counter} setCounter={setCounter} />}
            <span>{detail.price}</span>
          </div>
          <div className="colors">
            <Button variant="danger" className="btn-colors"></Button>
            <Button variant="info" className="btn-colors"></Button>
            <Button variant="dark" className="btn-colors"></Button>
            <Button variant="warning" className="btn-colors"></Button>
          </div>
          <p>{detail.description}</p>
          <div className="thumb">
            <img src="https://i.ibb.co/5TtD4J1/air2.jpg" className="active" />
            <img src="https://i.ibb.co/7JrWtp7/air3.jpg" />
            <img src="https://i.ibb.co/JyfSn6b/air4.jpg" />
            <img src="https://i.ibb.co/VtgzQRN/air5.jpg" />
          </div>
          {/* <Button variant="danger" onClick={handleAdd(counter)}>Agregar al Carrito</Button > */}
        </div>
      </div>
    </div>

  );
};

export default ItemDetail;