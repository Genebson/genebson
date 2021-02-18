import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import ItemCount from './components/counter/ItemCount';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {

  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route exact path='/'>
          <ItemListContainer />
        </Route>
        <Route exact path='category/:id'>
          <ItemListContainer />
        </Route>
        <Route exact path='/item/:id'>
          <ItemDetailContainer />
        </Route>
        <Route path='*' children={<div>404 Not Found</div>} />
      </Switch>
    </Router>
  );
}

export default App;
