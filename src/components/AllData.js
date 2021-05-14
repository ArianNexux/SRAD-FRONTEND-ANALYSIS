import React from 'react'
import './AllData.css'
import vacineImg from './vacine.png'
import estetoscopImg from './estetoscopio.png'
import recoveredImg from './recovered.png'
import criticImg from './critico.png'
import obitosImg from './obitos.png'
import GrowthTrendFinal from './GrowthTrendFinal'
export default function AllData() {
    return (
        <div className="container" >
            <div className="info-graph">
                
                <div className="icon-info" >
                    <img src={vacineImg} />
                    <p>CONFIRMADOS</p>

                </div>
                <div className="icon-info" >
                    <img src={estetoscopImg} />
                    <p>ACTIVOS</p>
                </div>
                <div className="icon-info" >
                    <img src={recoveredImg} />
                    <p>RECUPERADOS</p>
                </div>
                <div className="icon-info" >
                    <img src={criticImg} />
                    <p>CRÍTICOS</p>
                </div>
                <div className="icon-info" >
                    <img src={obitosImg} />
                    <p>ÓBITOS</p>
                </div>
            </div>
            <div className="graph-data">
                <div className="top" >
                    <span>TOTAL GERAL</span>
                    <span> 25942 </span>
                    <span> 2014 </span>
                    <span> 23341 </span>
                    <span> 12 </span>
                    <span> 587 </span>
                </div>
                <div className="bottom" >
                    <span>NOVOS CASOS</span>
                    <span> 232 </span>
                    <span> 175 </span>
                    <span> 53 </span>
                    <span> 2 </span>
                    <span> 4 </span>
                </div>
            </div>

            <GrowthTrendFinal/>
        </div>
    )
}
