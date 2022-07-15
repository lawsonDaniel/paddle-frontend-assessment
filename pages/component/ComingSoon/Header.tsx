import Image from 'next/image'
import React from 'react'
import Logo from '../../../images/logo.png'
import Link from 'next/link'
import Style from '../../../styles/comingsoon.module.css'
import Cards from './Cards'



const Header = () => {
 
  
  
  return (
    <header className={Style.header}>
      <nav className={Style.nav}>
        <div className={Style.logoContainer}>
        <Image src={Logo} alt="logo" className={Style.logo}/>
        </div>
        <ul className={Style.navlink}>
          <li>
            <Link href="/about">
              <a>About us</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>blog</a>
            </Link>
          </li>
          <li >
            <Link href="/about">
              <a className={Style.contact}>contact us</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={Style.jumbotron}>
          <h1>Something awesome is coming soon</h1>
          <p>Your all-in-one affiliate marketing tracking software track, automate and optimize your campaigns.</p>
           <div className={Style.cardContainer}>
              <Cards number={7} string="Days"/>
              <Cards number={24} string="Hours"/>
              <Cards number={54} string="Minutes"/>
              <Cards number={11} string="Seconds"/>
           </div>
           <form className={Style.form}>
           <input className={Style.input} placeholder="First Name" type="text" required />
           <input className={Style.input} placeholder="Last Name" type="text" required />
           </form>
      </div>
      
      <div  className={Style.cssball1}></div>
      <div className={Style.cssball2}></div>
      <div className={Style.cssball3}></div>
    </header>
  )
}

export default Header