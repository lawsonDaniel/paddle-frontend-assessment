import React from 'react'
import Style from '../../../styles/comingsoon.module.css'

interface FunctionArg{
  number:number;
  string:string
}

const Cards = ({number,string}: FunctionArg) => {
  return (
    <div className={Style.card} >
      <div className={Style.cardHeading}>{number}</div>
      <div className={Style.cardBody}>{string}</div>
    </div>
  )
}

export default Cards