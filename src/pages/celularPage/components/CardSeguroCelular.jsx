import "./cardSeguroCelular.css";
import React from 'react'
import { dataCardCelulares } from '../data'

export const CardSeguroCelular = () => {


    return (
        <>
    
        <h2 className="h2-cardInfo">Asegurarte es fácil, Yuju!</h2>
        <div className='CardInfoContainerCard__1'>
        {dataCardCelulares.map((data)=> {
        // creacion de componente para las card
        return(
            <div className='CardInfoCards__1' key={data.numero}>
          <img src={data.imagen} alt="" />
            <h3 className="h3CardInfo" >{data.numero}</h3>
            <p className="pCardInfo-bici">
              {data.isStrongFirst ? (
                <>
                  <strong>{data.tituloStrong}</strong> {data.tituloNormal}
                </>
              ) : (
                <>
                  {data.tituloNormal} <strong>{data.tituloStrong}</strong>
                </>
              )}
            </p>
          </div>
            
        )
        
        })}
        </div>
        
        </>
      )
}
