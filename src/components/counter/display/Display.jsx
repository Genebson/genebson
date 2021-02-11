import { Button } from 'react-bootstrap'

const style = {
  width: 50,
  height: 50,
  backgroundColor: 'white',
  margin: '25px auto',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '500px',
  color: 'black'
}

const Display = ({ valor }) => {
  return (
    <Button variant="outline-secondary" className="display"{...{ style }}>{valor}</Button>
  );
}

export default Display;

