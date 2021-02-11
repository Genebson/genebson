import { Button } from 'react-bootstrap';

const style = {
  width: 50,
  height: 50,
  marginTop: '25px',
  cursor: 'pointer',
  fontWeight: '900',
}


const Buttons = ({ suma, onClick, counter }) => {

  let sign = suma ? '+' : '-';

  let amount = suma ? (counter + 1) : (counter - 1);

  return (
    <Button variant="danger" onClick={onClick(amount)}{...{ style }}>{sign}</Button >
  );
}

export default Buttons;