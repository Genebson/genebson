import { Button } from 'react-bootstrap';

const style = {
  // width: 400,
  // height: 50,
  cursor: 'pointer',
  marginTop: '360px',
  marginRight: '00px'
}


const Add = ({ onAdd, counter }) => {
  return (
    <Button variant="danger" {...{ style }} onClick={onAdd(counter)}>Agregar al Carrito</Button >
  );
}

export default Add;