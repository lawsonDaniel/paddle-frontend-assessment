import React from 'react'
import Card from './Card'
import Style from '../../styles/blog.module.css'

const Cards = () => {
  return (
    <div className={Style.cards}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default Cards