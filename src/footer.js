import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faHome,faPhone } from '@fortawesome/free-solid-svg-icons'
import "bootstrap-icons/font/bootstrap-icons.css";


function Footer() {

   const onRedirection = (url) => {
      var win = window.open(url, '_blank');
      win.focus();
   }

   return (
      <>
        <div className='footer_conteiner_page'>
           <div className='footer_container_redesSocial'>
              <div className='footer_item_redSocial' onClick={()=>{onRedirection("")}}>
                 <i class="bi bi-facebook"></i>
              </div>
              <div className='footer_item_redSocial' onClick={()=>{onRedirection("https://www.youtube.com/@mlabogadosasesoresyconsultores?sttick=0")}}>
                 <i class="bi bi-youtube"></i>
              </div>
              <div className='footer_item_redSocial' onClick={()=>{onRedirection("https://www.instagram.com/mlopez.abogados/")}}>
                 <i class="bi bi-instagram"></i>
              </div>
              <div className='footer_item_redSocial' onClick={()=>{onRedirection("https://www.linkedin.com/in/ml%C3%B3pez-abogdaos-asesores-y-consultores-19b88529a/")}}>
              <i class="bi bi-linkedin"></i>
              </div>
           </div>
           <div className='footer_container_contact'>
              <div className='footer_container_ItemContac'>
                 <div className='footer_container_ItemConta_icon'>
                    <FontAwesomeIcon icon={faHome} size='2x' color='#303F9F' />
                 </div>
                 <div className='footer_container_ItemConta_info'>
                    <h5>Our Office</h5>
                    <h6>Av. Grau 1692</h6>
                 </div>
              </div>
              <div className='footer_container_ItemContac'>
                 <div className='footer_container_ItemConta_icon'>
                    <FontAwesomeIcon icon={faEnvelope} size='2x' color='#303F9F' />
                 </div>
                 <div className='footer_container_ItemConta_info'>
                    <h5>Email Us</h5>
                    <h6>
                      mlopezabogadoscorporativos
                    </h6>
                 </div>
              </div><div className='footer_container_ItemContac'>
                 <div className='footer_container_ItemConta_icon'>
                    <FontAwesomeIcon icon={faPhone} size='2x' color='#303F9F' />
                 </div>
                 <div className='footer_container_ItemConta_info'>
                    <h5>Call Us</h5>
                    <h6>977657647</h6>
                 </div>
              </div>
           </div>
           <div className='footer_container_copyraid'>
             <div className='footer_subcontainer_copyraid'>
                 <p className='footer_text_copyraid'>© <b>Your Site Name.</b> All Rights Reserved.</p>
                 <p className='footer_text_copyraid'>Designed by <b>HTML Codex</b></p>
             </div>
           </div>
        </div>
      </>
  );
}

export default Footer;
