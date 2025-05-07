// import { ComponentBotton } from '../../../morvius-service/components';
import './routerdesconocido.css'

export function RouterDesconocido(props){
    return(<div className="route_descono_Container">
        <div className="route_descono_Container_subcontent">
            {/* <div className="route_descono_Container_subcontent_foto"></div> */}
            <div className='route_descono_Container_subcontent_title'>Oops !</div>
            <div style={{height: '5px'}} />
            <div className='route_descono_Container_subcontent_subtitle'>404 - PAGE NOT FOUND</div>
            <div style={{height: '5px'}} />
            <div className="route_descono_Container_subcontent_text">La pagina que desea acceder se encuentra en mantenimiento. Porfavor regrese mas tarde.</div>
            <div style={{height: '25px'}} />
        </div>
    </div>);
}