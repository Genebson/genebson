import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar/';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
      <NavbarComponent />
      <ItemListContainer greeting={"Bienvenidos a todos!"} />
    </>
  );
}

export default App;
