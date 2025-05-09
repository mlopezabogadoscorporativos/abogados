import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./formcorreosend2.css";
import { useEffect, useRef, useState } from "react";
import { getServisios } from "../rotes_Api/servicios";
import emailjs from '@emailjs/browser';
import { handleNewNotification, useNotification } from "../Notifications/useNotificacion";

function FormCorreoContacto(props) {

    const form = useRef();
    const [dataServicios, setDataServicios] = useState([
        {id: 8, icon: "bi bi-percent", title: "Ejecución de garantías",descripccionBrev: ""},
    ]);
    const dispatch = useNotification();

    useEffect(() => {
        const data = getServisios();
        setDataServicios(data);
        return () => {}
    }, []);

    const enviarFormulario = (e) => {
        e.preventDefault();

        const data = {
            "nombre": e.target.textnombre.value,
            "correo": e.target.textcorreo.value,
            "descripccion": e.target.textdescripccion.value,
        }

        emailjs.send('service_nu52yai', 'template_ank69nr', data, {
            publicKey: 'LsirSU39vFtMpdCne',
        })
        .then(
            () => {
                handleNewNotification(dispatch,'Se contacto correctamente con la empresa !.', 200);
                limpiarCasillas();
            },
            (error) => {
                handleNewNotification(dispatch,'Sucedio un error al enviar el correo.', 404);
                limpiarCasillas();
            },
        )
    }

    const limpiarCasillas = () => {
        document.getElementById("textnombre").value = "";
        document.getElementById("textcorreo").value = "";
        document.getElementById("textdescripccion").value = "";
        // document.getElementById("selectFormu").value = "0";
    }
  
    return (
        <>
            <div className='contact_container_form'>
                <Container>
                    <Form ref={form} onSubmit={enviarFormulario}>
                        <Row>
                            <Col><Form.Control id="textnombre" type="text" placeholder="Nombre" /></Col>
                        </Row>
                        <div style={{height:"10px"}}></div>
                        <Row>
                            <Col><Form.Control id="textcorreo" type="text" placeholder="Correo" /></Col>
                        </Row>
                        <div style={{height:"10px"}}></div>
                        <Row>
                            <Col><Form.Control id="textdescripccion" style={{height: "150px"}} as="textarea" aria-label="With textarea" placeholder='Descripccion' /></Col>
                        </Row>
                        <div style={{height:"10px"}}></div>
                        <Row>
                            <Col><Button className='boton_envio_email' type="submit" >Enviar</Button></Col>
                        </Row>
                        <div style={{height:"10px"}}></div>
                    </Form>
                </Container>
            </div>
        </>
    );
  }
  
  export default FormCorreoContacto;