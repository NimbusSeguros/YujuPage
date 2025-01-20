
import { MensajeWspRetiro } from "../data";
import "./HeaderRetiro.css";


export const HeaderRetiro = () => {
  return (
    <header className='header-retiro'>
    <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733764017/Header-seguro-retiro_gynemg.png" alt=""  className='imgPorDefectoMotos' />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1734360830/Header-retiro-tablet_t1pr0d.png" alt="" className='imgRemplazoMotos'  />
    <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733764447/Header-retiro-celular_oxfbte.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-retiro'>
    <h1 className='h1-retiro'>SEGURO DE RETIRO</h1>
    <h2 className='h2-retiro'>Invertí en tu futuro. El producto ideal para complementar tu jubilación.</h2>
    <h3 className='h3-retiro'></h3>
    <a  target="_blank" rel="noopener noreferrer" >
    <button className='buttonVidaHeader' onClick={()=> MensajeWspRetiro("Seguro de Retiro")}>Cotizá</button>
    </a>
    </div>
  
    </header>
  )
}
