import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./formcorreosend2.css";
import { useEffect, useRef, useState } from "react";
import { getServisios } from "../rotes_Api/servicios";
import emailjs from '@emailjs/browser';

function FormCorreoContacto(props) {

    const form = useRef();
    const [dataServicios, setDataServicios] = useState([
        {id: 8, icon: "bi bi-percent", title: "Ejecución de garantías",descripccionBrev: ""},
    ]);

    useEffect(() => {
        const data = getServisios();
        setDataServicios(data);
        return () => {}
    }, []);

    const enviarFormulario = (e) => {
        e.preventDefault();

        // console.log(e.target.selectFormu.value)
        // console.log(form.current)
        const data = {
            "nombre": e.target.textnombre.value,
            "correo": e.target.textcorreo.value,
            "servicio": ("Selecciona el Servicio" == e.target.selectFormu.value)?"Asesoria":(dataServicios.filter((item)=>item.id == e.target.selectFormu.value)[0].title),
            "descripccion": e.target.textdescripccion.value,
        }

        emailjs.send('service_nu52yai', 'template_c3pjdvi', data, {
            publicKey: 'LsirSU39vFtMpdCne',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        )
    }
  
    return (
        <>
            <div className='contact_container_form'>
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
                        <Col><Form.Control style={{height: "150px"}} as="textarea" aria-label="With textarea" placeholder='Descripccion' /></Col>
                    </Row>
                    <div style={{height:"10px"}}></div>
                    <Row>
                        <Col><Button className='boton_envio_email' >Primary</Button></Col>
                    </Row>
                    <div style={{height:"10px"}}></div>
                </Container>
            </div>
        </>
    );
  }
  
  export default FormCorreoContacto;