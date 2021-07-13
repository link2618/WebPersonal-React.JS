import React from 'react'

export const Footer = () => {

    const date = new Date().getFullYear()
    
    return (
        <footer>
            <div className="container">
                <p className="hecho">
                    Copyright © {date} Hecho por &nbsp;
                </p>
                <p className="dueno">
                    Hugo Eduardo Carvajalino Solano
                </p>
            </div>
        </footer>
    )
}
