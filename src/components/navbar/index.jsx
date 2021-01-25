// import logo from 'src/logo.svg';
// import '../src/App.css';
import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"

const NavbarComponent = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img src="images/glogo.png" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Ropa</a></li>
                <li><a className="dropdown-item" href="#">Juguetes</a></li>
                <li><a className="dropdown-item" href="#">Tecnología</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ofertas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Quiénes Somos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ayuda</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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