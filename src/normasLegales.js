import { Button, ButtonGroup, ButtonToolbar, Card, Carousel, Form, Modal } from 'react-bootstrap';
import './normasLegales.css';
// import trasparent from './img/imagenTrasparente.png';
// import trasparentH from './img/trasparenteHorizontal.png';
import { useEffect, useState } from 'react';
import { getServisios } from './rotes_Api/servicios';
import "bootstrap-icons/font/bootstrap-icons.css";
import { getPostUser } from './rotes_Api/publicaciones';
// import FormCorreoServices from './form_corre_send/formcorreosend';
// https://www.youtube.com/watch?v=bhMUcU3LXHg

function CardService(props) {
  const {id, title, autor,date, imagen, actionMas} = props;
    return (
      <div className='normaLegal_item_text_container_principal' onClick={()=>{actionMas()}}>
          <Card style={{ width: '18rem' }}>
            <Card.Img className='normaLegal_item_image' variant="top" src={((imagen == "") || (imagen.indexOf(".jpg") == -1))?"https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg": imagen} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text className='normaLegal_item_text'>
                {autor}
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{date.split("T")[0]}</small>
            </Card.Footer>
          </Card>
          <div className='normaLegal_item_text_container_principal_item_id'>#&nbsp;{id}</div>
      </div>
    );
}

// function ModalAction(props) {

//     const {
//         setstate = (stade)=> {},
//         dataServicioModal = {id: 8, presio: 2000, icon: "bi bi-percent", title: "Ejecución de garantías",descripccionBrev: "Nuestra empresa CORPORATIVO MLOPEZ S.A.C, es una persona jurídica de derecho privado, promotora del Estudio Jurídico « MLÓPEZ ABOGADOS – ASESORES & CONSULTORES » Cuyo objeto social, es la prestación de NomasLegales de asesoría legal y defensa técnica material, en asuntos empresariales, comerciales, tributarios, laborales."},
//     } = props;
  
//     const handleClose = () => setstate(false);
//     // const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Modal show={props.state} className='container_modal_servicio' onHide={handleClose}>
//           <Modal.Header className='delete_close_modale' closeButton>
//             {/*  */}
//             <div className='servicio_container_modal_header'>
//                 <Modal.Title className='servicio_container_modal_header_title' >{dataServicioModal.title}</Modal.Title>
//                 {/* <div className='presio_servicio_modal'>S/. {dataServicioModal.presio}</div> */}
//             </div>
//           </Modal.Header>
//           <Modal.Body>{dataServicioModal.descripccionBrev}</Modal.Body>
//           <Modal.Footer className='servicio_container_modal_footer'>
//             <Button className='servicio_container_modal_footer_button' variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             {/* <Button variant="primary" onClick={handleClose}>
//               Save Changes
//             </Button> */}
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
// }

// const groupByPars = (array = [], pars = 2 ) => {
//     const arrayfinal = {}
//     for (let i = 0; i < array.length; i++) {
  
//       const codePars = parseInt(i / pars , 10)
//       const valueInsert = Object.keys(arrayfinal).filter((item) => item == codePars).length > 0
  
//       if (valueInsert) {
//         // console.log([...arrayfinal[`${codePars}`]].push(array[i]))
//         arrayfinal[`${codePars}`].push(array[i])
//       }else{
//         arrayfinal[`${codePars}`] = [array[i]]
//       }
//     }
  
//     // console.log(arrayfinal)
//     return arrayfinal
// }
  

function NormasLegales() {
    const [width, setWidth] = useState(window.innerWidth);
    const [stateModal, setStateModal] = useState(false);
    const [keyServicio, setkeyServicio] = useState(0);
    const [dataNomasLegales, setDataNomasLegales] = useState([
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 12},
        {id: 13},
        {id: 14},
        {id: 15},
        {id: 16},
        {id: 17},
        {id: 18},
        {id: 19},
        {id: 20},
        {id: 21},
        {id: 22},
        {id: 23},
        {id: 24},
        {id: 26},
        {id: 27},
        {id: 28},
        {id: 29},
        {id: 30},
        {id: 31},
        {id: 32},
        {id: 33},
        {id: 34},
        {id: 35},
        {id: 36},
        {id: 37},
        {id: 38},
        {id: 39},
        {id: 40},
        {id: 41},
        {id: 42},
        {id: 43},
        {id: 44},
        {id: 45},
        {id: 46},
        {id: 47},
        {id: 48}
    ]);
    const [dataNomasLegalesSearch, setDataNomasLegalesSearch] = useState([
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 12},
        {id: 13},
        {id: 14},
        {id: 15},
        {id: 16},
        {id: 17},
        {id: 18},
        {id: 19},
        {id: 20},
        {id: 21},
        {id: 22},
        {id: 23},
        {id: 24},
        {id: 26},
        {id: 27},
        {id: 28},
        {id: 29},
        {id: 30},
        {id: 31},
        {id: 32},
        {id: 33},
        {id: 34},
        {id: 35},
        {id: 36},
        {id: 37},
        {id: 38},
        {id: 39},
        {id: 40},
        {id: 41},
        {id: 42},
        {id: 43},
        {id: 44},
        {id: 45},
        {id: 46},
        {id: 47},
        {id: 48}
    ]);
    const [dataNomasLegalesGroup, setdataNomasLegalesGroup] = useState([]);
    const [indexMostrar, setindexMostrar] = useState(0);
    const [indexPosition, setindexPosition] = useState(0);
    
    // captura la redimencion de la pantalla
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        getServisios();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {  
        // realizar un subindex
        const dataPost = getPostUser().reverse();
        setDataNomasLegales(dataPost);
        setDataNomasLegalesSearch(dataPost);
        // const data = dataNomasLegales;
        // const lenthFilter = Math.round(dataPost.length / 12);
        const lenthFilter = Math.round(dataPost.length / 12);
        const modlenthFilter = dataPost.length % 12;
        const idexFinal = (modlenthFilter > 0)? lenthFilter + 1 : lenthFilter
        setindexMostrar(idexFinal);
        // recortar array
        setdataNomasLegalesGroup(dataPost.filter((item,ind)=>{
          return ind >= 0 && ind < 12
        }));

        return () => {}
    }, []);

    const onChangeModal = (i) => {
      window.location.href = window.location.origin + "/normaslegales/" + i;
    }

    const randomIntArrayInRange = (n = 1, min=1, max=1000) =>Array.from(
      { length: n },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );

    const recortNormasLegalisi = (indexP) => {
      setindexPosition(indexP);
      setdataNomasLegalesGroup(dataNomasLegalesSearch.filter((item,ind)=>{
        return ind >= (12 * (indexP - 1)) && ind < (12 * (indexP))
      }));
    }

    const searchInformation = () => {
      const indexP = 1;
      const palabraSearch = document.getElementById("textsearchbusc").value;
      const dataPost = dataNomasLegales.filter((item) => item.post_title.indexOf(palabraSearch) != -1);
      // cambiar el numero de indices
      const lenthFilter = Math.round(dataPost.length / 12);
      const modlenthFilter = dataPost.length % 12;
      const idexFinal = (modlenthFilter > 0)? lenthFilter + 1 : lenthFilter
      setindexMostrar(idexFinal);
      // realizar el refiltro
      setDataNomasLegalesSearch(dataPost);
      setdataNomasLegalesGroup(dataPost.filter((item,ind)=>{
        return ind >= (12 * (indexP - 1)) && ind < (12 * (indexP))
      }));
    }

    const resetInfomacion = () => {
      const indexP = 1;
      // cambiar el numero de indices
      const lenthFilter = Math.round(dataNomasLegales.length / 12);
      const modlenthFilter = dataNomasLegales.length % 12;
      const idexFinal = (modlenthFilter > 0)? lenthFilter + 1 : lenthFilter
      setindexMostrar(idexFinal);
      // realizar el refiltro
      setDataNomasLegalesSearch(dataNomasLegales);
      setdataNomasLegalesGroup(dataNomasLegales.filter((item,ind)=>{
        return ind >= (12 * (indexP - 1)) && ind < (12 * (indexP))
      }));
    }

    return (
      <>
        <div className='NomasLegales_containerConten' style={{height: "300px"}}>
            <div className='NomasLegales_infoTitle_container'>
                <h3 className='title_infoTile_NomasLegales'>NORMAS LEGALES</h3>
                <h5 className='subtitle_infoTile_NomasLegales'>Inicio - Normas</h5>
            </div>
        </div>
        <div style={{height: "80px"}}></div>
        <div className='NomasLegales_containerConten_C'>
            <div className='NomasLegales_carrousel_info_container_person'>
                {/* <h5 className='subTitle'>Normas Legales</h5> */}
                <h3 className='titleExtense'>Conozcan las Normas Legales</h3>
            </div>
            <div className='NomasLegales_carrousel_container_search'>
              <div className='NomasLegales_carrousel_container_search_filter'>
                <Form.Control id='textsearchbusc' type="text" placeholder="Buscar" onKeyUp = {()=>{
                  if (document.getElementById("textsearchbusc").value == ""){
                    resetInfomacion();
                  }
                }} />
                <div className='NomasLegales_carrousel_container_search_filter_button' onClick={searchInformation}>
                  <i class="bi bi-search"></i>
                </div>
              </div>
            </div>
            <div style={{height: "50px"}}></div>
            <div className='NomasLegales_carrousel_container_person'>
                {
                    dataNomasLegalesGroup.map((item)=>{
                        return (<CardService 
                            id = {item.ID}
                            title = {item.post_title}
                            autor = {item.post_author_name}
                            date = {item.post_date}
                            imagen = {item.guid}
                            actionMas = {()=>{onChangeModal(item.ID);}}
                        />);
                    })
                }
            </div>
            <div style={{height: "50px"}}></div>
            <div className='NomasLegales_carrousel_container_opccion'>
              <div className='NomasLegales_carrousel_container_opccion_filter'>
                <ButtonToolbar aria-label="Toolbar with button groups">
                  <ButtonGroup className="me-2" aria-label="First group">
                    {(indexMostrar > 1)?randomIntArrayInRange(indexMostrar).map((item, ind)=>{
                      if(ind == 0) return <Button onClick={()=>{recortNormasLegalisi(ind + 1)}} className='NomasLegales_carrousel_container_opccion_filter_button NomasLegales_carrousel_container_opccion_filter_button_roudR'>{ind + 1}</Button>
                      if(ind == indexMostrar - 1) return <Button onClick={()=>{recortNormasLegalisi(ind + 1)}} className='NomasLegales_carrousel_container_opccion_filter_button NomasLegales_carrousel_container_opccion_filter_button_roudL'>{ind + 1}</Button>
                      return <Button onClick={()=>{recortNormasLegalisi(ind + 1)}} className='NomasLegales_carrousel_container_opccion_filter_button'>{ind + 1}</Button>
                    }):<></>}
                  </ButtonGroup>
                </ButtonToolbar>
              </div>
            </div>
        </div>
        <div style={{height: "80px"}}></div>
      </>
  );
}

export default NormasLegales;
