import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./formcorreosend.css";

function FormCorreoServices(props) {
  
    return (
        <>
            <div className='formCorreosend_containerConten_C'>
                <div className='formCorreosend_form_image_degrade'>
                    <div className='formCorreosend_form_container_mail'>
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
            </div>
        </>
    );
  }
  
  export default FormCorreoServices;