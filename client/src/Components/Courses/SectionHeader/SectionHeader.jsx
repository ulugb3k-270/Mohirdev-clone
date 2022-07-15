import React from 'react'
import "./sectionHeader.scss"
import {Link} from 'react-router-dom'

const SectionHeader = ({courses, href, paragraph, title}) => {
  return (
    <div className='section__header'>
        <h2 className='section__header-paragraph'><Link to={href || "/"}>{courses}</Link>{paragraph}</h2>
        <p className='section__header-title'>{title}</p>
        <span className='section__header-line'></span>
    </div>
  )
}

export default SectionHeader