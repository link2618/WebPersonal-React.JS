import React from 'react'

export const SkillBar = ({title, percent}) => {
    return (
        <>
            <div className="skills-item-header">
                <span className="skills-title-bar">{title}</span>
                <span className="skills-percent">{percent}</span>
            </div>
            <div className="skills-item-bar">
                <div className="skills-item-percent" style={{width: `${percent}`}}></div>
            </div>
        </>
    )
}
