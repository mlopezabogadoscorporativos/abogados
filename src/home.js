import Carousel from 'react-bootstrap/Carousel';
import car1 from './img/carousel-1.jpg';
import car2 from './img/carousel-2.jpg';
import trasparent from './img/imagenTrasparente.png';
import trasparentH from './img/trasparenteHorizontal.png';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState, useEffect } from "react";
// import DatePicker from '../src/DatePicket';
import './home.css';
import { getServisios } from './rotes_Api/servicios';
import FormCorreoServices from './form_corre_send/formcorreosend';
import { getEquipos } from './rotes_Api/equipo';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function CardService(props) {
  return (
    <div className='contenedor_item_cardboard'>
      <div className='contenedor_item_cardboard_image'>
        <i className={props.icon}></i>
      </div>
      <h5 className='subTitle' style={{color: "white"}}>{props.nombre}</h5>
    </div>
  );
}

function CardPersonal(props) {
  return (
    <div className='contenedor_item_cardboard_person'>
      <div className='contenedor_title_person'>
        <h5 className='subTitle'>{props.nombre}</h5>
        <h6 className='contenido_text' style={{color: "white"}}>{props.cargo}</h6>
      </div>
      <div className='image_person_card' style={{backgroundImage: `url("${props.urlImage}")`}} >
      </div>
    </div>
  );
}

const groupByPars = (array = [], pars = 2 ) => {
  const arrayfinal = {}
  for (let i = 0; i < array.length; i++) {

    const codePars = parseInt(i / pars , 10)
    const valueInsert = Object.keys(arrayfinal).filter((item) => item == codePars).length > 0

    if (valueInsert) {
      // console.log([...arrayfinal[`${codePars}`]].push(array[i]))
      arrayfinal[`${codePars}`].push(array[i])
    }else{
      arrayfinal[`${codePars}`] = [array[i]]
    }
  }

  // console.log(arrayfinal)
  return arrayfinal
}

function Home() {

  const [width, setWidth] = useState(window.innerWidth);
  // Servicios--------------------------------------------
  const [dataServicios, setDataServicios] = useState([
    {id: 8, icon: "bi bi-percent", title: "Ejecución de garantías",descripccionBrev: ""},
  ]);
  const [dataServiciosGroup, setdataServiciosGroup] = useState({0:[],1:[]});
  // Equipos----------------------------------------------
  const [dataEquipos, setDataEquipos] = useState([
    {id: 5, nombre: "ALEJANDRA GARCÍA", cargo:"abogado" ,urlImage: "https://res.cloudinary.com/dhxefh3r2/image/upload/v1746217976/pswws5me9psnzzxbb1ja.jpg"},
  ]);
  const [dataEquiposGroup, setdataEquiposGroup] = useState({0:[],1:[]});

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
      const data = getServisios();
      setDataServicios(data);
      setdataServiciosGroup(groupByPars(data, 2));
      return () => {}
  }, []);

  useEffect(() => {
      const data = getEquipos();
      setDataEquipos(data);
      setdataEquiposGroup(groupByPars(data, 4));
      return () => {}
  }, []);


  return (
      <>
        {/* Carrousel Informativo */}
        <Carousel>
          <Carousel.Item>
            {/* <div className='boxShadow'></div> */}
            <div className='home_presentation_image'></div>
            <Carousel.Caption className='box'>
              <h3 className='home_presentation_title'>Bienvenidos a nuestra empresa MLOPEZ ABOGADOS sac</h3>
              <p className='home_presentation_subtitle'>Con 10 años de trayectoria, orintada a lograr satisfacer la nesecidad del cliente.</p>
              <a className='home_presentation_button' href='#servicios'>Nuestros Servicios</a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <div className='boxShadow'></div> */}
            <div className='home_presentation_image'></div>
            <Carousel.Caption className='box'>
              <h3 className='home_presentation_title'>Consulta con nuestro staff de abogados</h3>
              <p className='home_presentation_subtitle'>Contamos con profecionales, altamente capacitados en distintas ramas de las leyes.</p>
              <a className='home_presentation_button' href='#conocenos'>Conocenos</a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* informacion de la empresa */}
        <div className='home_containerConten phonehomeredimencion'>
          <div className='home_contenido_centrado'> 
            <div className='home_contenido_centrado_images'>
              <div className='home_contenido_centrado_images_img'></div>
            </div>
            <div className='home_contenido_centrado_infoButton'>
              <h5 className='subTitle'>Learn About Us</h5>
              <h3 className='titleExtense'>Brindamos servicios legales confiables y efectivos</h3>
              <h6 className='contenido_text'>
                Nuestra empresa CORPORATIVO MLOPEZ S.A.C, es una persona jurídica de derecho 
                privado, promotora del Estudio Jurídico « MLÓPEZ ABOGADOS – ASESORES & CONSULTORES 
                » Cuyo objeto social, es la prestación de servicios de asesoría legal y defensa 
                técnica material, en asuntos empresariales, comerciales, tributarios, laborales.
              </h6>
            </div>
          </div>
        </div>
        {/* Video de presentacion */}
        <section className='home_containerConten'>
          <div className='home_containerConten_video'>
            <h5 className='subTitle' style={{color: "white"}}>Nuestras Empresa</h5>
            <h3 className='titleExtense' style={{color: "white"}}>Conocenos un poco mas</h3>
            <iframe 
              className='responsive_iframe_home_container'
              src="https://www.youtube.com/embed/8q2zyhShODk?si=Aump79HwSqqzSVbS" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
            </iframe>
          </div>
        </section>
        {/* Informacion de los servicios */}
        <section id='servicios' className='home_containerConten rediraction'>
          <div className='home_carrousel_info_container'>
              {/* <h5 className='subTitle'>Nuestros Servicios</h5> */}
              <h3 className='titleExtense'>Nuestros Servicios</h3>
              <h6 className='contenido_text' style={{maxWidth: "90%"}}>
                Brindamos asesoramiento integral en el desarrollo de habilitaciones urbanas.
                Aseguramos que cada proyecto cumpla con la normativa vigente.
                Gestionamos permisos, licencias y trámites administrativos.
              </h6>
          </div>
          <div className='home_carrousel_container'>
            <div className='diseno_conteinerFlotant'></div>
            {(width > 720)?
              <Carousel className='upbutton'>
                {Object.keys(dataServiciosGroup).map((item)=>{
                return (
                  <Carousel.Item>
                    {/* <div className='boxShadow'></div> */}
                    <img
                      className="d-block w-100"
                      src={trasparent}
                      alt="Image One"
                      style={{objectFit:"cover"}}
                    />
                    <Carousel.Caption className='box'>
                      <div className='contenedor_subIten_carrousel'>
                        {dataServiciosGroup[item].map((itemCard,ind)=>{
                          return (<>
                            <CardService 
                              nombre= {itemCard.title} 
                              icon={itemCard.icon}
                            />
                            {(ind == (dataServiciosGroup[item].length - 1))?<></>:<div style={{width: "40px"}}></div>}
                          </>)
                        })}
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            {/* ------------------------------------------------------------------------------------ */}
            </Carousel>: <Carousel className='upbutton'>
            {/* ------------------------------------------------------------------------------------ */}
              {dataServicios.map((item)=>{
                return (
                  <Carousel.Item>
                    {/* <div className='boxShadow'></div> */}
                    <img
                      className="d-block w-100"
                      src={trasparentH}
                      alt="Image One"
                      style={{objectFit:"cover"}}
                    />
                    <Carousel.Caption className='box'>
                      <div className='contenedor_subIten_carrousel'>
                        <CardService 
                          nombre= {item.title} 
                          icon={item.icon}
                        />
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
              {/* ------------------------------------------------------------------------------------ */}
            </Carousel>}
          </div>
        </section>
        {/* informacion del personal de la empresa */}
        <section id='conocenos' className='home_containerConten_C'>
          <div className='home_carrousel_info_container_person'>
              {/* <h5 className='subTitle'>Nuestros abogados</h5> */}
              <h3 className='titleExtense'>Nuestros abogados</h3>
          </div>
          <div className='home_carrousel_container_person'>
            <div className='diseno_conteinerFlotant_person'></div>
            {(width > 720)?<Carousel className='upbutton' id=''>
                {/* .................................................................... */}
                {Object.keys(dataEquiposGroup).map((item)=>{
                    return (
                      <Carousel.Item>
                          {/* <div className='boxShadow'></div> */}
                          <img
                              className="d-block w-100"
                              src={trasparent}
                              alt="Image One"
                              style={{objectFit:"cover"}}
                          />
                          <Carousel.Caption className='box'>
                              <div className='contenedor_subIten_carrousel_person'>
                                  {dataEquiposGroup[item].map((itemCard,ind)=>{
                                      return (<>
                                        <CardPersonal
                                            nombre={itemCard.nombre} 
                                            cargo={itemCard.cargo} 
                                            urlImage={itemCard.urlImage}
                                        />
                                        {(ind == (dataEquiposGroup[item].length - 1))?<></>:<div style={{width: "40px"}}></div>}
                                      </>);
                                  })}
                              </div>
                          </Carousel.Caption>
                      </Carousel.Item>
                    );
                })}
                {/* .................................................................... */}
                </Carousel>:<Carousel className='upbutton' id=''>
                {/* .................................................................... */}
                {dataEquipos.map((item)=>{
                    return (
                      <Carousel.Item>
                      {/* <div className='boxShadow'></div> */}
                      <img
                          className="d-block w-100"
                          src={trasparentH}
                          alt="Image One"
                          style={{objectFit:"cover"}}
                      />
                          <Carousel.Caption className='box'>
                              <div className='contenedor_subIten_carrousel_person'>
                                  <CardPersonal 
                                     nombre={item.nombre}
                                     cargo={item.cargo}
                                     urlImage={item.urlImage}
                                  />
                              </div>
                          </Carousel.Caption>
                      </Carousel.Item>
                    );
                })};
                {/* .................................................................... */}
            </Carousel>}
          </div>
        </section>
        <div style={{height: "40px"}}></div>
        {/* contactarse con la empresa */}
        <FormCorreoServices />
        {/* <div className='home_containerConten_C'>
          <div className='home_form_image_degrade'>
            <div className='home_form_container_mail'>
               <h3>
               Obtenga una cita
               </h3>
               <Container>
                <Row>
                 <Col><Form.Control type="text" placeholder="Nombre" /></Col>
                </Row>
                <div style={{height:"10px"}}></div>
                <Row>
                 <Col><Form.Control type="text" placeholder="Correo" /></Col>
                </Row>
                <div style={{height:"10px"}}></div>
                <Row>
                 <Col>
                  <Form.Select aria-label="Default select example">
                    <option>Selecciona el Servicio</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                 </Col>
                </Row>
                <div style={{height:"10px"}}></div>
                <Row>
                 <Col><Form.Control as="textarea" aria-label="With textarea" /></Col>
                </Row>
                <div style={{height:"10px"}}></div>
                <Row>
                 <Col><Button className='boton_envio_email' >Enviar</Button></Col>
                </Row>
                <div style={{height:"10px"}}></div>
              </Container>

            </div>
          </div>
        </div> */}
      </>
  );
}

export default Home;
