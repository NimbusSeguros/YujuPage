import { MensajeWspCelular } from "../data/MensajeWspCelular";
import "./headerCelulares.css";





export const HeaderCelulares = () => {
  return (
<header className='header-celular'>
    <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735217735/Header-celular_kgoc2j.webp" alt=""  className='imgPorDefectoMotos' />
    <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1734617430/Header-celular_sgv3iw.webp" alt="" className='imgRemplazoMotos'  />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1734020664/Header-celular-celular_geaaye.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-celular'>
    <h1 className='h1-celular'>SEGURO DE CELULAR</h1>
    <h2 className='h2-celular'>Conectate con el mundo con seguridad. <br/>Elegí el plan que más te beneficie.</h2>
    <h3 className='h3-celular'>Tenemos las mejores opciones de seguro, para que puedas disfrutar de las fotos, <br/>los mensajes y las llamadas que te importan con el mejor respaldo.</h3>
    <div className="buttonPadreMotoBanner">
            <a  target="_blank" rel="noopener noreferrer" >
              <button className='buttonMotoHeader' onClick={()=> MensajeWspCelular(" seguro para celular")}>Hablá con un asesor</button>
            </a>
            <span className="separador">°</span>

            <div class="separador-container">
            <div class="linea"></div>
            <span class="separador-celular">°</span>
            <div class="linea"></div>
            </div>

            <a href="https://www.segurocell.com/?pid=09d90af096ee93aae1cecbb338d43020" target="_blank" rel="noopener noreferrer">
              <button className='buttonMotoHeader'>Cotizá por tu cuenta</button>
            </a>
          </div>
        </div>
  
    </header>
  )
}
