import React from 'react'

const SectionHeader = ({paragraph}) => {
  return (
    <div className='section__header'>
        <h2 className='section__header-paragraph'>{paragraph}</h2>
    </div>
  )
}

export default SectionHeader