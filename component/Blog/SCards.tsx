import React from 'react'
import ShortCard from './ShortCard'
import Style from '../../styles/blog.module.css'

const SCards = () => {
  return (
    <div className={Style.cards}>
        <ShortCard/>
        <ShortCard/>
        <ShortCard/>
    </div>
  )
}

export default SCards