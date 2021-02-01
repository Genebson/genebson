import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/counter/ItemCount'

const App = () => {

  let stock = 15

  const handleAdd = (counter) => {
    return () => {
      alert(`Se han agregado ${counter} productos`)
    }
  }

  return (
    <>
      <NavbarComponent />
      <ItemListContainer greeting={"Bienvenidos a todos!"} />
      <ItemCount onAdd={handleAdd} stock={stock} inicial={1} />
    </>
  );
}

export default App;
