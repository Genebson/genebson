const style = {
  width: 50,
  height: 50,
  marginTop: '25px',
  cursor: 'pointer'
}

const Button = ({ suma, onClick, counter, setCounter }) => {

  let sign = suma ? '+' : '-';

  let amount = suma ? (counter + 1) : (counter - 1);

  return (
    <button onClick={onClick(amount)}{...{ style }}>{sign}</button >
  );
}

export default Button;