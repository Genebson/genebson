import "./Navbar.css";
import { Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import CartWidget from '../cart/CartWidget'
import { Link } from 'react-router-dom';
const NavbarComponent = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand href="/"><img src="images/glogo.png" /></Navbar.Brand>
      </Link>
      <Nav className="mr-auto nav-menu">
        <Link to="/">
          <Nav href="/">Inicio</Nav>
        </Link>
        <Link to="/category/zapatillas">
          <Nav>Zapatillas</Nav>
        </Link>
        <Link to="/category/buzos">
          <Nav>Buzos</Nav>
        </Link>
        <Link to="/category/deportes">
          <Nav>Deportes</Nav>
        </Link>
        <Nav.Link href="#features">Ofertas</Nav.Link>
      </Nav>
      <NavLink to="/cart"><CartWidget /></NavLink>
    </Navbar >
  )
}
export default NavbarComponent;