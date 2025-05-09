import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./formcorreosend.css";
import { useEffect, useRef, useState } from "react";
import { getServisios } from "../rotes_Api/servicios";
import emailjs from '@emailjs/browser';
import { useNotification } from "../Notifications/NotificationProvider";
import { handleNewNotification } from "../Notifications/useNotificacion";

function FormCorreoServices(props) {

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
                handleNewNotification(dispatch,'Se agendo la cita correctamente !.', 200);
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
        document.getElementById("selectFormu").value = "0";
    }


  
    return (
        <>
            <div className='formCorreosend_containerConten_C'>
                <div className='formCorreosend_form_image_degrade'>
                    <div className='formCorreosend_form_container_mail'>
                        <h3>
                            Agende su cita
                        </h3>
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
                                    <Col>
                                        <Form.Select id="selectFormu" aria-label="Default select example">
                                            <option value="0" >Selecciona el Servicio</option>
                                            {dataServicios.map((item)=>{
                                                return <option value={item.id}>{item.title}</option>
                                            })}
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <div style={{height:"10px"}}></div>
                                <Row>
                                    <Col><Form.Control id="textdescripccion" as="textarea" aria-label="With textarea" /></Col>
                                </Row>
                                <div style={{height:"10px"}}></div>
                                <Row>
                                    <Col><Button className='boton_envio_email' type="submit" >Enviar</Button></Col>
                                </Row>
                                <div style={{height:"10px"}}></div>
                            </Form>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default FormCorreoServices;