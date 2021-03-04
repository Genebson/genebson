import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import ItemListCategory from './components/containers/ItemListContainer/ItemListCategory';
import CartContextProvider from './context/CartContext';
import Cart from './components/cart/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {

  return (
    <Router>
      <CartContextProvider>
        <NavbarComponent />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer />
          </Route>
          <Route exact path='/category/:categoryId'>
            <ItemListContainer />
          </Route>
          <Route exact path='/item/:id'>
            <ItemDetailContainer />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route path='*' children={<div>404 Not Found</div>} />
        </Switch>
      </CartContextProvider>
    </Router>
  );
}

export default App;
