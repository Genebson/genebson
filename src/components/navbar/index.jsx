import "./Navbar.css";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const NavbarComponent = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home"><img src="images/glogo.png" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto nav-menu">
          <NavDropdown title="Categorías" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Tecnología</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Moda</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Hogar y Electrodomésticos</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#features">Ofertas</Nav.Link>
          <Nav.Link href="#pricing">Ayuda</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <CartWidget />
    </Navbar>
  )
}
export default NavbarComponent;