import { Button } from 'react-bootstrap';

const style = {
  width: 300,
  height: 50,
  cursor: 'pointer',
  marginTop: '10px'
}


const Add = ({ onAdd, counter }) => {
  return (
    <Button variant="danger" {...{ style }} onClick={onAdd(counter)}>Agregar al Carrito</Button >
  );
}

export default Add;