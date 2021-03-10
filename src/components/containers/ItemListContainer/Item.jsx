import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

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
        <Col className="lg-4">
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