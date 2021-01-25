import "./Navbar.css"
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

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
    </Navbar>
  )

  // const [click, setClick] = useState(false)

  // // Establezco el valor opuesto del clicked cada vez que hacen click

  // const clickOpuesto = () => setClick(!click)
  // return (
  //   <>
  //     <nav classNameName="NavbarItems">
  //       <img classNameName="navbar-logo" src="images/glogo.png" />
  //       <div classNameName="menu-icon" onClick={clickOpuesto}>
  //         <i classNameName={click ? 'fas fa-times' : 'fas fa-bars'}></i>
  //       </div>
  //       <ul classNameName={click ? 'nav-menu active' : 'nav-menu'}>
  //         {MenuItems.map((item, index) => {
  //           return (
  //             <li key={index}>
  //               <a classNameName={item.cName} href={item.url}>
  //                 {item.title}
  //               </a>
  //             </li>
  //           )
  //         })}
  //       </ul>
  //     </nav>
  //   </>
  // );
  // // }
}

export default NavbarComponent;