import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/counter/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const App = () => {

  let cantidad = 15

  const handleAdd = (counter) => {
    return () => {
      alert(`Se han agregado ${counter} productos`)
    }
  }

  return (
    <>
      <NavbarComponent />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  );
}

export default App;
