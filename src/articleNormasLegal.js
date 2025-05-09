import { Button, ButtonGroup, ButtonToolbar, Card, Carousel, Form, Modal } from 'react-bootstrap';
import './articleNormasLegal.css';
import { useEffect, useState } from 'react';
import { getServisios } from './rotes_Api/servicios';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useParams } from 'react-router';
import { getPostUserId } from './rotes_Api/publicaciones';
// import { getPostUser } from './rotes_Api/publicaciones';
// https://www.youtube.com/watch?v=bhMUcU3LXHg

function ArticleNormasLegales() {
    const [width, setWidth] = useState(window.innerWidth);
    // const [stateModal, setStateModal] = useState(false);
    // const [keyServicio, setkeyServicio] = useState(0);
    const [datapostNormalLegal, setDatapostNormalLegal] = useState({id: 1, post_author_name: "", post_title: "", guid:"",post_date:"2025-05-02T20:43:44.000Z"});
    const {idpost} = useParams();
    // const [datapostNormalLegalSearch, setDatapostNormalLegalSearch] = useState([
    //     {id: 1},
    //     {id: 2},
    //     {id: 3},
    //     {id: 4},
    //     {id: 5},
    //     {id: 6},
    //     {id: 7},
    //     {id: 8},
    //     {id: 9},
    //     {id: 10},
    //     {id: 11},
    //     {id: 12},
    //     {id: 13},
    //     {id: 14},
    //     {id: 15},
    //     {id: 16},
    //     {id: 17},
    //     {id: 18},
    //     {id: 19},
    //     {id: 20},
    //     {id: 21},
    //     {id: 22},
    //     {id: 23},
    //     {id: 24},
    //     {id: 26},
    //     {id: 27},
    //     {id: 28},
    //     {id: 29},
    //     {id: 30},
    //     {id: 31},
    //     {id: 32},
    //     {id: 33},
    //     {id: 34},
    //     {id: 35},
    //     {id: 36},
    //     {id: 37},
    //     {id: 38},
    //     {id: 39},
    //     {id: 40},
    //     {id: 41},
    //     {id: 42},
    //     {id: 43},
    //     {id: 44},
    //     {id: 45},
    //     {id: 46},
    //     {id: 47},
    //     {id: 48}
    // ]);
    // const [datapostNormalLegalGroup, setdataNomasLegalesGroup] = useState([]);
    // const [indexMostrar, setindexMostrar] = useState(0);
    // const [indexPosition, setindexPosition] = useState(0);
    
    // captura la redimencion de la pantalla
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        getServisios();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {  
        const dataPost = getPostUserId(idpost);
        setDatapostNormalLegal(dataPost)
        return () => {}
    }, []);

    return (
      <>
        {(datapostNormalLegal == null)?<>
          <div style={{width: "100%", height: "600px"}}>
                  
          </div>
        </>:<>
          <div className='postNormalLegal_containerConten' style={{height: "300px"}}>
              <div className='postNormalLegal_infoTitle_container' style={{backgroundImage: `url("${(datapostNormalLegal.guid.indexOf(".jpg") != -1)?datapostNormalLegal.guid:"https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"}")`}}>
                  <h3 className='title_infoTile_postNormalLegal'>{datapostNormalLegal.post_title}</h3>
              </div>
          </div>
          <div style={{height: "80px"}}></div>
          <div className='postNormalLegal_containerConten_C'>
              <div className='postNormalLegal_infoTitle_container_principal'>
                <div className='postNormalLegal_infoTitle_container_autor'>Por: <b>{datapostNormalLegal.post_author_name}</b></div>
                <div className='postNormalLegal_infoTitle_container_Fecha'><b>{datapostNormalLegal.post_date.split("T")[0]} - {datapostNormalLegal.post_date.split("T")[1].replace(".000Z"," ")}</b></div>
                <div style={{height: "40px"}}></div>
                <div className='postNormalLegal_infoTitle_container_content' dangerouslySetInnerHTML={
                  { __html: datapostNormalLegal.post_content }}></div>
              </div>
              <div style={{height: "50px"}}></div>
              <div className='postNormalLegal_carrousel_container_person'>
                  
              </div>
          </div>
          <div style={{height: "40px"}}></div>
        </>}
        
      </>
  );
}

export default ArticleNormasLegales;
