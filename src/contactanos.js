import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import './contactanos.css';
import { useCallback, useState } from 'react';
import FormCorreoContacto from './form_corre_send/formcorreosend2';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// https://www.youtube.com/watch?v=bhMUcU3LXHg
  
function MapaGoogle() {
    const containerStyle = {
        width: '100%',
        height: '100%',
    }
      
    const center = {
        lat: -5.191839270148912,
        lng: -80.64232059999999,
    }

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: 'AIzaSyAVfpBctkjK5tge-8JaTUqm-nulR923F1Y',
    })
  
    const [map, setMap] = useState(null)
  
    const onLoad = useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center)
      map.fitBounds(bounds)
  
      setMap(map)
    }, [])
  
    const onUnmount = useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    ) : (
      <></>
    )
}


function Contactos() {
  return (
      <>
        <div className='contact_containerConten' style={{height: "300px"}}>
            <div className='contact_infoTitle_container'>
                <h3 className='title_infoTile_contact'>Contactos</h3>
                <h5 className='subtitle_infoTile_contact'>Inicio - Contactos</h5>
            </div>
        </div>
        <div className='contact_containerConten' >
            <div className='contact_infoTitle_container_Contac'>
                <h5 className='contact_subTitle'>Contactanos</h5>
                <h3 className='contact_titleExtense'>Agende su cita</h3>
                <div className='contact_container_form_iframe'>
                    <FormCorreoContacto></FormCorreoContacto>
                    <div className='contact_container_iframe'>
                        <MapaGoogle></MapaGoogle>
                    </div>
                </div>
            </div>
        </div>
      </>
  );
}

export default Contactos;
