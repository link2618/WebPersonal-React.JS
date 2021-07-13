import React from 'react'

export const Footer = () => {

    const date = new Date().getFullYear()
    
    return (
        <footer>
            <div className="container">
                <p className="center">
                    <i className="hecho">Copyright © {date} Hecho por</i> <i><b className="dueno">Hugo Eduardo Carvajalino Solano</b></i>
                </p>
            </div>
        </footer>
    )
}
