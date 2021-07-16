import React from 'react'

const Footer = () => {

    const date = new Date().getFullYear()
    
    return (
        <footer>
            <div className="container">
                <p className="hecho">
                    Copyright © {date} Hecho por <span className="dueno">Hugo Eduardo Carvajalino Solano</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer