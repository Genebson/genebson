import "./Navbar.css";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from '../context/CartWidget'

const NavbarComponent = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/"><img src="images/glogo.png" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto nav-menu">
          <Nav.Link href="/">Inicio</Nav.Link>
          <NavDropdown title="Categorías" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/category/zapatillas">Zapatillas</NavDropdown.Item>
            <NavDropdown.Item href="/category/buzos">Buzos</NavDropdown.Item>
            <NavDropdown.Item href="/category/deportes">Deportes</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#features">Ofertas</Nav.Link>
          <Nav.Link href="#help">Ayuda</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <CartWidget />
    </Navbar>
  )
}
export default NavbarComponent;