import React from 'react'
import Particles from 'react-particles-js';
import particlesConfig from '../../config/particle-config'

export const ParticlesBackground = () => {
    return (
        <Particles params={particlesConfig} height='25vh' style={{position: 'absolute'}} />
    )
}
