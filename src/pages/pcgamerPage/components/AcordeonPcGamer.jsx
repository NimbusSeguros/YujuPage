import React from 'react'
import { AcordeonCompPcGamer } from './AcordeonCompPcGamer'
import { dataAcordenPcGamer } from '../data/dataAcordeonPcGamer'


export const AcordeonPcGamer = () => {
    return (
        <div className="padreDiv-acc">
        <h2 className="h2Acordeon-acc">¿Te gustaría saber más sobre el seguro de PC gamer?</h2>
        <h3 className="h3Acordeon-acc">En Yuju Seguros nos gusta que estés bien informado, por eso te dejamos algunas respuestas a las preguntas más frecuentes:</h3>
        
        {dataAcordenPcGamer.map((resp)=> {
                return(
                  <div className="divAcordeonComp" key={resp.id}>
                  < AcordeonCompPcGamer id={resp.id} title = {resp.title} content = {resp.subtitle} />
                
                  </div>
                )})}
        
        
        
            </div>
      )
}
