import Image from 'next/image'
import React,{useState} from 'react'
import Logo from '../../../images/logo.png'
import Link from 'next/link'
import Style from '../../../styles/comingsoon.module.css'
import Cards from './Cards'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header: React.FC = () => {
  // control responsive nav
  const[isOpen,setIsOpen]= useState(false)

  return (
    <header className={Style.header}>
      <nav className={Style.nav}>
        <div className={Style.logoContainer}>
        <Image src={Logo} alt="logo" className={Style.logo}/>
        </div>
        <ul className={isOpen ? `${Style.navlink} ${Style.navlinkopen}`: Style.navlink}>
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
            <Link href="/contact">
              <a className={Style.contact}>contact us</a>
            </Link>
          </li>
        </ul>
      <CloseIcon className={isOpen ? `${Style.close} ${Style.closeclose}` : ` ${Style.closeclose}`} onClick={()=>{
          setIsOpen(false)
        }} />
        <MenuIcon onClick={()=>{
          setIsOpen(true)
        }} style={{color:"#fff"}} className={Style.hamburger}/>
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
          <div className={Style.inputNameContainer}>
              <input className={Style.input} placeholder="First Name" type="text" required />
              <input className={Style.input} placeholder="Last Name" type="text" required />
          </div>
           <div className={Style.EmailInputContainer}>
              <input type="email" placeholder='Enter your email address...'/>
              <button value="submit">Join our waiting list</button>
           </div>
           </form>
           <div className={Style.socialMedia}>
            <YouTubeIcon/>
            <FacebookIcon/>
            <LinkedInIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
           </div>
           <div className={Style.privacy}>
            <h5>Terms of services</h5>
            <h5>Privacy policy</h5>
           </div>
           <div className={Style.copy}>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</div>
      </div>
      <div className={Style.cssball4} ></div>
      <div  className={Style.cssball1}></div>
      <div className={Style.cssball2}></div>
      <div className={Style.cssball3}></div>
    </header>
  )
}

export default Header