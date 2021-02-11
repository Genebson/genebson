import { Button } from 'react-bootstrap'

const style = {
  width: 50,
  height: 50,
  // backgroundColor: 'grey',
  margin: '25px auto',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '500px'
}

const Display = ({ valor }) => {
  return (
    <Button variant="dark" className="display"{...{ style }}>{valor}</Button>
  );
}

export default Display;

