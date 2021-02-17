import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import './Item.css';
import Notification from '../../notification/Notification';
import { Link } from 'react-router-dom';
// { seAgregoProducto ? <TerminarCompra /> : <AgregarAlCarrito /> }

const Item = ({ detail: { name, img, price, cuotas, cantidad, description, id } }) => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)

  const preventJump = (e) => {
    e.preventDefault();
    return false
  }

  return (

    <Container>
      <Row>
        <Col lg={8}>
          <Card style={{ width: '20rem' }}>
            <div onClick={handleClick}>
              <a href="#"><i onClick={preventJump} className={click ? 'fas fa-heart' : 'far fa-heart'} ></i></a>
            </div>
            <Link>
              <Card.Img className="card-img" variant="top" src={img} />
            </Link>
            <Card.Body className="card-body">
              <Card.Title className="card-title">{name}</Card.Title>
              <Card.Text className="card-description">{description}</Card.Text>
              <Card.Title className="card-price">${price}</Card.Title>
              <Card.Text className="card-cuota">{cuotas}</Card.Text>
              <Link to={`/item/${id}`}>
                <Button className="btn-cart" variant="danger" >Detalles</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container >

  );
};

export default Item;