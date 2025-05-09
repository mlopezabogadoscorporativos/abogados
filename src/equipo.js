import { Carousel, Col, ListGroup, Nav, Row, Tab } from 'react-bootstrap';
import './equipo.css';
import trasparent from './img/imagenTrasparente.png';
import trasparentH from './img/trasparenteHorizontal.png';
import { useEffect, useState } from 'react';
import { getEquipos } from './rotes_Api/equipo';
// https://www.youtube.com/watch?v=bhMUcU3LXHg

function CardPersonal(props) {
    return (
      <div className='contenedor_item_cardboard_person'>
        <div className='contenedor_title_person'>
          <h5 className='subTitle'>{props.nombre}</h5>
          <h6 className='contenido_text_person' style={{color: "white"}}>{props.cargo}</h6>
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

function Equipo() {
    const [width, setWidth] = useState(window.innerWidth);
    //---------------------------------------------------------------------------------------
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
        const data = getEquipos();
        setDataEquipos(data);
        setdataEquiposGroup(groupByPars(data, 4));
        return () => {}
    }, []);
    
    return (
      <>
        <div className='equipo_containerConten' style={{height: "300px"}}>
            <div className='equipo_infoTitle_container'>
                <h3 className='title_infoTile_equipo'>Nuestra Empresa</h3>
                <h5 className='subtitle_infoTile_equipo'>Inicio - Conocenos</h5>
            </div>
        </div>
        <div className='equipo_containerConten equipo_phonehomeredimencion'>
            <div className='equipo_contenido_centrado'> 
                <div className='equipo_contenido_centrado_image'>
                    <div className='equipo_contenido_centrado_images_img'></div>
                </div>
                <div className='equipo_contenido_centrado_infoButton'>
                    <h5 className='subTitle_equipo'>Aprende Sobre Nosotros</h5>
                    <h3 className='titleExtense_equipo'>Nuestra empresa CORPORATIVO MLOPEZ S.A.C</h3>
                    <h6 className='contenido_text_equipo'>
                        Cuyo objeto social, es la prestación de servicios de asesoría legal y defensa 
                        técnica material, en asuntos empresariales, comerciales, tributarios, laborales, 
                        civiles, ejecución de garantías, obligaciones de hacer y no hacer, en asuntos penales, 
                        delitos contra el patrimonio, contra la libertad personal en general, contra la salud, 
                        la familia, la administración publica, contratos, constitución de empresas, asociaciones, 
                        fundaciones, ONGs, registro de marcas-Indecopi, en casos civiles, administrativos.
                    </h6>
                </div>
            </div>
        </div>
        <div className='equipo_containerConten_max equipo_container_phone'>
            <div className='equipo_subcontainerConten_mvo'>
                <div className='equipo_subcontainerConten_mvo_container_inform'>
                    <div className='equipo_subcontainerConten_mvo_subcontainer_inform'>
                        {/* <h5 className='subTitle_equipo'>Nosotros</h5> */}
                        <h3 className='titleExtense_equipo'>Sobre Nosotros</h3>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item >
                                        <Nav.Link className='equipo_action_opcion' eventKey="first">Mision</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className='equipo_action_opcion' eventKey="second">Vision</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className='equipo_action_opcion' eventKey="terty">Objetivos</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className='equipo_action_opcion' eventKey="cuarto">Valores</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                </Col>
                                <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane className='equipo_info_justificado' eventKey="first">
                                        Somos una empresa líder, orientada a brindar soluciones integrales y de excelencia en los ámbitos de derecho, salud, educación y la comunicación, con un fuerte compromiso con el progreso y la transformación positiva de la sociedad peruana.
                                        En MLopez SAC trabajamos con el compromiso de ser la mejor  en servicios legales, ofreciendo asesoría y defensa técnica de alta calidad, con un enfoque ético, responsable y orientado al valor social, Con Vitalia, buscamos ser referencia en salud y educación, acercando servicios médicos, campañas preventivas y programas formativos al alcance de todos. Y mediante HTVPerú, con nuestro canal digital, aspiramos a liderar la difusión de contenidos informativos de valor que fortalezcan una ciudadanía crítica, activa e informada.
                                        Nuestra misión es consolidarnos como una empresa modelo, que inspira confianza, lidera con impacto social y marca la diferencia en cada una de sus áreas de acción.
                                    </Tab.Pane>
                                    <Tab.Pane className='equipo_info_justificado' eventKey="second">
                                        Ser la mejor empresa multidisciplinaria en la región Piura y en nuestro país, reconocida por su liderazgo en los sectores de servicios legal, salud, educación y comunicación digital, comprometiéndonos con la justicia, el desarrollo social y la información transparente.
                                        A través de nuestras marcas Mlopez Sac, Vitalia y HTVPerú, nos proponemos alcanzar un alto posicionamiento empresarial y social, ofreciendo servicios legales especializados con enfoque preventivo; atención en salud, formación educativa de calidad; y contenidos informativos innovadores, útiles y veraces. Nuestro trabajo se guía por valores de honestidad, lealtad y confidencialidad, consolidando la confianza de nuestros clientes y el reconocimiento institucional, con el objetivo de contribuir activamente al bienestar colectivo, la paz social y el desarrollo sostenible de nuestra región y del país.
                                    </Tab.Pane>
                                    <Tab.Pane className='equipo_info_justificado' eventKey="terty">
                                        Nuestro objetivo institucional es brindar soluciones integrales y de excelencia en los campos del derecho, la salud, la educación y la comunicación digital, articulando nuestras acciones desde un enfoque ético, humano y social. Buscamos generar un impacto positivo en la vida de las personas, especialmente en los sectores más vulnerables, promoviendo el acceso a servicios legales responsables, atención médica oportuna, formación educativa de calidad y contenidos comunicacionales que fortalezcan la ciudadanía crítica y participativa. Trabajamos de manera multidisciplinaria para responder con eficiencia y compromiso a las necesidades reales de la comunidad, consolidándonos como un referente regional que contribuye activamente al desarrollo sostenible, la justicia social y el bienestar colectivo.
                                    </Tab.Pane>
                                    <Tab.Pane className='equipo_info_justificado' eventKey="cuarto">
                                    <ListGroup>
                                        <ListGroup.Item>Ética</ListGroup.Item>
                                        <ListGroup.Item>Compromiso social</ListGroup.Item>
                                        <ListGroup.Item>Excelencia</ListGroup.Item>
                                        <ListGroup.Item>Transparencia</ListGroup.Item>
                                        <ListGroup.Item>Humanismo</ListGroup.Item>
                                        <ListGroup.Item>Multidisciplinariedad</ListGroup.Item>
                                        <ListGroup.Item>Confidencialidad</ListGroup.Item>
                                        <ListGroup.Item>Empatía</ListGroup.Item>
                                    </ListGroup>
                                    </Tab.Pane>
                                </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </div>
        {(width < 720)?<div style={{height: "80px"}}></div>:<div style={{height: "80px"}}></div>}
        <div className='home_containerConten_C'>
            <div className='home_carrousel_info_container_person'>
                <h5 className='subTitle'>Nuestros abogados</h5>
                <h3 className='titleExtense'>Conozca a nuestros abogados</h3>
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
                })}
                {/* .................................................................... */}
            </Carousel>}
            </div>
        </div>
        <div style={{height: "100px"}}></div>
      </>
  );
}

export default Equipo;
