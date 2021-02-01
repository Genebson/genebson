const style = {
  width: 120,
  height: 50,
  cursor: 'pointer',
  backgroundColor: 'green',
  marginTop: '10px'
}


const Add = ({ onAdd, counter }) => {
  return (
    <button {...{ style }} onClick={onAdd(counter)}>Agregar<i class="fas fa-shopping-cart"></i></button>
  );
}

export default Add;