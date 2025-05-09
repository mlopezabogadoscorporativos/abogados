// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import iconEmpresa from './img/iconEmpresaLine3.png'
import iconEmpresaShort from './img/iconEmpresaLine4.png'
import "./header.css"
import { useSEO } from './hooks/useSEO';
import { useEffect, useState } from 'react';
import { Seo_list } from './hooks/seolistroutes';

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [position, setPosition] = useState(0);
  const listUrl = [
    "/home",
    "/nuestraempresa",
    "/servicios",
    "/normaslegales",
    "/contacto"
  ];

  useEffect(()=>{
    // se captura el patch de la url : (http://)origin/(patch)
    const urlPathech = window.location.href.replace(window.location.origin, "").split("/")
    // substrae todos los patch de la url
    const patch = urlPathech[urlPathech.length - 1]
    // substrae el item de la url
    const index = listUrl.reduce((acumul,itemAux,ind) =>{
      acumul = (itemAux.indexOf(patch) > -1)? ind : acumul
      return acumul
    }, [0])
    setPosition(index)
  },[position])

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useSEO(Seo_list[position]);

  const redireccion = (position) => {
    window.location.href = window.location.origin + listUrl[position];
    setPosition(position);
  }

  return (
    <Navbar expand="lg" className='contenedor_nav'>
      <Container fluid className='contenedor_nav_center'>
        <Navbar.Brand href="#">
          <img
            className='iconContainerAccionImage'
            src={(width > 720)?iconEmpresa:iconEmpresaShort}
            alt="Logo de Empresa mlopez" 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse 
          // style={{backgroundColor:"blue"}}
          id="navbarScroll"
        >
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link className='navitemusert' href="" onClick={()=>{redireccion(0)}}>Inicio</Nav.Link>
            <Nav.Link className='navitemusert' href="" onClick={()=>{redireccion(1)}}>Nuestra Empresa</Nav.Link>
            <Nav.Link className='navitemusert' href="" onClick={()=>{redireccion(2)}}>Servicios</Nav.Link>
            <NavDropdown className='navitemusert_drop' title="Novedades" id="navbarScrollingDropdown">
              {/* <NavDropdown.Item href="">Action</NavDropdown.Item> */}
              {/* <NavDropdown.Item className='navitemusert' onClick={()=>{redireccion(3)}} href="">
                Noticias Politicas
              </NavDropdown.Item>
              <NavDropdown.Divider /> */}
              <NavDropdown.Item className='navitemusert' onClick={()=>{redireccion(3)}} href="">
                Normas Legales
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='navitemusert'  href="">
                Politica
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='navitemusert' onClick={()=>{redireccion(4)}} href="">Contactos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
