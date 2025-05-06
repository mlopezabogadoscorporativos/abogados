// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./header.css"

function Header() {

  const listUrl = [
    "/home",
    "/equipo",
    "/servicios",
    "/contacto"
  ];

  const redireccion = (position) => {
    window.location.href = window.location.origin + listUrl[position];
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            style={{width:"150px", height:"70px"}} 
            src="https://mlopezabogados.com.pe/wp-content/uploads/2025/02/cropped-logo-m_Capa-1-scaled-1.jpg" 
            alt="Logo de HTML5" 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse 
          // style={{backgroundColor:"blue"}}
          id="navbarScroll"
        >
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{  maxHeight: '100px', backgroundColor:"red" }}
            navbarScroll
          >
            <Nav.Link className='navitemusert' href="" onClick={()=>{redireccion(0)}}>Inicio</Nav.Link>
            <Nav.Link className='navitemusert' href="" onClick={()=>{redireccion(1)}}>Equipo</Nav.Link>
            <Nav.Link className='navitemusert' href="" onClick={()=>{redireccion(2)}}>Servicios</Nav.Link>
            <NavDropdown className='navitemusert_drop' title="Novedades" id="navbarScrollingDropdown">
              {/* <NavDropdown.Item href="">Action</NavDropdown.Item> */}
              <NavDropdown.Item className='navitemusert'  href="">
                NormasLegales
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='navitemusert'  href="">
                Politica
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='navitemusert' onClick={()=>{redireccion(3)}} href="">Contactos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
