import Carousel from 'react-bootstrap/Carousel';
// import car1 from './img/carousel-1.jpg';
// import car2 from './img/carousel-2.jpg';
import trasparent from './img/imagenTrasparente.png';
import trasparentH from './img/trasparenteHorizontal.png';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
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
              <h3 className='home_presentation_title'>Bienvenidos a nuestro corporativo MLOPEZ sac</h3>
              <p className='home_presentation_subtitle'>¡Saber en derecho, razón en justicia!.</p>
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
        <div className='home_containerConten home_phonehomeredimencion'>
          <div className='home_contenido_centrado'> 
            <div className='home_contenido_centrado_images'>
              <div className='home_contenido_centrado_images_img'></div>
            </div>
            <div className='home_contenido_centrado_infoButton'>
              <h5 className='subTitle'>conocenos</h5>
              <h3 className='titleExtense'>Brindamos servicios legales confiables y efectivos</h3>
              <h6 className='contenido_text'>
                Bienvenidos a nuestro Corporativo MLopez SAC, una empresa líder comprometida con brindar soluciones integrales en derecho, salud, educación y comunicación digital, impulsando el progreso y la transformación positiva de la sociedad peruana.
                Nuestro compromiso es ser referentes en servicios legales de alta calidad y responsabilidad social; en salud y educación, acercando atención médica, campañas preventivas y formación accesible; y en comunicación, liderando con HTVPerú la difusión de contenidos informativos que fomenten una ciudadanía activa y crítica.
                Nos guía la misión de consolidarnos como una empresa modelo en la región Piura y el país, destacándonos por nuestra ética, responsabilidad y el impacto social positivo en cada una de nuestras áreas de acción.
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
                En Firma Legal - MLópez & Abogados Asesores, defendemos tus derechos con ética y profesionalismo. Contamos con especialistas en asesoría empresarial y defensa técnica material, protegiendo lo que más te importa: tus derechos. ¡Saber en derecho, razón en justicia!
                Además, a través de HTVPerú, nuestro canal en vivo, ofrecemos contenidos informativos y de entretenimiento de calidad, conectando a la comunidad peruana con noticias, cultura y eventos relevantes, promoviendo una ciudadanía activa y bien informada.
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
      </>
  );
}

export default Home;
