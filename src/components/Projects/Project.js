import React from 'react'

export const Project = ({img, msg, link}) => {
    
    return (
        <>
            <div className="card-content superiorProject">
                <span className='title-project'>{msg}</span>
                <img alt={msg} className="responsive-img" src={img} />
            </div>
            <div className="card-action">
                <div className="botonconf">
                    <a href={link} className="btn waves-effect" target="_blank" rel="noopener noreferrer">Ver</a>
                </div>
            </div>
        </>
    )
}
