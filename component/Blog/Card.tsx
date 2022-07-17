import React from 'react'
import Style from '../../styles/blog.module.css'
import User from '../../images/blog-user1.png'
import Image from 'next/image'

const Card = () => {
  return (
    <div className={Style.card}>
        <div className={Style.cardBanner}>
            <Image src={User} alt="user"/>
        </div>
        <small>SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE</small>
        <h1>12 Popup Use Cases To Increase Conversions</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
        At vero eos et accusam et justo duo dolores et ea rebum</p>
        <div className={Style.readmore}>
            <div  className={Style.lineread}></div>
            <div>Read More</div>
        </div>
    </div>
  )
}

export default Card