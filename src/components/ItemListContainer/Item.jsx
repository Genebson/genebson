import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Item.css'
import ItemCount from '../counter/ItemCount';

const Item = ({ detail: { name, img, price, cuotas, stock, description } }) => {

  // let cantidad = 15

  // const handleAdd = (counter) => {
  //   return () => {
  //     alert(`Se han agregado ${counter} productos`)
  //   }
  // }

  // { seAgregoProducto ? <TerminarCompra /> : <AgregarAlCarrito /> }


  return (
    <Container>
      <Row>
        <Col lg={2}>
          <Card style={{ width: '20rem' }}>
            <a href="#"><i class="far fa-heart"></i></a>
            <Card.Img className="card-img" variant="top" src={img} />
            <Card.Body className="card-body">
              <Card.Title className="card-title">{name}</Card.Title>
              <Card.Text className="card-description">{description}</Card.Text>
              <Card.Title className="card-price">${price}</Card.Title>
              <Card.Text className="card-cuota">{cuotas}</Card.Text>
              <Button className="btn-cart" variant="danger">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

  );
};

export default Item;