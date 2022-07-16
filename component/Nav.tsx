import React,{useState} from 'react'
import Style from '../styles/comingsoon.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../images/logo.png'
import Link from 'next/link'
import Image from 'next/image';

const Nav = () => {
      // control responsive nav
  const[isOpen,setIsOpen]= useState(false)
  return (
    <nav className={Style.nav}>
        <div className={Style.logoContainer}>
        <Image  src={Logo} alt="logo" className={Style.logo}/>
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
      <CloseIcon  className={isOpen ? `${Style.close} ${Style.closeclose}` : ` ${Style.closeclose}`} onClick={()=>{
          setIsOpen(false)
        }} />
        <MenuIcon onClick={()=>{
          setIsOpen(true)
        }} style={{color:"#fff"}} className={Style.hamburger}/>
      </nav>
  )
}

export default Nav