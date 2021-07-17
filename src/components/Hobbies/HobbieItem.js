import React from 'react'
import ReactTooltip from 'react-tooltip'

export const HobbieItem = ({icono, autor, titulo, id = 'TooltipHobbie'}) => {
    return (
        <div className="hobbieItem">
            <img className="iconoHobbie" src={icono} alt={autor} data-tip data-for={id} />
            <span className="hobbieName">{titulo}</span>

            <ReactTooltip id={id} place="top" type="info" effect="solid">
                {autor}
            </ReactTooltip>
        </div>
    )
}
