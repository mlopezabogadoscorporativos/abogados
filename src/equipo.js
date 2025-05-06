import { Carousel } from 'react-bootstrap';
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
                <h3 className='title_infoTile_equipo'>Equipo de abogados</h3>
                <h5 className='subtitle_infoTile_equipo'>Inicio - Equipo</h5>
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
        <div className='equipo_containerConten equipo_container_phone'>
            <div className='equipo_subcontainerConten_mvo'>
                <div className='equipo_subcontainerConten_mvo_container_image'>
                    <div className='equipo_subcontainerConten_mvo_image'></div>
                </div>
                <div className='equipo_subcontainerConten_mvo_container_inform'>
                    <div className='equipo_subcontainerConten_mvo_subcontainer_inform'>
                        <h5 className='subTitle_equipo'>Nuetras Metas</h5>
                        <h3 className='titleExtense_equipo'>Tenemos nuestros objetivo</h3>
                        <div className='equipo_container_mvo_item'>
                            <div className='equipo_container_mvo_item_container_id'><div>01</div></div>
                            <div className='equipo_container_mvo_item_container_texto'>
                                <h3 className='equipo_container_mvo_item_container_texto_title'>Mision</h3>
                                <h6 className='contenido_text_equipo'>
                                    Cuyo objeto social, es la prestación de servicios de asesoría legal y defensa 
                                    técnica material.
                                </h6>
                            </div>
                        </div>
                        <div className='equipo_container_mvo_item'>
                            <div className='equipo_container_mvo_item_container_id'><div>02</div></div>
                            <div className='equipo_container_mvo_item_container_texto'>
                                <h3 className='equipo_container_mvo_item_container_texto_title'>Vision</h3>
                                <h6 className='contenido_text_equipo'>
                                    Cuyo objeto social, es la prestación de servicios de asesoría legal y defensa 
                                    técnica material.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {(width < 720)?<div style={{height: "200px"}}></div>:<div style={{height: "80px"}}></div>}
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
