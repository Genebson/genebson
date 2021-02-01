const style = {
  width: 50,
  height: 50,
  backgroundColor: 'white',
  margin: '5px auto',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '500px'
}

const Display = ({ valor }) => {
  return (
    <div className="display"{...{ style }}>{valor}</div>
  );
}

export default Display;

