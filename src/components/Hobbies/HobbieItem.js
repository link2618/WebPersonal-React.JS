import React from 'react'
import ReactTooltip from 'react-tooltip'

export const HobbieItem = ({icono, autor, titulo}) => {
    return (
        <div className="hobbieItem">
            <img className="iconoHobbie" src={icono} alt={autor} data-tip data-for="TooltipHobbie" />
            <span className="hobbieName">{titulo}</span>

            <ReactTooltip id="TooltipHobbie" place="top" type="info" effect="solid">
                {autor}
            </ReactTooltip>
        </div>
    )
}
