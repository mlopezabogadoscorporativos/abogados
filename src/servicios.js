import { Button, Carousel, Modal } from 'react-bootstrap';
import './servicios.css';
import trasparent from './img/imagenTrasparente.png';
import trasparentH from './img/trasparenteHorizontal.png';
import { useEffect, useState } from 'react';
import { getServisios } from './rotes_Api/servicios';
import FormCorreoServices from './form_corre_send/formcorreosend';
// https://www.youtube.com/watch?v=bhMUcU3LXHg

// function CardService(props) {
//     return (
//         <div className='servicios_iten_container'>
//             <div className='servicios_contenedor_item_cardboard_image'>
//                 <i className={props.icon}></i>
//             </div>
//             <h5 className='servicios_item_subTitle'>{props.title}</h5>
//             <p className='servicios_contenido_text'>
//                 {props.descripccionBrev}
//             </p>
//             <h5 className='servicios_contenido_link_text' onClick={()=>{props.actionMas()}}>Mas</h5>
//         </div>
//     );
// }

function CardService(props) {
    return (
      <div className='contenedor_item_cardboard'  onClick={()=>{props.actionMas()}}>
        <div className='contenedor_item_cardboard_image'>
          <i className={props.icon}></i>
        </div>
        <h5 className='subTitle' style={{color: "white"}}>{props.nombre}</h5>
      </div>
    );
}

function ModalAction(props) {

    const {
        setstate = (stade)=> {},
        dataServicioModal = {id: 8, presio: 2000, icon: "bi bi-percent", title: "Ejecución de garantías",descripccionBrev: "Nuestra empresa CORPORATIVO MLOPEZ S.A.C, es una persona jurídica de derecho privado, promotora del Estudio Jurídico « MLÓPEZ ABOGADOS – ASESORES & CONSULTORES » Cuyo objeto social, es la prestación de servicios de asesoría legal y defensa técnica material, en asuntos empresariales, comerciales, tributarios, laborales."},
    } = props;
  
    const handleClose = () => setstate(false);
    // const handleShow = () => setShow(true);
  
    return (
      <>
        <Modal show={props.state} className='container_modal_servicio' onHide={handleClose}>
          <Modal.Header className='delete_close_modale' closeButton>
            {/*  */}
            <div className='servicio_container_modal_header'>
                <Modal.Title className='servicio_container_modal_header_title' >{dataServicioModal.title}</Modal.Title>
                {/* <div className='presio_servicio_modal'>S/. {dataServicioModal.presio}</div> */}
            </div>
          </Modal.Header>
          <Modal.Body>{dataServicioModal.descripccionBrev}</Modal.Body>
          <Modal.Footer className='servicio_container_modal_footer'>
            <Button className='servicio_container_modal_footer_button' variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
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
  

function Servicios() {
    const [width, setWidth] = useState(window.innerWidth);
    const [stateModal, setStateModal] = useState(false);
    const [keyServicio, setkeyServicio] = useState(0);
    const [dataServicios, setDataServicios] = useState([
        {id: 8, icon: "bi bi-percent", title: "Ejecución de garantías",descripccionBrev: ""},
    ]);
    const [dataServiciosGroup, setdataServiciosGroup] = useState({0:[],1:[]});
    
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        getServisios()
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
          const data = getServisios();
          setDataServicios(data);
          setdataServiciosGroup(groupByPars(data, 4));
          return () => {}
      }, []);

    const onChangeModal = (i) => {setStateModal(true); setkeyServicio(i);}
    
    return (
      <>
        <div className='servicios_containerConten' style={{height: "300px"}}>
            <div className='servicios_infoTitle_container'>
                <h3 className='title_infoTile_servicios'>Servicios de abogados</h3>
                <h5 className='subtitle_infoTile_servicios'>Inicio - Servicios</h5>
            </div>
        </div>
        <div style={{height: "80px"}}></div>
        <div className='servicios_containerConten_C'>
            <div className='servicios_carrousel_info_container_person'>
                <h5 className='subTitle'>Nuestros Servicios</h5>
                <h3 className='titleExtense'>Conozcan que les ofrecemos</h3>
            </div>
            <div className='servicios_carrousel_container'>
                <div className='servicio_diseno_conteinerFlotant'></div>
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
                        <div className='servicio_contenedor_subIten_carrousel'>
                            {dataServiciosGroup[item].map((itemCard,ind)=>{
                            return (<>
                                <CardService 
                                    nombre= {itemCard.title} 
                                    icon={itemCard.icon}
                                    actionMas = {()=>{onChangeModal(itemCard.id);}}
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
                        <div className='servicio_contenedor_subIten_carrousel'>
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
        </div>
        {/* <div style={{height: "80px"}}></div> */}
        <FormCorreoServices />
        <ModalAction state = {stateModal} setstate ={setStateModal} dataServicioModal = {dataServicios.filter((item)=>{return item.id == keyServicio})[0]} ></ModalAction>
      </>
  );
}

export default Servicios;
