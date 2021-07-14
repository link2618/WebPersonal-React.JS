import React from 'react'
import ReactTooltip from 'react-tooltip'

export const Title = ({texto='texto', icono, autor}) => {

    return (
        <div className='titulos'>
            <img className="icono" src={icono} alt={autor} data-tip data-for="TooltipTitle" />
            <h4> {texto.toUpperCase()} </h4>

            <ReactTooltip id="TooltipTitle" place="top" type="info" effect="solid">
                {autor}
            </ReactTooltip>
        </div>
    )
}
